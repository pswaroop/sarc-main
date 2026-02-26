// import { google } from '@ai-sdk/google';
// import { streamText } from 'ai';
// import { NextRequest, NextResponse } from 'next/server';

// // Use Edge runtime for faster, serverless streaming
// export const runtime = 'edge';

// export async function POST(req: NextRequest) {
//   try {
//     // Check if API key exists
//     if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
//       console.error('Missing GOOGLE_GENERATIVE_AI_API_KEY');
//       return NextResponse.json(
//         { error: 'AI Configuration Error. Please contact support.' },
//         { status: 500 }
//       );
//     }

//     const { messages } = await req.json();

//     // Validate incoming messages
//     if (!Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: 'Invalid messages format' },
//         { status: 400 }
//       );
//     }

//     // Stream the response using Gemini
//     const result = await streamText({
//       model: google('gemini-2.0-flash'), // Google's fast, efficient model
//       maxOutputTokens: 1000,             // ✅ FIX: Use maxOutputTokens instead of maxTokens
//       temperature: 0.7,
//       // Map messages to ensure the correct role formatting
//       messages: messages.map((msg: any) => ({
//         role: msg.role === 'bot' ? 'assistant' : msg.role,
//         content: msg.content,
//       })),
//     });

//     // Return the streaming text response to the client
//     return result.toTextStreamResponse();
//   } catch (error) {
//     console.error('Chat API Error:', error);
    
//     // Return a generic error so the frontend fallback logic triggers
//     return NextResponse.json(
//       { error: 'AI service temporarily unavailable. Please try again.' },
//       { status: 500 }
//     );
//   }
// }
// app/api/chat/route.ts
// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const MODEL = "@cf/meta/llama-3.2-3b-instruct";

function extractSseEvents(buffer: string): { events: string[]; rest: string } {
  const events: string[] = [];
  let idx = buffer.indexOf("\n\n");
  while (idx !== -1) {
    events.push(buffer.slice(0, idx));
    buffer = buffer.slice(idx + 2);
    idx = buffer.indexOf("\n\n");
  }
  return { events, rest: buffer };
}

function getDataFromSseEvent(eventBlock: string): string | null {
  const lines = eventBlock.split("\n");
  const dataLines = lines
    .filter((l) => l.startsWith("data:"))
    .map((l) => l.slice(5).trim());
  if (dataLines.length === 0) return null;
  return dataLines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return NextResponse.json(
        { error: "Missing CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const cfMessages = messages.map((msg: any) => ({
      role: msg.role === "bot" ? "assistant" : msg.role, // keep system/user/assistant
      content: msg.content,
    }));

    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`;

    const cfRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: cfMessages,
        max_tokens: 1000,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!cfRes.ok) {
      const errText = await cfRes.text();
      return NextResponse.json({ error: "Workers AI error", details: errText }, { status: 500 });
    }

    if (!cfRes.body) {
      return NextResponse.json({ error: "Missing Workers AI response body" }, { status: 500 });
    }

    // Convert Cloudflare SSE -> plain text stream for your React client
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const reader = cfRes.body!.getReader();
        let sseBuffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            sseBuffer += decoder.decode(value, { stream: true });

            const { events, rest } = extractSseEvents(sseBuffer);
            sseBuffer = rest;

            for (const ev of events) {
              const data = getDataFromSseEvent(ev);
              if (!data) continue;

              if (data === "[DONE]") {
                controller.close();
                return;
              }

              // Expected: data: {"response":"..."}
              try {
                const parsed = JSON.parse(data);
                const token = typeof parsed?.response === "string" ? parsed.response : "";
                if (token) controller.enqueue(encoder.encode(token));
              } catch {
                // ignore non-JSON events
              }
            }
          }

          controller.close();
        } catch (e) {
          controller.error(e);
        } finally {
          try {
            reader.releaseLock();
          } catch {}
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "AI service temporarily unavailable. Please try again." },
      { status: 500 }
    );
  }
}
