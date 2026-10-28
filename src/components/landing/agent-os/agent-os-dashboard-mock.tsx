import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { ProductMockScaleFrame } from "../product-mock-scale-frame";

const DASHBOARD_MOCK_WIDTH = 640;
const DASHBOARD_MOCK_HEIGHT = 420;

function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink" aria-hidden>
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        transform="rotate(45 12 12)"
        fill="currentColor"
      />
    </svg>
  );
}

function Sparkline({ positive = true }: { positive?: boolean }) {
  const stroke = positive ? "#2f46ff" : "#9aa1ad";
  const points = positive
    ? "0,20 12,14 24,10 36,6 48,4"
    : "0,6 12,10 24,14 36,16 48,18";
  return (
    <svg viewBox="0 0 48 22" className="h-5 w-12 shrink-0">
      <polyline fill="none" stroke={stroke} strokeWidth="1.5" points={points} />
    </svg>
  );
}

function AreaChart() {
  return (
    <svg viewBox="0 0 200 80" className="mt-3 h-24 w-full">
      <defs>
        <linearGradient id="areaSignal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f46ff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2f46ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,70 L30,58 L60,52 L90,38 L120,32 L150,22 L180,14 L200,8 L200,80 L0,80 Z"
        fill="url(#areaSignal)"
      />
      <polyline
        fill="none"
        stroke="#2f46ff"
        strokeWidth="2"
        points="0,70 30,58 60,52 90,38 120,32 150,22 180,14 200,8"
      />
    </svg>
  );
}

export function AgentOsDashboardMock({
  content,
}: Readonly<{ content: Dictionary["platform"] }>) {
  const { nav, explorer } = content;

  return (
    <div className="mx-auto max-w-5xl px-1 pb-2">
      <ProductMockScaleFrame
        intrinsicWidth={DASHBOARD_MOCK_WIDTH}
        intrinsicHeight={DASHBOARD_MOCK_HEIGHT}
      >
        <div
          className="w-[640px] overflow-hidden rounded-3xl border border-line bg-white text-left shadow-xl shadow-ink/5 md:w-full"
          aria-hidden
        >
          <div className="flex min-h-[320px] md:min-h-[420px]">
            <aside className="hidden w-[200px] shrink-0 border-r border-line bg-surface/60 p-4 sm:block">
              <div className="flex items-center gap-2">
                <BrandMark />
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink">
                  {nav.brand}
                </span>
              </div>

              {nav.groups.map((group) => (
                <div key={group.label}>
                  <p className="mt-6 text-[10px] font-medium uppercase tracking-wider text-slate/70">
                    {group.label}
                  </p>
                  <ul className="mt-2 space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <span
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-slate",
                            item.active && "bg-surface font-medium text-ink"
                          )}
                        >
                          <span className="h-3.5 w-3.5 rounded bg-slate/20" />
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>

            <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
              <div className="rounded-xl border border-line bg-surface/70 px-4 py-3 text-sm text-ink">
                {explorer.query}
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-ink">Summary</p>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  {explorer.summary}
                </p>
              </div>

              <div className="mt-4 grid flex-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="text-xs text-slate">{explorer.metric.label}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-medium text-ink">
                      {explorer.metric.value}
                    </span>
                    <span className="text-sm font-medium text-signal">
                      {explorer.metric.trend}
                    </span>
                  </div>
                  <AreaChart />
                </div>

                <div className="rounded-xl border border-line bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate">{explorer.header}</p>
                    <span className="text-[10px] text-slate/80">{explorer.successRate}</span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {explorer.rows.map((row) => (
                      <li key={row.name} className="flex items-center gap-2 text-[11px]">
                        <span className="min-w-0 flex-1 truncate text-ink/80">
                          {row.name}
                        </span>
                        <span className="shrink-0 tabular-nums text-slate">{row.owner}</span>
                        <span
                          className={cn(
                            "shrink-0 tabular-nums font-medium",
                            row.positive ? "text-signal" : "text-slate/70"
                          )}
                        >
                          {row.state}
                        </span>
                        <Sparkline positive={row.positive} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-line bg-surface/70 px-3 py-2">
                <span className="min-w-0 flex-1 truncate text-xs text-slate/80">
                  {nav.input}
                </span>
                <span className="shrink-0 rounded-lg bg-signal px-3 py-1.5 text-xs font-medium text-white">
                  {nav.run}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ProductMockScaleFrame>
    </div>
  );
}
