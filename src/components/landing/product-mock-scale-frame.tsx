"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MD_BREAKPOINT = 768;

type ProductMockScaleFrameProps = {
  intrinsicWidth: number;
  intrinsicHeight: number;
  className?: string;
  children: ReactNode;
};

export function ProductMockScaleFrame({
  intrinsicWidth,
  intrinsicHeight,
  className,
  children,
}: ProductMockScaleFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      if (window.innerWidth >= MD_BREAKPOINT) {
        setScale(1);
        return;
      }
      const width = container.clientWidth;
      setScale(Math.min(1, width / intrinsicWidth));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [intrinsicWidth]);

  const isScaled = scale < 1;
  const scaledWidth = intrinsicWidth * scale;
  const scaledHeight = intrinsicHeight * scale;

  if (!isScaled) {
    return (
      <div ref={containerRef} className={cn("w-full", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden", className)}
      style={{ height: scaledHeight }}
    >
      <div
        className="relative mx-auto"
        style={{ width: scaledWidth, height: scaledHeight }}
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: intrinsicWidth,
            height: intrinsicHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
