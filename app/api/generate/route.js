import { auth } from "@clerk/nextjs/server";
import { generateGeminiContentStream } from "@/lib/gemini";
import {
  buildCareerPrompt,
  buildSseErrorResponse,
  preparePromptForGeneration,
} from "@/lib/prompt-guard";
import {
  buildRateLimitResponse,
  enforceRateLimit,
  getRateLimitIdentifier,
} from "@/lib/rate-limit";

export async function POST(request) {
  const { userId } = await auth();
  const endpoint = "/api/generate";
  const subject = getRateLimitIdentifier(request, userId);
  const rateLimit = enforceRateLimit({
    endpoint,
    subject,
    limitPerMinute: userId ? 20 : 5,
    burstCapacity: userId ? 10 : 5,
  });

  if (!rateLimit.allowed) {
    return buildRateLimitResponse({
      message: "Too Many Requests",
      retryAfterSeconds: rateLimit.retryAfterSeconds,
      sse: true,
    });
  }

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let prompt;

  try {
    const body = await request.json();
    prompt = body.prompt;
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return buildSseErrorResponse("Prompt is required", 400);
  }

  const promptCheck = preparePromptForGeneration(prompt);

  if (!promptCheck.allowed) {
    return buildSseErrorResponse(promptCheck.message, promptCheck.status);
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const restrictedPrompt = buildCareerPrompt(promptCheck.prompt);

        const result = await generateGeminiContentStream(restrictedPrompt);

        for await (const chunk of result.stream) {
          const text = chunk.text();

          if (text) {
            const sseMessage = `data: ${JSON.stringify({ text })}\n\n`;
            controller.enqueue(encoder.encode(sseMessage));
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (error) {
        console.error("Gemini streaming error:", error?.message || error);

        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              error: error?.message || "Unknown error",
            })}\n\n`
          )
        );

        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Connection: "keep-alive",
    },
  });
}