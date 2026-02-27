"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardAnimatedProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ProjectCardAnimated({
  children,
  delay = 0,
  className,
}: ProjectCardAnimatedProps) {
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
      whileHover={{ scale: 1.005 }}
      className={cn(
        "group relative rounded-xl border border-border bg-bg-secondary p-6 lg:p-8",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-[0_0_40px_rgba(232,168,73,0.06)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
