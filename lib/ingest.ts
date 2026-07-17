import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import OpenAI from "openai";
import postgres from "postgres";

import { chunks, documents } from "@/db/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

const sql = postgres(databaseUrl);
const db = drizzle(sql);
const openai = new OpenAI();

function splitIntoChunks(content: string): string[] {
  const chunkSize = 500;
  const overlap = 100;
  const step = chunkSize - overlap;
  const result: string[] = [];

  for (let start = 0; start < content.length; start += step) {
    result.push(content.slice(start, start + chunkSize));
  }

  return result;
}

export async function ingestDocument(
  name: string,
  content: string,
): Promise<void> {
  const [document] = await db
    .insert(documents)
    .values({ name, content })
    .returning({ id: documents.id });

  if (!document) {
    throw new Error("Failed to insert document");
  }

  const documentChunks = splitIntoChunks(content).filter(
    (c) => c.trim().length > 0,
  );

  if (documentChunks.length === 0) {
    return;
  }

  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: documentChunks,
  });

  await db.insert(chunks).values(
    documentChunks.map((chunk, index) => ({
      documentId: document.id,
      content: chunk,
      embedding: embeddings.data[index].embedding,
      chunkIndex: index,
    })),
  );
}
