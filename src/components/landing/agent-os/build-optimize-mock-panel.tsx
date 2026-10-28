import { cn } from "@/lib/utils";

export function BuildOptimizeMockPanel({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl bg-surface p-4 md:p-5",
        compact ? "min-h-[160px] md:min-h-[200px]" : "min-h-[200px] md:min-h-[320px]"
      )}
    >
      <div className="flex h-full min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
