"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";

function MessageText({
  parts,
}: {
  parts: ReturnType<typeof useChat>["messages"][number]["parts"];
}) {
  return parts.map((part, index) =>
    part.type === "text" ? <span key={index}>{part.text}</span> : null,
  );
}

export default function ChatPage() {
  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [input, setInput] = useState("");
  const [sources, setSources] = useState<Array<{ id: number; content: string; similarity: number }>>([]);
  console.log('sources: ',sources)

  const isLoading = status === "submitted" || status === "streaming";

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const question = input.trim();

  //   if (!question || isLoading) {
  //     return;
  //   }

  //   setInput("");
  //   await sendMessage({ text: question });
  // }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const question = input.trim();
  if (!question || isLoading) return;

  setInput("");
  setSources([]); // clear previous sources

  // Fetch sources in parallel with the chat
  fetch("/api/sources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  })
    .then((r) => r.json())
    .then((data: { sources: typeof sources }) => setSources(data.sources))
    .catch(console.error);

  await sendMessage({ text: question });
}

  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center bg-background px-6 py-16 font-sans text-foreground sm:px-8 lg:px-12">
      <section className="flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Ask your document
          </h1>
          <p className="text-lg font-medium text-muted sm:text-xl">
            Ask a question and get an answer based on uploaded documents.
          </p>
        </header>

        <div className="w-full rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-border sm:p-8 md:p-12">
          <div className="flex min-h-96 flex-col gap-6">
            <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-border bg-surface-muted p-4 sm:p-6">
              {messages.length === 0 ? (
                <div className="flex min-h-64 items-center justify-center text-center text-lg font-medium text-muted">
                  Your conversation will appear here.
                </div>
              ) : (
                messages.map((message, index) => {
  const isLastAssistant =
    message.role === "assistant" &&
    index === messages.findLastIndex((m) => m.role === "assistant");

  return (
    <div key={message.id}>
      {/* existing message bubble */}
      <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
        <div className={`max-w-2xl rounded-2xl px-5 py-4 text-lg font-medium leading-relaxed ${
          message.role === "user"
            ? "bg-primary text-primary-foreground"
            : "border border-border bg-surface text-foreground"
        }`}>
          <MessageText parts={message.parts} />
        </div>
      </div>

      {/* sources — only after the last assistant message */}
      {isLastAssistant && sources.length > 0 && (
        <div className="mt-3 space-y-2 px-1">
          <p className="text-sm font-semibold text-muted">Sources used:</p>
          {sources.map((source) => (
            <div
              key={source.id}
              className="rounded-xl border border-border bg-surface px-4 py-3"
            >
              <p className="text-xs font-semibold text-muted">
                {(source.similarity * 100).toFixed(1)}% match
              </p>
              <p className="mt-1 line-clamp-3 text-sm text-foreground">
                {source.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
})
              )}
            </div>

            {error ? (
              <p className="rounded-2xl border border-error bg-error-muted px-6 py-4 text-lg font-semibold text-error">
                Something went wrong. Try again.
              </p>
            ) : null}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <label
                className="block text-lg font-semibold text-foreground"
                htmlFor="question"
              >
                Your question
              </label>
              <textarea
                className="min-h-32 w-full resize-y rounded-2xl border border-border-strong bg-surface-muted px-6 py-5 text-xl font-medium text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent-foreground focus:ring-4 focus:ring-accent"
                disabled={isLoading}
                id="question"
                name="question"
                onChange={(event) => setInput(event.target.value)}
                placeholder="e.g. What was the total revenue mentioned in this document?"
                value={input}
              />

              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <button
                  className="flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-8 text-xl font-bold text-primary-foreground transition-colors hover:bg-foreground focus:outline-none focus:ring-4 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={!input.trim() || isLoading}
                  type="submit"
                >
                  {isLoading ? "Thinking..." : "Ask"}
                </button>

                {isLoading ? (
                  <button
                    className="flex h-16 items-center justify-center rounded-2xl border border-border-strong bg-surface px-8 text-xl font-bold text-foreground transition-colors hover:bg-surface-muted focus:outline-none focus:ring-4 focus:ring-accent"
                    onClick={() => void stop()}
                    type="button"
                  >
                    Stop
                  </button>
                ) : (
                  <Link
                    className="flex h-16 items-center justify-center rounded-2xl border border-border-strong bg-surface px-8 text-xl font-bold text-foreground transition-colors hover:bg-surface-muted focus:outline-none focus:ring-4 focus:ring-accent"
                    href="/"
                  >
                    Upload
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
