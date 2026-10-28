function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-slate"
      aria-hidden
    >
      <ellipse
        cx="10"
        cy="5"
        rx="6"
        ry="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        d="M4 5v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        d="M4 9c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5"
      />
    </svg>
  );
}

export function DataPlatformBadge({ label }: { label: string }) {
  return (
    <div className="mt-5 flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-slate">
        <DatabaseIcon />
        {label}
      </span>
    </div>
  );
}
