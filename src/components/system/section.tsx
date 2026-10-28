import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  brandThemeClasses,
  type BrandTheme,
} from "@/lib/theme";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  theme?: BrandTheme;
  padded?: boolean;
  as?: "section" | "header" | "footer" | "div";
}

export function Section({
  theme = "base",
  padded = true,
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  const { themeClass, section } = brandThemeClasses[theme];

  return (
    <Component
      className={cn(
        "relative",
        themeClass,
        section,
        padded && "py-section-padding",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
