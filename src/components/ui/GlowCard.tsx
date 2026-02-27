"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "group relative rounded-xl border border-border bg-bg-secondary p-6",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-[0_0_30px_rgba(232,168,73,0.08)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
