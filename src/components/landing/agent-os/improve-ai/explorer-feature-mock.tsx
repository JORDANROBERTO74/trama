export function ExplorerFeatureMock() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-3 shadow-sm">
      <p className="text-[11px] font-medium leading-snug text-ink">
        Goal: avoid churn from pricing complaints in support tickets
      </p>
      <p className="mt-3 text-[10px] font-semibold text-slate">
        Draft plan steps
      </p>
      <div className="mt-2 flex-1 space-y-1.5">
        <div className="h-2 w-full rounded bg-surface" />
        <div className="h-2 w-[92%] rounded bg-surface" />
        <div className="h-2 w-full rounded bg-surface" />
        <div className="h-2 w-[75%] rounded bg-surface" />
      </div>
      <span className="mt-3 inline-flex w-fit rounded-full border border-line bg-surface/60 px-2.5 py-1 text-[10px] text-slate">
        #retention-alerts
      </span>
    </div>
  );
}
