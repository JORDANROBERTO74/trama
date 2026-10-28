import { cn } from "@/lib/utils";

export function BrandLogo({
  name,
  className,
  light = false,
}: {
  name: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-[-0.03em]",
        light ? "text-bone" : "text-ink",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[0.8em] w-[0.8em] shrink-0"
      >
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          transform="rotate(45 12 12)"
          fill="currentColor"
        />
      </svg>
      <span className="text-[1.05em] leading-none">{name}</span>
    </span>
  );
}
