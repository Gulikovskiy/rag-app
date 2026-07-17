import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type ModelMessage,
  type UIMessage,
} from "ai";

import { retrieveChunks } from "@/lib/retrieve";

export const runtime = "nodejs";

function isMessageArray(value: unknown): value is Array<UIMessage | LegacyMessage> {
  return Array.isArray(value);
}

type LegacyMessage = {
  role?: unknown;
  content?: unknown;
};

function getMessageRole(message: UIMessage | LegacyMessage): unknown {
  return message.role;
}

function getMessageText(message: UIMessage | LegacyMessage): string {
  if ("content" in message && typeof message.content === "string") {
    return message.content.trim();
  }

  if (!("parts" in message) || !Array.isArray(message.parts)) {
    return "";
  }

  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const messages =
    typeof body === "object" &&
    body !== null &&
    "messages" in body &&
    isMessageArray(body.messages)
      ? body.messages
      : [];
  const lastUserMessage = messages.findLast(
    (message) => getMessageRole(message) === "user",
  );
  const question = lastUserMessage ? getMessageText(lastUserMessage) : "";

  if (!question) {
    return Response.json({ error: "question is required" }, { status: 400 });
  }

  const relevantChunks = await retrieveChunks(question);
  const modelMessages: ModelMessage[] = messages.every((message) => "parts" in message)
    ? await convertToModelMessages(messages)
    : [{ role: "user", content: question }];
  const result = streamText({
    model: openai("gpt-4o-mini"),
    instructions: `Answer based only on the provided context. If the answer isn't in the context, say so.

Context:
${relevantChunks.map((chunk) => chunk.content).join("\n\n")}`,
    messages: modelMessages,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      originalMessages: messages.filter(
        (message): message is UIMessage => "parts" in message,
      ),
    }),
  });
}
