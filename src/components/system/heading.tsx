import type { HTMLAttributes, ElementType } from "react";
import { cn } from "@/lib/utils";

type HeadingProps<T extends ElementType = "h1"> = {
  as?: T;
} & HTMLAttributes<HTMLElement>;

export function Display<T extends ElementType = "h1">({
  as,
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? "h1") as ElementType;
  return (
    <Component
      className={cn("text-display font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H2<T extends ElementType = "h2">({
  as,
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? "h2") as ElementType;
  return (
    <Component
      className={cn("text-section font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Eyebrow<T extends ElementType = "p">({
  as,
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? "p") as ElementType;
  return (
    <Component
      className={cn(
        "text-eyebrow uppercase text-slate theme-brand:text-bone/80 theme-tech:text-slate/70",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
