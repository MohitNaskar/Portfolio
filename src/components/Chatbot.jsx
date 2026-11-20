import { useState, useRef, useEffect, useCallback, useId } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { streamMessage, warmUp } from "../services/chatbotApi";

// ─── constants ──────────────────────────────────────────────────────────────

const SUGGESTED_PROMPTS = [
  "Tell me about Mohit's projects",
  "What has he worked on at SAP Labs?",
  "How does he approach building LLMs?",
  "What technologies does he use?",
  "Tell me about his engineering experiments",
];

const WELCOME_MSG =
  "Curious about what Mohit builds or how he approaches AI engineering? Ask away. I can walk you through his projects, technologies, experience and experiments.";

// ─── helpers ────────────────────────────────────────────────────────────────

let _msgId = 0;
const nextId = () => `m${++_msgId}`;

const fmtTime = (d) =>
  d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

// ─── Markdown renderer ──────────────────────────────────────────────────────

const mdComponents = {
  // Open all links in a new tab; external rel for safety
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#5A8A6A", textDecoration: "underline" }}
    >
      {children}
    </a>
  ),
  // Code blocks — dark background, horizontal scroll
  code: ({ inline, className, children }) => {
    if (inline) {
      return (
        <code
          style={{
            fontFamily: "monospace",
            fontSize: "0.8125rem",
            background: "#1E1E1E",
            border: "1px solid #2A2A2A",
            padding: "1px 5px",
            borderRadius: "2px",
          }}
        >
          {children}
        </code>
      );
    }
    return (
      <pre
        style={{
          background: "#1A1A1A",
          border: "1px solid #2A2A2A",
          padding: "12px 14px",
          overflowX: "auto",
          margin: "8px 0",
        }}
      >
        <code
          style={{ fontFamily: "monospace", fontSize: "0.8125rem", color: "#BCBCBC" }}
        >
          {children}
        </code>
      </pre>
    );
  },
  // Tighten default prose spacing
  p: ({ children }) => (
    <p style={{ margin: "4px 0", lineHeight: 1.6 }}>{children}</p>
  ),
  ul: ({ children }) => (
    <ul style={{ margin: "6px 0", paddingLeft: "18px" }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ margin: "6px 0", paddingLeft: "18px" }}>{children}</ol>
  ),
  li: ({ children }) => <li style={{ marginBottom: "2px" }}>{children}</li>,
};

// ─── Message bubble ──────────────────────────────────────────────────────────

function Message({ msg, onCopy }) {
  const isUser = msg.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isUser ? "flex-end" : "flex-start",
        gap: "4px",
        marginBottom: "16px",
      }}
    >
      {/* Role label */}
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "0.625rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#666",
        }}
      >
        {isUser ? "You" : "Ask Mohit"}
      </span>

      {/* Bubble */}
      <div
        style={{
          maxWidth: "88%",
          background: isUser ? "#1E1E1E" : "transparent",
          border: isUser ? "1px solid #2A2A2A" : "none",
          padding: isUser ? "8px 12px" : "0",
          fontSize: "0.875rem",
          color: "#E5E5E5",
          lineHeight: 1.6,
          wordBreak: "break-word",
          position: "relative",
        }}
      >
        {isUser ? (
          <span>{msg.content}</span>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {msg.content}
          </ReactMarkdown>
        )}

        {/* Streaming cursor */}
        {msg.streaming && (
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "14px",
              background: "#5A8A6A",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              animation: "blink 1s step-end infinite",
            }}
          />
        )}
      </div>

      {/* Timestamp + copy (assistant only) */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{ fontFamily: "monospace", fontSize: "0.625rem", color: "#555" }}
        >
          {fmtTime(msg.timestamp)}
        </span>
        {!isUser && !msg.streaming && msg.content && (
          <button
            onClick={handleCopy}
            aria-label="Copy response"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.08em",
              color: copied ? "#5A8A6A" : "#555",
              padding: 0,
              transition: "color 0.1s",
            }}
          >
            {copied ? "copied" : "copy"}
          </button>
        )}
      </div>

      {/* Error retry */}
      {msg.error && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "0.6875rem",
            color: "#AA6060",
          }}
        >
          {msg.content}
        </span>
      )}
    </div>
  );
}

// ─── Welcome screen ──────────────────────────────────────────────────────────

function WelcomeScreen({ onPrompt }) {
  return (
    <div style={{ padding: "24px 20px 8px" }}>
      <p
        style={{
          fontSize: "0.9375rem",
          color: "#BCBCBC",
          lineHeight: 1.6,
          marginBottom: "24px",
        }}
      >
        {WELCOME_MSG}
      </p>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "0.6875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: "10px",
        }}
      >
        Suggested
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {SUGGESTED_PROMPTS.map((p) => (
          <button
            key={p}
            onClick={() => onPrompt(p)}
            style={{
              background: "none",
              border: "1px solid #2A2A2A",
              color: "#999",
              textAlign: "left",
              padding: "8px 12px",
              fontSize: "0.8125rem",
              cursor: "pointer",
              transition: "border-color 0.15s, color 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#5A8A6A";
              e.currentTarget.style.color = "#5A8A6A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2A2A2A";
              e.currentTarget.style.color = "#999";
            }}
          >
            {p}
          </button>
        ))}
      </div>

      <p
        style={{
          fontFamily: "monospace",
          fontSize: "0.625rem",
          color: "#444",
          marginTop: "20px",
        }}
      >
        AI-generated responses based on portfolio information.
      </p>
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "0.625rem",
          color: "#777",
          marginTop: "6px",
          lineHeight: 1.5,
          fontWeight: 600,
        }}
      >
        ⚠ Runs on free-tier infrastructure — first response may be slow. Please be patient, it works.
      </p>
    </div>
  );
}

// ─── Chat input ───────────────────────────────────────────────────────────────

function ChatInput({ onSend, disabled, inputRef }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div
      style={{
        borderTop: "1px solid #2A2A2A",
        padding: "12px 14px",
        display: "flex",
        gap: "8px",
        alignItems: "flex-end",
        background: "#111111",
      }}
    >
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask something…"
        maxLength={2000}
        rows={1}
        aria-label="Message"
        style={{
          flex: 1,
          background: "#1A1A1A",
          border: "1px solid #2A2A2A",
          color: "#E5E5E5",
          fontSize: "0.875rem",
          padding: "8px 10px",
          resize: "none",
          outline: "none",
          fontFamily: "inherit",
          lineHeight: 1.5,
          minHeight: "36px",
          maxHeight: "120px",
          overflowY: "auto",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#5A8A6A")}
        onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
      />
      <button
        onClick={submit}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        style={{
          background: "none",
          border: "1px solid #2A2A2A",
          color: disabled || !value.trim() ? "#444" : "#BCBCBC",
          fontFamily: "monospace",
          fontSize: "0.6875rem",
          letterSpacing: "0.08em",
          padding: "8px 12px",
          cursor: disabled || !value.trim() ? "not-allowed" : "pointer",
          transition: "border-color 0.15s, color 0.15s",
          whiteSpace: "nowrap",
          alignSelf: "stretch",
        }}
        onMouseEnter={(e) => {
          if (!e.currentTarget.disabled) {
            e.currentTarget.style.borderColor = "#5A8A6A";
            e.currentTarget.style.color = "#5A8A6A";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#2A2A2A";
          e.currentTarget.style.color =
            e.currentTarget.disabled ? "#444" : "#BCBCBC";
        }}
      >
        Send
      </button>
    </div>
  );
}

// ─── Chat window ──────────────────────────────────────────────────────────────

function ChatWindow({ onClose, launcherRef }) {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const windowRef = useRef(null);
  const abortRef = useRef(null);
  const titleId = useId();

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Focus trap + Escape to close
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    const focusable = () =>
      [...el.querySelectorAll('button, textarea, [tabindex="0"]')].filter(
        (n) => !n.disabled && n.offsetParent !== null
      );

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        launcherRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const els = focusable();
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    el.addEventListener("keydown", handleKeyDown);
    return () => el.removeEventListener("keydown", handleKeyDown);
  }, [onClose, launcherRef]);

  // Cancel in-flight request on unmount
  useEffect(() => () => abortRef.current?.abort(), []);

  const sendMsg = useCallback(
    async (text) => {
      if (busy) return;

      const userMsg = {
        id: nextId(),
        role: "user",
        content: text,
        timestamp: new Date(),
      };
      const assistantMsg = {
        id: nextId(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
        streaming: true,
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setBusy(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        for await (const event of streamMessage(text, sessionId, controller.signal)) {
          if (event.type === "chunk") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? { ...m, content: m.content + event.content }
                  : m
              )
            );
          } else if (event.type === "done") {
            if (event.session_id) setSessionId(event.session_id);
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id ? { ...m, streaming: false } : m
              )
            );
          } else if (event.type === "error") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMsg.id
                  ? {
                      ...m,
                      content: event.message || "Something went wrong. Please try again.",
                      streaming: false,
                      error: true,
                    }
                  : m
              )
            );
          }
        }
      } catch (e) {
        if (e.name === "AbortError") return;
        const errText =
          e.message?.includes("Failed to fetch") || e.message?.includes("NetworkError")
            ? "Unable to connect to the assistant. Please check your connection."
            : (e.message ?? "Something went wrong. Please try again.");
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: errText, streaming: false, error: true }
              : m
          )
        );
      } finally {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id ? { ...m, streaming: false } : m
          )
        );
        setBusy(false);
      }
    },
    [busy, sessionId]
  );

  const handleReset = () => {
    if (messages.length === 0) return;
    if (!confirmReset) {
      setConfirmReset(true);
      setTimeout(() => setConfirmReset(false), 3000);
      return;
    }
    abortRef.current?.abort();
    setMessages([]);
    setSessionId(null);
    setBusy(false);
    setConfirmReset(false);
    inputRef.current?.focus();
  };

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      style={{
        position: "fixed",
        // Desktop: floating panel above launcher
        bottom: "80px",
        right: "16px",
        width: "clamp(320px, 92vw, 400px)",
        maxHeight: "calc(100dvh - 100px)",
        display: "flex",
        flexDirection: "column",
        background: "#141414",
        border: "1px solid #2A2A2A",
        zIndex: 9999,
        // On mobile go full-height bottom sheet
        ...(window.innerWidth < 640 && {
          bottom: 0,
          right: 0,
          left: 0,
          width: "100%",
          maxHeight: "85dvh",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          borderTop: "1px solid #2A2A2A",
        }),
        animation: "chatSlideIn 0.18s ease",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 14px",
          borderBottom: "1px solid #2A2A2A",
          flexShrink: 0,
        }}
      >
        <div>
          <p
            id={titleId}
            style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#F0F0F0", margin: 0 }}
          >
            Ask Mohit
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.625rem",
              color: "#555",
              letterSpacing: "0.08em",
              margin: 0,
            }}
          >
            AI-powered portfolio assistant
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Reset */}
          <button
            onClick={handleReset}
            disabled={messages.length === 0}
            aria-label="Reset conversation"
            title={confirmReset ? "Click again to confirm reset" : "Reset conversation"}
            style={{
              background: "none",
              border: "none",
              cursor: messages.length === 0 ? "not-allowed" : "pointer",
              fontFamily: "monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.08em",
              color: confirmReset ? "#AA6060" : messages.length === 0 ? "#333" : "#555",
              padding: "4px 6px",
              transition: "color 0.15s",
            }}
          >
            {confirmReset ? "confirm?" : "↺ reset"}
          </button>

          {/* Close */}
          <button
            onClick={() => {
              onClose();
              launcherRef.current?.focus();
            }}
            aria-label="Close chatbot"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#555",
              fontSize: "1rem",
              lineHeight: 1,
              padding: "4px 6px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F0F0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            ✕
          </button>
        </div>
      </div>

      {/* ── Messages ── */}
      <div
        role="log"
        aria-label="Conversation"
        aria-live="polite"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: messages.length === 0 ? "0" : "16px 14px 4px",
          scrollbarWidth: "thin",
          scrollbarColor: "#2A2A2A transparent",
        }}
      >
        {messages.length === 0 ? (
          <WelcomeScreen onPrompt={sendMsg} />
        ) : (
          <>
            {messages.map((msg) => (
              <Message key={msg.id} msg={msg} />
            ))}
            {/* Loading dots when streaming hasn't produced text yet */}
            {busy &&
              messages[messages.length - 1]?.role === "assistant" &&
              !messages[messages.length - 1]?.content && (
                <div
                  aria-label="Loading"
                  style={{
                    display: "flex",
                    gap: "4px",
                    paddingLeft: "4px",
                    marginBottom: "16px",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#555",
                        animation: `dot-pulse 1.2s ${i * 0.2}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                </div>
              )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* ── Input ── */}
      <ChatInput onSend={sendMsg} disabled={busy} inputRef={inputRef} />
    </div>
  );
}

// ─── Launcher button ──────────────────────────────────────────────────────────

function Launcher({ onClick, isOpen, launcherRef }) {
  return (
    <button
      ref={launcherRef}
      onClick={onClick}
      aria-label={isOpen ? "Close Ask Mohit chatbot" : "Open Ask Mohit chatbot"}
      aria-expanded={isOpen}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "16px",
        background: "#1A1A1A",
        border: "1px solid #2A2A2A",
        color: "#BCBCBC",
        fontFamily: "monospace",
        fontSize: "0.6875rem",
        letterSpacing: "0.12em",
        padding: "10px 16px",
        cursor: "pointer",
        zIndex: 9998,
        transition: "border-color 0.15s, color 0.15s",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#5A8A6A";
        e.currentTarget.style.color = "#5A8A6A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2A2A2A";
        e.currentTarget.style.color = "#BCBCBC";
      }}
    >
      <span style={{ fontSize: "0.75rem", lineHeight: 1 }}>◆</span>
      {isOpen ? "CLOSE" : "ASK MOHIT"}
    </button>
  );
}

// ─── Global styles (injected once) ───────────────────────────────────────────

const CHATBOT_STYLES = `
  @keyframes chatSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes dot-pulse {
    0%, 60%, 100% { transform: scale(1);   opacity: 0.4; }
    30%           { transform: scale(1.4); opacity: 1;   }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; }
  }
`;

function useChatbotStyles() {
  useEffect(() => {
    if (document.getElementById("chatbot-styles")) return;
    const el = document.createElement("style");
    el.id = "chatbot-styles";
    el.textContent = CHATBOT_STYLES;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

// ─── Root Chatbot component ───────────────────────────────────────────────────

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef(null);

  useChatbotStyles();

  // Ping the backend on page load so Render wakes up before the user opens the chat
  useEffect(() => { warmUp(); }, []);

  // Prevent body scroll on mobile when chat is open
  useEffect(() => {
    if (window.innerWidth >= 640) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <Launcher
        onClick={() => setIsOpen((v) => !v)}
        isOpen={isOpen}
        launcherRef={launcherRef}
      />
      {isOpen && (
        <ChatWindow
          onClose={() => setIsOpen(false)}
          launcherRef={launcherRef}
        />
      )}
    </>
  );
};

export default Chatbot;
