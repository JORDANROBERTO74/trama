"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <motion.div
      className="absolute inset-0 transition-opacity duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-gradient-animated absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(84,114,67,0.10),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-bone via-bone/80 to-transparent" />
    </motion.div>
  );
}
