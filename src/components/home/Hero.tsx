"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
            <AnimatedText text="Jonathan Avni" delay={0.2} />
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-xl md:text-2xl text-accent font-mono tracking-wide mb-8"
          >
            Product Leader. AI Builder.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-12"
          >
            10 years building developer platforms at Yahoo, Pinterest, Coinbase,
            and Paxos. Now going deep on AI — training models, building
            products, and writing about it.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
          >
            <span className="text-sm tracking-wide">See what I&apos;m building</span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-text-tertiary to-transparent"
        />
      </motion.div>
    </section>
  );
}
