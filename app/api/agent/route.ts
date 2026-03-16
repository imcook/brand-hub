import Anthropic from "@anthropic-ai/sdk";
import { brand } from "@/content/brand.config";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are the Vouch Brand Agent — an expert on the Vouch brand, trained on the complete Vouch brand guidelines.

About Vouch:
${JSON.stringify(brand, null, 2)}

Your role is to:
1. Answer questions about the Vouch brand — colours, typography, logo usage, voice, values
2. Review copy or content for brand alignment — flag anything off-brand and suggest corrections
3. Help users write on-brand content — emails, social posts, website copy, presentations
4. Help users find the right asset or guideline
5. Act as a brand quiz host if asked

Tone: You are helpful, clear, and on-brand yourself. You speak with the same voice Vouch uses — confident, warm, clear, purposeful. Keep responses concise unless detail is asked for.

Always ground your answers in the brand guidelines above. If something isn't defined yet (many sections are still in draft), say so honestly and offer your best guidance based on what is defined.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
