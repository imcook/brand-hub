"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const PROMPT_CHIPS = [
  { label: "Review my copy", icon: "✏️" },
  { label: "Write on-brand copy", icon: "✍️" },
  { label: "Find an asset", icon: "🔍" },
  { label: "What are our brand colours?", icon: "🎨" },
];

export default function BrandAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...next, assistantMsg]);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok) throw new Error("Failed to fetch");
      if (!res.body) throw new Error("No body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: accumulated }]);
      }
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Sorry, I ran into an issue. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        {isEmpty ? (
          /* Empty state — hero */
          <div className="flex flex-col items-center justify-center h-full px-6 pb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/Vouch blue.svg"
              alt="Vouch"
              className="h-10 w-auto mb-8"
            />
            <h1 className="font-heading text-3xl text-dark-neutral text-center mb-2">
              Brand Agent
            </h1>
            <p className="text-sea-blue-mid/70 text-center max-w-md text-sm leading-relaxed font-body">
              Your AI-powered assistant for everything Vouch — from guidelines to copy to asset discovery.
            </p>

            {/* Prompt chips */}
            <div className="flex flex-wrap gap-2 mt-8 justify-center">
              {PROMPT_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => sendMessage(chip.label)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-sea-blue-mid/20 bg-white text-sm text-dark-neutral hover:border-sea-blue-mid hover:bg-sea-blue-mid/5 transition-all font-body shadow-sm"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Messages */
          <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-sea-blue-mid flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3v8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-body whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-sea-blue-mid text-white rounded-tr-sm"
                      : "bg-white text-dark-neutral rounded-tl-sm shadow-sm border border-black/5"
                  }`}
                >
                  {msg.content || (
                    <span className="flex gap-1 items-center text-sea-blue-mid/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-sea-blue-mid/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-sea-blue-mid/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-sea-blue-mid/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className={`px-6 pb-8 ${isEmpty ? "" : "border-t border-black/5 pt-4"}`}>
        {!isEmpty && (
          <div className="flex flex-wrap gap-2 mb-3 max-w-2xl mx-auto">
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip.label}
                onClick={() => sendMessage(chip.label)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sea-blue-mid/15 bg-white text-xs text-dark-neutral hover:border-sea-blue-mid hover:bg-sea-blue-mid/5 transition-all font-body"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </button>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-2xl border border-black/10 shadow-sm focus-within:border-sea-blue-mid focus-within:shadow-md transition-all">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask the Brand Agent anything..."
              rows={1}
              className="w-full resize-none bg-transparent px-4 py-3.5 pr-12 text-sm text-dark-neutral placeholder-dark-neutral/30 font-body focus:outline-none max-h-40 overflow-y-auto"
              style={{ lineHeight: "1.5" }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="absolute right-3 bottom-3 w-8 h-8 rounded-xl bg-sea-blue-mid text-white flex items-center justify-center hover:bg-sea-blue-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 12V2M2 7l5-5 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
