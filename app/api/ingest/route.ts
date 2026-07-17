import { ingestDocument } from "@/lib/ingest";

export const runtime = "nodejs";

const maxFileSize = 10 * 1024 * 1024;

function isSupportedTextFile(file: File): boolean {
  return file.name.toLowerCase().endsWith(".txt") || file.type === "text/plain";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json({ error: "file is required" }, { status: 400 });
    }

    if (file.size > maxFileSize) {
      return Response.json(
        { error: "File must be 10MB or smaller." },
        { status: 413 },
      );
    }

    if (!isSupportedTextFile(file)) {
      return Response.json(
        { error: "Only .txt files are supported right now." },
        { status: 415 },
      );
    }

    const content = (await file.text()).trim();

    if (!content) {
      return Response.json(
        { error: "File does not contain any text." },
        { status: 400 },
      );
    }

    await ingestDocument(file.name, content);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to ingest document", error);
    return Response.json(
      { error: "Failed to ingest document." },
      { status: 500 },
    );
  }
}
