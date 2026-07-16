import "dotenv/config";

import { sql as drizzleSql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import OpenAI from "openai";
import postgres from "postgres";

import { chunks } from "@/db/schema";

export type RetrievedChunk = {
  id: number;
  content: string;
  documentId: number;
  similarity: number;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

const client = postgres(databaseUrl);
const db = drizzle(client);
const openai = new OpenAI();

export async function retrieveChunks(
  question: string,
): Promise<RetrievedChunk[]> {
  const embeddingResult = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  const queryEmbedding = embeddingResult.data[0]?.embedding;

  if (!queryEmbedding) {
    throw new Error("Failed to embed question");
  }

  const embeddingSql = drizzleSql.raw(`'[${queryEmbedding.join(",")}]'`);
  const distanceSql = drizzleSql`${chunks.embedding} <=> ${embeddingSql}`;

  return db
    .select({
      id: chunks.id,
      content: chunks.content,
      documentId: chunks.documentId,
      similarity: drizzleSql<number>`1 - (${distanceSql})`,
    })
    .from(chunks)
    .orderBy(distanceSql)
    .limit(5);
}
