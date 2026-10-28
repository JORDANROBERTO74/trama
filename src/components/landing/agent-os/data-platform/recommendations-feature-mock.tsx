const fields = [
  { label: "Automation", value: "Churn Risk Ticket Alert" },
  { label: "Agent", value: "Revenue Protection Agent" },
  { label: "Status", value: "Active" },
] as const;

export function RecommendationsFeatureMock() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-white p-3 shadow-sm">
      {fields.map((field) => (
        <div
          key={field.label}
          className="border-b border-line/60 py-2 last:border-0"
        >
          <p className="text-[10px] text-slate">{field.label}</p>
          <p className="text-[11px] font-medium text-ink">{field.value}</p>
        </div>
      ))}
    </div>
  );
}
