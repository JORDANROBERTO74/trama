function TrendIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-slate"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 14 L8 9 L12 12 L17 5"
      />
      <path
        fill="currentColor"
        d="M15 4h3v3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function InsightsBadge({ label }: { label: string }) {
  return (
    <div className="mt-5 flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-slate">
        <TrendIcon />
        {label}
      </span>
    </div>
  );
}
