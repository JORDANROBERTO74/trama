"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries/en";

const LOOP_DELAY_MS = 8000;

export function HeroChatDemo({
  content,
}: Readonly<{ content: Dictionary["hero"]["console"] }>) {
  const messages = content.messages;
  const [visibleCount, setVisibleCount] = useState(2);
  const [typing, setTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const reset = setTimeout(() => {
        setVisibleCount(2);
        setTyping(false);
      }, LOOP_DELAY_MS);
      return () => clearTimeout(reset);
    }

    const isAgentNext = messages[visibleCount]?.role === "agent";
    const delay = isAgentNext ? 1400 : 900;

    const timer = setTimeout(() => {
      if (isAgentNext) {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisibleCount((count) => count + 1);
        }, 1000);
      } else {
        setVisibleCount((count) => count + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount, messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typing]);

  return (
    <div className="flex h-[min(300px,52vh)] min-h-[250px] w-full flex-col overflow-hidden rounded-3xl bg-white/85 p-4 shadow-2xl shadow-ink/10 ring-1 ring-line backdrop-blur-xl md:h-[420px] md:p-5">
      <div className="mb-4 flex shrink-0 items-center gap-3 border-b border-line pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-signal font-mono text-[11px] font-medium text-white">
          {content.initials}
        </div>
        <div className="min-w-0">
          <span className="block text-sm font-semibold tracking-tight text-ink">
            {content.agentName}
          </span>
          <span className="block truncate text-xs text-slate">{content.agentStatus}</span>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain scroll-smooth [scrollbar-gutter:stable]"
      >
        <AnimatePresence mode="popLayout">
          {messages.slice(0, visibleCount).map((message, index) => (
            <motion.div
              key={`${index}-${message.text.slice(0, 12)}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  message.role === "user"
                    ? "max-w-[88%] rounded-2xl rounded-br-md bg-surface px-4 py-2.5 text-sm leading-relaxed text-ink"
                    : "max-w-[88%] rounded-2xl rounded-bl-md bg-graphite px-4 py-2.5 text-sm leading-relaxed text-bone"
                }
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="flex gap-1.5 rounded-2xl bg-graphite px-4 py-3.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-bone/50 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-bone/50 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-bone/50 [animation-delay:300ms]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
