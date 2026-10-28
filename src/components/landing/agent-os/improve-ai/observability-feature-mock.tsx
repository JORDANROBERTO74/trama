function CheckMark() {
  return (
    <span className="text-signal" aria-hidden>
      ✓
    </span>
  );
}

const groups = [
  {
    label: "Governance Logs",
    items: ["agent.execution.completed", "automation.deployed"],
  },
  {
    label: "Policies",
    items: ["policy.approval_gate.passed"],
  },
  {
    label: "Evidence",
    items: ["channel · ticketing · source"],
  },
] as const;

export function ObservabilityFeatureMock() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-3 shadow-sm">
      <p className="text-[11px] font-semibold text-ink">
        <span className="text-slate/70">674</span> visible records
      </p>
      <ul className="mt-3 flex-1 space-y-2.5 text-[10px]">
        {groups.map((group) => (
          <li key={group.label}>
            <p className="font-medium text-ink">{group.label}</p>
            <ul className="mt-1 space-y-1 pl-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-2 text-slate"
                >
                  <span className="truncate">{item}</span>
                  <CheckMark />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
