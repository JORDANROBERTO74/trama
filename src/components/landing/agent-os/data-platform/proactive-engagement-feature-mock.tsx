export function ProactiveEngagementFeatureMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-line bg-white p-3 shadow-sm">
      <div className="rounded-lg border border-line/60 bg-surface/60 px-2.5 py-2 text-[10px] text-slate">
        <p className="font-medium text-ink">High-risk step</p>
        <p className="text-slate">Paused for human approval</p>
      </div>
      <div className="rounded-lg border border-blue-100 bg-signal/10/80 px-2.5 py-2 text-[10px] text-slate">
        <span className="text-signal">Governance:</span> Every decision logged;
        patterns improve the next run.
      </div>
    </div>
  );
}
