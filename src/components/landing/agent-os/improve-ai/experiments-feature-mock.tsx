export function ExperimentsFeatureMock() {
  return (
    <div className="flex h-full gap-2 rounded-xl border border-line bg-white p-3 shadow-sm">
      <div
        className="mt-2 w-3 shrink-0 border-l-2 border-dotted border-line"
        aria-hidden
      />
      <div className="flex flex-1 flex-col justify-center gap-2">
        <div className="rounded-xl border border-line/60 bg-surface/60 px-3 py-2 text-[10px] text-slate">
          <span className="text-slate/70">Schedule:</span> Event-driven
          automation
        </div>
        <div className="rounded-xl border border-blue-100 bg-signal/10/80 px-3 py-2 text-[10px] text-slate">
          <span className="text-signal">Deploy:</span> Manual run on demand —
          guardrails active
        </div>
      </div>
    </div>
  );
}
