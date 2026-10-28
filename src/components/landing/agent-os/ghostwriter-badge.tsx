function GhostIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-slate"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M10 2a6 6 0 0 0-6 6v5.5c0 .8.7 1.5 1.5 1.5H7v2.5l3-2 3 2v-2.5h1.5c.8 0 1.5-.7 1.5-1.5V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v5.5H6V8a4 4 0 0 1 4-4z"
      />
      <circle cx="8" cy="9" r="1" fill="white" />
      <circle cx="12" cy="9" r="1" fill="white" />
    </svg>
  );
}

export function GhostwriterBadge({ label }: { label: string }) {
  return (
    <div className="mt-5 flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-slate">
        <GhostIcon />
        {label}
      </span>
    </div>
  );
}
