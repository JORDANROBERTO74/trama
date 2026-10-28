import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Text({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-slate theme-brand:text-bone theme-tech:text-slate/50",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Lead({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-lg text-slate theme-brand:text-bone theme-tech:text-slate/50",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
