// // app/api/chat/route.ts
// import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

// const MODEL = "@cf/meta/llama-3.2-3b-instruct";

// function extractSseEvents(buffer: string): { events: string[]; rest: string } {
//   const events: string[] = [];
//   let idx = buffer.indexOf("\n\n");
//   while (idx !== -1) {
//     events.push(buffer.slice(0, idx));
//     buffer = buffer.slice(idx + 2);
//     idx = buffer.indexOf("\n\n");
//   }
//   return { events, rest: buffer };
// }

// function getDataFromSseEvent(eventBlock: string): string | null {
//   const lines = eventBlock.split("\n");
//   const dataLines = lines
//     .filter((l) => l.startsWith("data:"))
//     .map((l) => l.slice(5).trim());
//   if (dataLines.length === 0) return null;
//   return dataLines.join("\n");
// }

// export async function POST(req: NextRequest) {
//   try {
//     const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
//     const apiToken = process.env.CLOUDFLARE_API_TOKEN;

//     if (!accountId || !apiToken) {
//       return NextResponse.json(
//         { error: "Missing CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN" },
//         { status: 500 }
//       );
//     }

//     const body = await req.json();
//     const messages = body?.messages;

//     if (!Array.isArray(messages)) {
//       return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
//     }

//     const cfMessages = messages.map((msg: any) => ({
//       role: msg.role === "bot" ? "assistant" : msg.role, // keep system/user/assistant
//       content: msg.content,
//     }));

//     const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`;

//     const cfRes = await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         messages: cfMessages,
//         max_tokens: 1000,
//         temperature: 0.7,
//         stream: true,
//       }),
//     });

//     if (!cfRes.ok) {
//       const errText = await cfRes.text();
//       return NextResponse.json({ error: "Workers AI error", details: errText }, { status: 500 });
//     }

//     if (!cfRes.body) {
//       return NextResponse.json({ error: "Missing Workers AI response body" }, { status: 500 });
//     }

//     // Convert Cloudflare SSE -> plain text stream for your React client
//     const encoder = new TextEncoder();
//     const decoder = new TextDecoder();

//     const stream = new ReadableStream<Uint8Array>({
//       async start(controller) {
//         const reader = cfRes.body!.getReader();
//         let sseBuffer = "";

//         try {
//           while (true) {
//             const { done, value } = await reader.read();
//             if (done) break;

//             sseBuffer += decoder.decode(value, { stream: true });

//             const { events, rest } = extractSseEvents(sseBuffer);
//             sseBuffer = rest;

//             for (const ev of events) {
//               const data = getDataFromSseEvent(ev);
//               if (!data) continue;

//               if (data === "[DONE]") {
//                 controller.close();
//                 return;
//               }

//               // Expected: data: {"response":"..."}
//               try {
//                 const parsed = JSON.parse(data);
//                 const token = typeof parsed?.response === "string" ? parsed.response : "";
//                 if (token) controller.enqueue(encoder.encode(token));
//               } catch {
//                 // ignore non-JSON events
//               }
//             }
//           }

//           controller.close();
//         } catch (e) {
//           controller.error(e);
//         } finally {
//           try {
//             reader.releaseLock();
//           } catch {}
//         }
//       },
//     });

//     return new Response(stream, {
//       headers: {
//         "Content-Type": "text/plain; charset=utf-8",
//         "Cache-Control": "no-cache",
//       },
//     });
//   } catch (error) {
//     console.error("Chat API Error:", error);
//     return NextResponse.json(
//       { error: "AI service temporarily unavailable. Please try again." },
//       { status: 500 }
//     );
//   }
// }
// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const MODEL = "@cf/meta/llama-3.2-3b-instruct";
const ALLOWED_ORIGIN = "https://staffarc.in"; // Set your production domain

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
    // SECURITY: Validate Origin and Referer headers
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");

    // In local development, origin might be localhost or missing. 
    // In production, enforce the ALLOWED_ORIGIN strictly.
    const isDevelopment = process.env.NODE_ENV === "development";
    //const isDevelopment = false;
    if (!isDevelopment) {
      if (origin !== ALLOWED_ORIGIN || !(referer && referer.startsWith(ALLOWED_ORIGIN))) {
        console.warn(`Blocked unauthorized request from Origin: ${origin} | Referer: ${referer}`);
        return new NextResponse(
          JSON.stringify({ error: "Forbidden. Invalid origin." }),
          { status: 403, headers: { "Content-Type": "application/json" } }
        );
      }
    }

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

    // SECURITY: Limit input size to prevent abuse
    const totalInputLength = messages.reduce((acc, msg) => acc + (msg.content?.length || 0), 0);
    if (totalInputLength > 4000) {
      return NextResponse.json({ error: "Payload too large. Max 4000 characters." }, { status: 413 });
    }

    const cfMessages = messages.map((msg: any) => ({
      role: msg.role === "bot" ? "assistant" : msg.role,
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
        // SECURITY: Explicitly disallow cross-origin requests at the browser level
        "Access-Control-Allow-Origin": isDevelopment ? "*" : ALLOWED_ORIGIN,
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