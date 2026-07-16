"use client";

import type { FormEvent } from "react";

function UploadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v12" />
      <path d="m7 8 5-5 5 5" />
      <path d="M5 15v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3" />
    </svg>
  );
}

export default function Home() {
  function handleFileChange() {
    // TODO: Store the selected document and prepare it for ingestion.
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Send the document and question to the chat/retrieval flow.
  }

  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center bg-background px-6 py-16 font-sans text-foreground sm:px-8 lg:px-12">
      <section className="flex w-full max-w-4xl flex-col items-center gap-10">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Ask your document
          </h1>
          <p className="text-lg font-medium text-muted sm:text-xl">
            Upload a text file or PDF, then ask a question about it.
          </p>
        </header>

        <form
          className="w-full rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-border sm:p-8 md:p-12"
          onSubmit={handleSubmit}
        >
          <div className="space-y-8">
            <label className="group flex min-h-72 cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed border-border-strong bg-surface-muted px-6 py-12 text-center transition-colors hover:border-accent-foreground focus-within:border-accent-foreground focus-within:ring-4 focus-within:ring-accent">
              <input
                accept=".txt,.pdf,text/plain,application/pdf"
                className="sr-only"
                onChange={handleFileChange}
                type="file"
              />
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                <UploadIcon />
              </span>
              <span className="space-y-2">
                <span className="block text-2xl font-semibold text-foreground">
                  Drop your file here, or click to browse
                </span>
                <span className="block text-lg font-medium text-muted">
                  Accepts .txt or .pdf, up to 10MB
                </span>
              </span>
            </label>

            <div className="space-y-4">
              <label
                className="block text-lg font-semibold text-foreground"
                htmlFor="question"
              >
                Your question
              </label>
              <textarea
                className="min-h-36 w-full resize-y rounded-2xl border border-border-strong bg-surface-muted px-6 py-5 text-xl font-medium text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent-foreground focus:ring-4 focus:ring-accent"
                id="question"
                name="question"
                placeholder="e.g. What was the total revenue mentioned in this document?"
              />
            </div>

            <button
              className="flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-8 text-xl font-bold text-primary-foreground transition-colors hover:bg-foreground focus:outline-none focus:ring-4 focus:ring-accent"
              type="submit"
            >
              Ask
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
