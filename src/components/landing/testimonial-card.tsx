export function TestimonialCard({
  company,
  quote,
  name,
  role,
}: {
  company: string;
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-white/70 p-6 text-left">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
        {company}
      </p>
      <blockquote className="mt-5 text-sm leading-relaxed text-slate md:text-[15px]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-auto pt-6">
        <p className="font-mono text-xs text-ink">{name}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate">{role}</p>
      </div>
    </div>
  );
}
