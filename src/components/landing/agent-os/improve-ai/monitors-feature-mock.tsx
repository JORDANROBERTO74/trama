export function MonitorsFeatureMock() {
  return (
    <div className="relative flex h-full min-h-[140px] flex-col rounded-xl border border-line bg-white p-3 shadow-sm">
      <div className="absolute inset-0 rounded-xl border border-line/70 bg-white/80 p-3 opacity-90">
        <p className="text-[10px] text-slate">Total Tickets</p>
        <div className="mt-2 flex h-16 items-end gap-1">
          {[40, 55, 45, 70, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-blue-200"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-8 ml-4 w-[85%] rounded-xl border border-line bg-white p-3 shadow-md">
        <p className="text-[10px] uppercase tracking-wide text-slate">
          % Automated
        </p>
        <p className="text-xl font-semibold text-ink">79.7%</p>
        <svg viewBox="0 0 100 28" className="mt-1 h-7 w-full text-signal">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="0,24 20,18 40,14 60,10 80,6 100,4"
          />
        </svg>
      </div>
    </div>
  );
}
