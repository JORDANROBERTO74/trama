const integrations = [
  "ticketing",
  "warehouse",
  "billing-api",
  "crm-api",
  "team-chat",
] as const;

export function CustomerDataFeatureMock() {
  return (
    <div className="flex h-full min-h-[140px] flex-col items-center justify-center rounded-xl border border-line bg-white p-3 shadow-sm">
      <div className="relative flex h-28 w-full items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full text-gray-200"
          aria-hidden
        >
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
        {integrations.map((name, i) => {
          const angle = (i / integrations.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + 38 * Math.cos(angle);
          const y = 50 + 38 * Math.sin(angle);
          return (
            <span
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded border border-line bg-surface/60 px-1.5 py-0.5 text-[8px] text-slate"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {name.split(" ")[0]}
            </span>
          );
        })}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-signal text-white shadow-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <ellipse
              cx="12"
              cy="7"
              rx="7"
              ry="3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              d="M5 7v6c0 1.7 3.1 3 7 3s7-1.3 7-3V7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
