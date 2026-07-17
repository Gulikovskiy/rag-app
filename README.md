# rag-app

A "chat with your documents" application built on Retrieval-Augmented Generation (RAG). Upload a text file, ask questions about it, and get streaming answers grounded in the document's actual content — with source citations showing exactly which passages were used.

Live demo: [rag-app-phi.vercel.app](https://rag-app-phi.vercel.app)

## What is RAG?

Large language models don't know about your specific documents. RAG solves this by retrieving relevant content at query time and providing it as context to the model — so answers are based on your data, not general training knowledge.

```
Upload flow:
Document → chunk text → embed each chunk → store vectors in Postgres

Query flow:
Question → embed → vector similarity search → retrieve top 5 chunks
→ build prompt with chunks as context → stream answer → show sources
```

## Tech stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **AI**: Vercel AI SDK v7 + OpenAI (`gpt-4o-mini` for chat, `text-embedding-3-small` for embeddings)
- **Database**: Neon (serverless Postgres) + pgvector for similarity search
- **ORM**: Drizzle ORM
- **Deployment**: Vercel

## Architecture

```
app/
├── page.tsx              # Upload UI
├── chat/page.tsx         # Chat UI
└── api/
    ├── ingest/route.ts   # Receives file, chunks + embeds, stores in DB
    ├── chat/route.ts     # Embeds question, retrieves chunks, streams answer
    └── sources/route.ts  # Returns top matching chunks for a question

lib/
├── ingest.ts             # Chunking + embedding pipeline
└── retrieve.ts           # pgvector similarity search

db/
└── schema.ts             # documents + chunks tables
```

## Features

- **Document upload** — `.txt` files up to 10MB, with file type and size validation
- **Chunking with overlap** — text split into 500-character chunks with 100-character overlap, so context is never lost at chunk boundaries
- **Batched embeddings** — all chunks embedded in a single OpenAI API call, not one per chunk
- **Semantic search** — questions matched to relevant chunks by meaning, not keyword
- **Streaming responses** — answers stream word by word via Vercel AI SDK
- **Source citations** — the top 5 retrieved chunks shown below each answer with similarity scores, so you can verify what the model used

## Key implementation details

**Chunking strategy**: splitting at fixed character boundaries with overlap ensures that sentences spanning a boundary appear in both adjacent chunks. Without overlap, a question about content at a boundary might retrieve an incomplete chunk.

**Same model for ingestion and retrieval**: `text-embedding-3-small` is used for both document chunks and query embeddings. Using different models would produce incomparable vectors and break similarity search.

**pgvector cosine distance**: chunks are ordered by `embedding <=> query_embedding` (cosine distance operator), which measures angular similarity between vectors — more robust than Euclidean distance for text embeddings.

**Source citations**: after retrieval, the top 5 chunks are returned alongside the streamed answer with their similarity scores. This lets users verify the model's answer against the source material — a real production concern for any RAG system.

## Getting started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) account (free tier)
- An OpenAI API key

### Local setup

```bash
git clone https://github.com/Gulikovskiy/rag-app
cd rag-app
npm install
```

Create a `.env.local` file:

```bash
DATABASE_URL=your-neon-pooled-connection-string
OPENAI_API_KEY=your-openai-api-key
```

Run migrations:

```bash
npm run db:migrate
```

Start the dev server:

```bash
npm run dev
```

The app is available at `http://localhost:3000`.

### Database setup

Neon has pgvector pre-installed. The migration enables the extension and creates the schema automatically:

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id serial PRIMARY KEY,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamp DEFAULT now() NOT NULL
);

CREATE TABLE chunks (
  id serial PRIMARY KEY,
  document_id integer NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  content text NOT NULL,
  embedding vector(1536) NOT NULL,
  chunk_index integer NOT NULL
);
```

### Testing ingestion via script

```bash
npx tsx scripts/ingest-test.ts
```

Then verify in Neon's SQL editor:

```sql
SELECT d.name, COUNT(c.id) as chunk_count
FROM documents d
JOIN chunks c ON c.document_id = d.id
GROUP BY d.name;
```

## API reference

### POST /api/ingest

Accepts `multipart/form-data` with a `file` field (`.txt`, max 10MB). Chunks the document, generates embeddings, and stores everything in Postgres.

```bash
curl -X POST http://localhost:3000/api/ingest \
  -F "file=@document.txt"
```

### POST /api/chat

Accepts `{ messages }` in the AI SDK message format. Embeds the latest user message, retrieves relevant chunks, and streams a grounded response.

### POST /api/sources

Accepts `{ question: string }`. Returns the top 5 most semantically similar chunks with similarity scores.

```json
{
  "sources": [
    {
      "id": 42,
      "content": "...",
      "similarity": 0.847
    }
  ]
}
```

## Deployment

Deployed to Vercel with environment variables set via the Vercel dashboard.

Uses Neon's **pooled** connection string in production — Neon provides both a direct and a pooled endpoint; the pooled one handles the ephemeral connections that come with serverless function execution.

## Environment variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon pooled PostgreSQL connection string |
| `OPENAI_API_KEY` | OpenAI API key |