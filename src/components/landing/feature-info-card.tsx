import type { FeatureIconId } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { FeatureIcon } from "./feature-icon";

type FeatureInfoCardProps = {
  icon: FeatureIconId;
  title: string;
  description: string;
  size?: "large" | "compact";
};

export function FeatureInfoCard({
  icon,
  title,
  description,
  size = "compact",
}: FeatureInfoCardProps) {
  const isLarge = size === "large";

  return (
    <article
      className={cn(
        "group flex flex-col gap-4 border border-line bg-surface/60 text-left",
        "transition-all duration-300 ease-out motion-reduce:transition-none",
        "md:hover:-translate-y-1 md:hover:border-ink/20 md:hover:bg-white md:hover:shadow-md motion-reduce:md:hover:translate-y-0",
        isLarge ? "rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10" : "rounded-2xl p-5 md:p-6"
      )}
    >
      <FeatureIcon id={icon} size={size} />
      <h3
        className={cn(
          "font-semibold leading-snug text-ink",
          isLarge ? "text-xl md:text-2xl" : "text-base md:text-lg"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "leading-relaxed text-slate",
          isLarge ? "text-sm md:text-base" : "text-sm"
        )}
      >
        {description}
      </p>
    </article>
  );
}
