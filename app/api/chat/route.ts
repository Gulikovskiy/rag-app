import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

import { retrieveChunks } from "@/lib/retrieve";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const question =
    typeof body === "object" &&
    body !== null &&
    "question" in body &&
    typeof body.question === "string"
      ? body.question.trim()
      : "";

  if (!question) {
    return Response.json({ error: "question is required" }, { status: 400 });
  }

  const relevantChunks = await retrieveChunks(question);
  const result = streamText({
  model: openai("gpt-4o-mini"),
  instructions: `Answer based only on the provided context. If the answer isn't in the context, say so.

Context:
${relevantChunks.map((chunk) => chunk.content).join("\n\n")}`,
  messages: [{ role: "user", content: question }],
});

  return result.toTextStreamResponse();
  // toDataStreamResponse
}
