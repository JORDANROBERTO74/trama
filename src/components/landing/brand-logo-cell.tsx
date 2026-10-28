import { cn } from "@/lib/utils";

export function BrandLogoCell({
  name,
  className,
  hideFromAccessibility,
}: {
  name: string;
  className?: string;
  hideFromAccessibility?: boolean;
}) {
  return (
    <li
      className={cn(
        "flex h-12 shrink-0 items-center justify-center px-4 md:h-14 md:min-w-[9rem] md:px-8",
        className
      )}
    >
      <span
        className="select-none whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-slate md:text-[13px]"
        aria-hidden={hideFromAccessibility || undefined}
      >
        {name}
      </span>
    </li>
  );
}
