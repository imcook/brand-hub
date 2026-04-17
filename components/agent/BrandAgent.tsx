"use client";

import { useState, useRef, useEffect } from "react";
import ColourSwatch from "@/components/ui/ColourSwatch";
import LemniscateAnimation from "@/components/agent/LemniscateAnimation";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ColourItem = {
  name: string;
  hex: string;
  rgb?: string;
  cmyk?: string;
  pantone?: string;
  role?: string;
};

type LogoItem = {
  name: string;
  file: string;
  usage?: string;
};

type FontVariant = {
  label: string;
  file: string;
};

type FontItem = {
  name: string;
  role?: string;
  variants: FontVariant[];
};

type IconItem = {
  file: string;
};

type VisualItem = {
  file: string;
  folder: "Backgrounds" | "Imagery";
};

type PhotoItem = {
  file: string;
};

type Segment =
  | { type: "text"; content: string }
  | { type: "colours"; items: ColourItem[] }
  | { type: "logos"; items: LogoItem[] }
  | { type: "fonts"; items: FontItem[] }
  | { type: "icons"; items: IconItem[] }
  | { type: "visuals"; items: VisualItem[] }
  | { type: "photos"; items: PhotoItem[] };

function parseContent(raw: string): Segment[] {
  // Strip any unclosed block at the end (mid-stream)
  const content = raw.replace(/\[BRAND_(?:COLOURS|LOGOS)\](?:(?!\[\/BRAND_)[\s\S])*$/, "").trim();

  const segments: Segment[] = [];
  const regex = /\[BRAND_(COLOURS|LOGOS|FONTS|ICONS|VISUALS|PHOTOS)\]([\s\S]*?)\[\/BRAND_(?:COLOURS|LOGOS|FONTS|ICONS|VISUALS|PHOTOS)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      const text = content.slice(lastIndex, match.index).trim();
      if (text) segments.push({ type: "text", content: text });
    }
    try {
      const parsed = JSON.parse(match[2].trim());
      if (match[1] === "COLOURS") {
        segments.push({ type: "colours", items: parsed });
      } else if (match[1] === "LOGOS") {
        segments.push({ type: "logos", items: parsed });
      } else if (match[1] === "FONTS") {
        segments.push({ type: "fonts", items: parsed });
      } else if (match[1] === "ICONS") {
        segments.push({ type: "icons", items: parsed });
      } else if (match[1] === "VISUALS") {
        segments.push({ type: "visuals", items: parsed });
      } else {
        segments.push({ type: "photos", items: parsed });
      }
    } catch {
      segments.push({ type: "text", content: match[0] });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    const text = content.slice(lastIndex).trim();
    if (text) segments.push({ type: "text", content: text });
  }

  return segments.length > 0 ? segments : [{ type: "text", content: raw }];
}

function logoPreviewStyle(name: string): { className: string; style?: React.CSSProperties } {
  if (name.toLowerCase() === "white on dark") {
    return {
      className: "h-28 flex items-center justify-center px-6",
      style: { background: "#001D39" },
    };
  }
  return { className: "h-28 flex items-center justify-center px-6 bg-sand-light border-b border-black/5" };
}

function LogoCard({ item }: { item: LogoItem }) {
  const preview = logoPreviewStyle(item.name);
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
      <div className={preview.className} style={preview.style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.file} alt={item.name} className="max-h-10 w-auto" />
      </div>
      <div className="p-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-body font-medium text-dark-neutral text-sm">{item.name}</p>
          {item.usage && <p className="text-xs text-dark-neutral/50 font-body mt-0.5 leading-relaxed">{item.usage}</p>}
        </div>
        <a
          href={item.file}
          download
          className="shrink-0 px-3 py-1.5 rounded-lg bg-sea-blue-mid/8 text-sea-blue-mid text-xs font-body hover:bg-sea-blue-mid hover:text-white transition-all"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function FontCard({ item }: { item: FontItem }) {
  const sampleText = item.name === "Inter" ? "The quick brown fox" : "The quick brown fox";
  const fontFamily = item.name === "Inter" ? "Inter, sans-serif" : "'Martina Plantijn', Georgia, serif";

  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
      <div className="px-6 py-8 border-b border-black/5 bg-sand-light">
        <p className="text-dark-neutral/30 text-[10px] uppercase tracking-widest font-body mb-2">{item.name}</p>
        <p className="text-dark-neutral text-3xl leading-tight" style={{ fontFamily }}>
          {sampleText}
        </p>
      </div>
      <div className="p-4">
        {item.role && <p className="text-xs text-dark-neutral/50 font-body mb-3">{item.role}</p>}
        <div className="flex flex-wrap gap-2">
          {item.variants.map((v) => (
            <a
              key={v.file}
              href={v.file}
              download
              className="px-3 py-1.5 rounded-lg bg-sea-blue-mid/8 text-sea-blue-mid text-xs font-body hover:bg-sea-blue-mid hover:text-white transition-all"
            >
              {v.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageContent({ content }: { content: string }) {
  const segments = parseContent(content);

  return (
    <div className="space-y-4">
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return (
            <p key={i} className="text-sm leading-relaxed font-body whitespace-pre-wrap">
              {seg.content}
            </p>
          );
        }
        if (seg.type === "colours") {
          return (
            <div key={i} className="grid grid-cols-2 gap-2">
              {seg.items.map((colour) => (
                <ColourSwatch
                  key={colour.hex}
                  name={colour.name}
                  hex={colour.hex}
                  rgb={colour.rgb}
                  cmyk={colour.cmyk}
                  pantone={colour.pantone}
                  role={colour.role}
                  size="medium"
                />
              ))}
            </div>
          );
        }
        if (seg.type === "logos") {
          return (
            <div key={i} className="grid grid-cols-1 gap-3">
              {seg.items.map((logo) => (
                <LogoCard key={logo.file} item={logo} />
              ))}
            </div>
          );
        }
        if (seg.type === "fonts") {
          return (
            <div key={i} className="grid grid-cols-1 gap-3">
              {seg.items.map((font) => (
                <FontCard key={font.name} item={font} />
              ))}
            </div>
          );
        }
        if (seg.type === "visuals") {
          return (
            <div key={i} className="grid grid-cols-2 gap-3">
              {seg.items.map((item) => {
                const webp = `/assets/images/${item.folder}/WebP/${item.file}.webp`;
                const png = `/assets/images/${item.folder}/PNG/${item.file}.png`;
                const name = item.file.replace(/_bg$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                return (
                  <div key={item.file} className="group relative rounded-xl overflow-hidden bg-sea-blue-dark" style={{ aspectRatio: "16/10" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={webp} alt={name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-sea-blue-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                      <span className="text-[10px] text-white/70 font-body">{name}</span>
                      <div className="flex gap-2 justify-end">
                        <a href={webp} download={`${item.file}.webp`} className="px-2.5 py-1 rounded-lg bg-white/20 text-white text-[11px] font-body hover:bg-white/35 transition-colors">WebP</a>
                        <a href={png} download={`${item.file}.png`} className="px-2.5 py-1 rounded-lg bg-white/20 text-white text-[11px] font-body hover:bg-white/35 transition-colors">PNG</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
        if (seg.type === "photos") {
          return (
            <div key={i} className="grid grid-cols-3 gap-3">
              {seg.items.map((item) => {
                const webp = `/assets/Photos/WebP/${item.file}.webp`;
                const png = `/assets/Photos/PNG/${item.file}.png`;
                const label = item.file.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                return (
                  <div key={item.file} className="group relative rounded-xl overflow-hidden bg-sea-blue-dark" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={webp} alt={label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-sea-blue-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                      <span className="text-[10px] text-white/70 font-body">{label}</span>
                      <div className="flex gap-2 justify-end">
                        <a href={webp} download={`${item.file}.webp`} className="px-2.5 py-1 rounded-lg bg-white/20 text-white text-[11px] font-body hover:bg-white/35 transition-colors">WebP</a>
                        <a href={png} download={`${item.file}.png`} className="px-2.5 py-1 rounded-lg bg-white/20 text-white text-[11px] font-body hover:bg-white/35 transition-colors">PNG</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
        if (seg.type === "icons") {
          return (
            <div key={i} className="flex flex-wrap gap-3">
              {seg.items.map((icon) => {
                const src = `/assets/icons/${encodeURIComponent(icon.file)}`;
                return (
                  <div key={icon.file} className="flex flex-col items-center gap-1.5">
                    <a
                      href={src}
                      download={icon.file}
                      className="w-16 h-16 rounded-xl bg-sea-blue-dark flex items-center justify-center hover:opacity-80 transition-opacity"
                      title={icon.file.replace(/\.svg$/, "").replace(/[-_]/g, " ")}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={icon.file} className="w-9 h-9 object-contain" />
                    </a>
                    <span className="text-[10px] font-body text-dark-neutral/50 text-center max-w-[64px] leading-tight">
                      {icon.file.replace(/^\d+\.\s*/, "").replace(/\.svg$/, "").replace(/[-_]/g, " ")}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

const PROMPT_CHIPS = [
  { label: "Review my copy" },
  { label: "Write on-brand copy" },
  { label: "Find an asset" },
  { label: "What are our brand colours?" },
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

  const inputField = (
    <div className="relative bg-white rounded-2xl border border-black/10 shadow-sm focus-within:border-sea-blue-mid focus-within:shadow-md transition-all">
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask Vouch Flow anything..."
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
  );

  return (
    <div className="flex flex-col h-full">
      {isEmpty ? (

        /* Empty state — Flow centred */
        <div className="flex-1 flex flex-col items-center justify-center px-6">

          <div className="mb-7">
            <LemniscateAnimation className="w-[120px] sm:w-[200px]" />
          </div>

          {/* Copy */}
          <p className="font-body text-sm text-dark-neutral/40 text-center max-w-md mb-8 leading-relaxed text-balance">
            <span className="font-semibold text-dark-neutral/70">Flow</span> knows the Vouch brand inside out. Ask about colours, copy guidelines, assets — or get feedback on something you&apos;re writing.
          </p>

          {/* Input */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl mb-4">
            {inputField}
          </form>

          {/* Prompt chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {PROMPT_CHIPS.map((chip) => (
              <button
                key={chip.label}
                onClick={() => sendMessage(chip.label)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sea-blue-mid/15 bg-white text-xs text-dark-neutral hover:border-sea-blue-mid hover:bg-sea-blue-mid/5 transition-all font-body shadow-sm"
              >
                {chip.label}
              </button>
            ))}
          </div>

        </div>

      ) : (

        /* Active state — messages + pinned input */
        <>
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && i === messages.length - 1 && (
                    <div className="shrink-0 mt-1">
                      <LemniscateAnimation className="w-[48px] sm:w-[76px]" />
                    </div>
                  )}
                  {msg.role === "assistant" && i !== messages.length - 1 && (
                    <div className="shrink-0 mt-1 w-[48px] sm:w-[76px]" style={{ aspectRatio: "1080/490" }} />
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-sea-blue-mid text-white rounded-tr-sm text-sm leading-relaxed font-body whitespace-pre-wrap"
                        : "bg-white text-dark-neutral rounded-tl-sm shadow-sm border border-black/5"
                    }`}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : msg.content ? (
                      <MessageContent content={msg.content} />
                    ) : (
                      <span className="flex gap-1 items-center text-sea-blue-mid/50 py-1">
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
          </div>

          <div className="px-6 pb-8 border-t border-black/5 pt-4">
            <div className="flex flex-wrap gap-2 mb-3 max-w-2xl mx-auto">
              {PROMPT_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => sendMessage(chip.label)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sea-blue-mid/15 bg-white text-xs text-dark-neutral hover:border-sea-blue-mid hover:bg-sea-blue-mid/5 transition-all font-body"
                >
                  {chip.label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {inputField}
            </form>
          </div>
        </>

      )}
    </div>
  );
}
