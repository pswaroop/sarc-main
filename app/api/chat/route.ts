import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

// Use Edge runtime for faster, serverless streaming
export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    // Check if API key exists
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('Missing GOOGLE_GENERATIVE_AI_API_KEY');
      return NextResponse.json(
        { error: 'AI Configuration Error. Please contact support.' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    // Validate incoming messages
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Stream the response using Gemini
    const result = await streamText({
      model: google('gemini-2.5-flash'), // Google's fast, efficient model
      maxOutputTokens: 1000,             // ✅ FIX: Use maxOutputTokens instead of maxTokens
      temperature: 0.7,
      // Map messages to ensure the correct role formatting
      messages: messages.map((msg: any) => ({
        role: msg.role === 'bot' ? 'assistant' : msg.role,
        content: msg.content,
      })),
    });

    // Return the streaming text response to the client
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Return a generic error so the frontend fallback logic triggers
    return NextResponse.json(
      { error: 'AI service temporarily unavailable. Please try again.' },
      { status: 500 }
    );
  }
}
