"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  talk2docsFeatures,
  talk2docsArchitecture,
  talk2docsStats,
  talk2docsLearnings,
} from "@/content/talk2docs-content";

export function Talk2DocsDetail() {
  return (
    <>
      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-8">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {talk2docsFeatures.map((feature, i) => (
            <GlowCard key={feature.title} delay={i * 0.1}>
              <h3 className="text-accent font-mono text-sm mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </motion.div>

      {/* RAG Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-4">
          Seven-Stage RAG Pipeline
        </h2>
        <p className="text-text-secondary mb-8 max-w-3xl">
          Built every layer of the retrieval pipeline from scratch — no
          LangChain, no LlamaIndex. Full control over quality with independent
          tuning per stage.
        </p>

        <div className="space-y-3">
          {talk2docsArchitecture.map((stage, i) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-lg border border-border bg-bg-secondary p-4"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                <span className="font-mono text-accent text-sm shrink-0 md:w-56">
                  {stage.stage}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* By the Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-8">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {talk2docsStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-bg-secondary p-4 text-center"
            >
              <div className="text-xl font-mono text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learnings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-8">
          What I Learned
        </h2>
        <div className="space-y-4">
          {talk2docsLearnings.map((learning, i) => (
            <GlowCard key={learning.title} delay={i * 0.1}>
              <h3 className="font-serif text-text-primary mb-2">
                {learning.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {learning.detail}
              </p>
            </GlowCard>
          ))}
        </div>
      </motion.div>
    </>
  );
}
