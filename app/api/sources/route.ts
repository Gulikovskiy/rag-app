import { retrieveChunks } from "@/lib/retrieve";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const question =
    typeof body === "object" &&
    body !== null &&
    "question" in body &&
    typeof body.question === "string"
      ? body.question
      : "";

  if (!question) {
    return Response.json({ error: "question is required" }, { status: 400 });
  }

  const chunks = await retrieveChunks(question);
  return Response.json({
    sources: chunks.map((c) => ({
      id: c.id,
      content: c.content,
      similarity: c.similarity,
    })),
  });
}
