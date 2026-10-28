import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

function GhostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M10 2a6 6 0 0 0-6 6v5.5c0 .8.7 1.5 1.5 1.5H7v2.5l3-2 3 2v-2.5h1.5c.8 0 1.5-.7 1.5-1.5V8a6 6 0 0 0-6-6z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-signal" aria-hidden>
      <path fill="currentColor" d="M6.5 11.5 3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5z" />
    </svg>
  );
}

export function GhostwriterBuildMock({
  content,
}: Readonly<{ content: Dictionary["platform"]["build"]["build"] }>) {
  const { panelTitle, userMessage, systemNote, checklist, inputPlaceholder } = content;

  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-line/60 pb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-ink">
          <GhostIcon className="text-slate" />
          {panelTitle}
        </div>
        <span className="rounded-lg border border-line px-2.5 py-1 text-xs text-slate">
          New
        </span>
      </div>

      <div className="flex flex-1 flex-col space-y-3">
        <div className="rounded-xl bg-signal/10 px-3 py-2.5">
          <p className="text-xs leading-relaxed text-ink/80">{userMessage}</p>
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-full rounded bg-signal/15" />
            <div className="h-1.5 w-[80%] rounded bg-signal/15" />
          </div>
        </div>

        <p className="font-mono text-[10px] leading-relaxed text-slate">{systemNote}</p>

        <ul className="space-y-1.5">
          {checklist.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-[11px] text-ink/80">
              {item.done ? (
                <CheckIcon />
              ) : (
                <span
                  className="h-4 w-4 animate-pulse rounded-full border-2 border-line border-t-slate"
                  aria-hidden
                />
              )}
              <span className="font-mono">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-3 py-2">
        <span className="min-w-0 flex-1 truncate text-xs text-slate/80">
          {inputPlaceholder}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-signal text-white">
          <span className="text-xs" aria-hidden>
            →
          </span>
        </span>
      </div>
    </div>
  );
}
