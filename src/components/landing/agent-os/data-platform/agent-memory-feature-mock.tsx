export function AgentMemoryFeatureMock() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-3 shadow-sm">
      <p className="text-[11px] font-semibold text-ink">Business map</p>
      <p className="text-[10px] text-slate">Ticketing · CRM · Billing</p>
      <p className="text-[10px] text-slate">Approved operations</p>
      <div className="mt-3 flex-1 rounded-lg border border-line/60 bg-surface/60 p-2.5 text-[10px] text-slate">
        <p>
          <span className="text-slate/70">Systems:</span> tickets, accounts,
          billing history
        </p>
        <p className="mt-1.5">
          <span className="text-slate/70">Policies:</span>{" "}
          <span className="text-signal">guardrails active</span>
        </p>
      </div>
    </div>
  );
}
