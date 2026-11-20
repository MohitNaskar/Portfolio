const API_URL = import.meta.env.VITE_CHATBOT_API_URL || "http://localhost:8000";
const TIMEOUT_MS = 30_000;

export async function sendMessage(message, sessionId) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, session_id: sessionId || undefined }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Request failed (${res.status})`);
    }

    return res.json(); // { response, session_id }
  } catch (e) {
    if (e.name === "AbortError") throw new Error("Request timed out. Please try again.");
    throw e;
  } finally {
    clearTimeout(timer);
  }
}

export async function* streamMessage(message, sessionId, signal) {
  const res = await fetch(`${API_URL}/chat/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, session_id: sessionId || undefined }),
    signal,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `Stream failed (${res.status})`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        try {
          yield JSON.parse(line.slice(6));
        } catch {
          // skip malformed SSE line
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}
