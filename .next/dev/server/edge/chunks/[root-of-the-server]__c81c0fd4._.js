(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__c81c0fd4._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Documents/Staffarc Projects/staffArcv0/staffarc/app/api/chat/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/esm/api/server.js [app-edge-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Staffarc Projects/staffArcv0/staffarc/node_modules/.pnpm/next@16.1.6_@opentelemetry+api@1.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/esm/server/web/exports/index.js [app-edge-route] (ecmascript)");
;
const runtime = "edge";
const MODEL = "@cf/meta/llama-3.2-3b-instruct";
function extractSseEvents(buffer) {
    const events = [];
    let idx = buffer.indexOf("\n\n");
    while(idx !== -1){
        events.push(buffer.slice(0, idx));
        buffer = buffer.slice(idx + 2);
        idx = buffer.indexOf("\n\n");
    }
    return {
        events,
        rest: buffer
    };
}
function getDataFromSseEvent(eventBlock) {
    const lines = eventBlock.split("\n");
    const dataLines = lines.filter((l)=>l.startsWith("data:")).map((l)=>l.slice(5).trim());
    if (dataLines.length === 0) return null;
    return dataLines.join("\n");
}
async function POST(req) {
    try {
        const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
        const apiToken = process.env.CLOUDFLARE_API_TOKEN;
        if (!accountId || !apiToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN"
            }, {
                status: 500
            });
        }
        const body = await req.json();
        const messages = body?.messages;
        if (!Array.isArray(messages)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid messages format"
            }, {
                status: 400
            });
        }
        const cfMessages = messages.map((msg)=>({
                role: msg.role === "bot" ? "assistant" : msg.role,
                content: msg.content
            }));
        const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`;
        const cfRes = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: cfMessages,
                max_tokens: 1000,
                temperature: 0.7,
                stream: true
            })
        });
        if (!cfRes.ok) {
            const errText = await cfRes.text();
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Workers AI error",
                details: errText
            }, {
                status: 500
            });
        }
        if (!cfRes.body) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing Workers AI response body"
            }, {
                status: 500
            });
        }
        // Convert Cloudflare SSE -> plain text stream for your React client
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        const stream = new ReadableStream({
            async start (controller) {
                const reader = cfRes.body.getReader();
                let sseBuffer = "";
                try {
                    while(true){
                        const { done, value } = await reader.read();
                        if (done) break;
                        sseBuffer += decoder.decode(value, {
                            stream: true
                        });
                        const { events, rest } = extractSseEvents(sseBuffer);
                        sseBuffer = rest;
                        for (const ev of events){
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
                            } catch  {
                            // ignore non-JSON events
                            }
                        }
                    }
                    controller.close();
                } catch (e) {
                    controller.error(e);
                } finally{
                    try {
                        reader.releaseLock();
                    } catch  {}
                }
            }
        });
        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-cache"
            }
        });
    } catch (error) {
        console.error("Chat API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Staffarc__Projects$2f$staffArcv0$2f$staffarc$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "AI service temporarily unavailable. Please try again."
        }, {
            status: 500
        });
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c81c0fd4._.js.map