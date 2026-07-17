"use client";

import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

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
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0] ?? null);
    setStatus("idle");
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setStatus("error");
      setMessage("Choose a .txt document first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setStatus("uploading");
    setMessage("");

    try {
      const response = await fetch("/api/ingest", {
        method: "POST",
        body: formData,
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const error =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Failed to ingest document.";

        throw new Error(error);
      }

      setStatus("success");
      setMessage("Document ingested. You can ask questions about it now.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Failed to ingest document.",
      );
    }
  }

  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center bg-background px-6 py-16 font-sans text-foreground sm:px-8 lg:px-12">
      <section className="flex w-full max-w-4xl flex-col items-center gap-10">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Ask your document
          </h1>
          <p className="text-lg font-medium text-muted sm:text-xl">
            Upload a text file, then ask questions about it.
          </p>
        </header>

        <form
          className="w-full rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-border sm:p-8 md:p-12"
          onSubmit={handleSubmit}
        >
          <div className="space-y-8">
            <label className="group flex min-h-72 cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed border-border-strong bg-surface-muted px-6 py-12 text-center transition-colors hover:border-accent-foreground focus-within:border-accent-foreground focus-within:ring-4 focus-within:ring-accent">
              <input
                accept=".txt,text/plain"
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
                  {file ? file.name : "Accepts .txt files up to 10MB"}
                </span>
              </span>
            </label>

            {message ? (
              <p
                className={`rounded-2xl border px-6 py-4 text-lg font-semibold ${
                  status === "success"
                    ? "border-success bg-success-muted text-success"
                    : "border-error bg-error-muted text-error"
                }`}
              >
                {message}
              </p>
            ) : null}

            <button
              className="flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-8 text-xl font-bold text-primary-foreground transition-colors hover:bg-foreground focus:outline-none focus:ring-4 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "uploading"}
              type="submit"
            >
              {status === "uploading" ? "Uploading..." : "Upload"}
            </button>

            {status === "success" ? (
              <Link
                className="flex h-16 w-full items-center justify-center rounded-2xl border border-border-strong bg-surface px-8 text-xl font-bold text-foreground transition-colors hover:bg-surface-muted focus:outline-none focus:ring-4 focus:ring-accent"
                href="/chat"
              >
                Go to chat
              </Link>
            ) : null}
          </div>
        </form>
      </section>
    </main>
  );
}
