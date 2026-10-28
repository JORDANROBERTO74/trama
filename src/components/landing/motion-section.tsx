"use client";

import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import { fadeUp, motionTransition, viewportOnce } from "@/lib/landing-motion";
import { cn } from "@/lib/utils";

export function MotionSection({
  className,
  children,
  delay = 0,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
} & Omit<ComponentProps<typeof motion.div>, "children">) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ ...motionTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
