import {
  Brain,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeatureIconId } from "@/i18n/dictionaries/en";

const iconMap: Record<FeatureIconId, LucideIcon> = {
  brain: Brain,
  zap: Zap,
  network: Network,
  shield: ShieldCheck,
  workflow: Workflow,
};

export function FeatureIcon({
  id,
  size = "compact",
}: {
  id: FeatureIconId;
  size?: "large" | "compact";
}) {
  const Icon = iconMap[id];
  const isLarge = size === "large";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal transition-colors duration-300 group-hover:bg-signal/15",
        isLarge ? "h-12 w-12 md:h-14 md:w-14" : "h-11 w-11"
      )}
      aria-hidden
    >
      <Icon
        className={cn(isLarge ? "h-6 w-6 md:h-7 md:w-7" : "h-5 w-5")}
        strokeWidth={1.75}
      />
    </div>
  );
}
