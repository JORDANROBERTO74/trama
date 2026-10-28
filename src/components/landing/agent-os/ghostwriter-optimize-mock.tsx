import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

function GhostIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-slate" aria-hidden>
      <path
        fill="currentColor"
        d="M10 2a6 6 0 0 0-6 6v5.5c0 .8.7 1.5 1.5 1.5H7v2.5l3-2 3 2v-2.5h1.5c.8 0 1.5-.7 1.5-1.5V8a6 6 0 0 0-6-6z"
      />
    </svg>
  );
}

export function GhostwriterOptimizeMock({
  content,
}: Readonly<{ content: Dictionary["platform"]["build"]["optimize"] }>) {
  const { title, recommendations, actions } = content;

  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-ink">{title}</p>

      <ul className="mt-3 flex-1 space-y-2">
        {recommendations.map((rec) => (
          <li
            key={rec.text}
            className={cn(
              "flex gap-2 rounded-lg border px-3 py-2.5 text-[11px] leading-snug text-ink/80",
              rec.highlighted ? "border-signal/30 bg-signal/10" : "border-line/70 bg-surface/60"
            )}
          >
            <GhostIcon />
            <span>{rec.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {actions.map((action) => (
          <span
            key={action}
            className="rounded-full bg-signal/10 px-3 py-1.5 text-xs font-medium text-signal"
          >
            {action} →
          </span>
        ))}
      </div>
    </div>
  );
}
