"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { CareerEntry } from "@/types";

const career: CareerEntry[] = [
  {
    period: "2012–2015",
    company: "Yahoo",
    role: "Product Manager",
    highlight:
      "Founding team member of Yahoo Gemini, powering monetization across Yahoo properties (over 1B MAUs at the time). Grew revenue from launch to $1B+ run-rate.",
  },
  {
    period: "2015–2018",
    company: "Pinterest",
    role: "Product Manager, Monetization",
    highlight:
      "Launched Marketing APIs used by 200+ partners, accounted for 50%+ of 2018 revenue.",
  },
  {
    period: "2019–2021",
    company: "Coinbase",
    role: "Senior Product Manager, Payments Platforms",
    highlight:
      "Built payments and trading infrastructure for Coinbase Retail and Enterprise customer-facing products, powering hundreds of billions of dollars in annual transaction volume.",
  },
  {
    period: "2022–2024",
    company: "Paxos",
    role: "Product Lead, Stablecoins and Banking",
    highlight:
      "Built and launched PayPal USD, a leading fully regulated USD stablecoin, and scaled it to a market cap of over $3B through dozens of distribution partner integrations.",
  },
  {
    period: "2024–Now",
    company: "Independent",
    role: "AI Builder",
    highlight:
      "Training LLMs from scratch. Building AI products. Shipping with Claude Code.",
    isCurrent: true,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>The Journey</SectionHeading>

        <div className="space-y-4">
          {career.map((entry, i) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "group relative rounded-xl border p-5 md:p-6 transition-all duration-300",
                entry.isCurrent
                  ? "border-accent/30 bg-accent/[0.03]"
                  : "border-border bg-bg-secondary hover:border-border-hover"
              )}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
                {/* Period */}
                <div className="flex items-center gap-3 md:w-32 shrink-0">
                  <span className="text-xs font-mono text-text-tertiary tracking-wide">
                    {entry.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3
                      className={cn(
                        "text-lg font-serif",
                        entry.isCurrent ? "text-accent" : "text-text-primary"
                      )}
                    >
                      {entry.company}
                    </h3>
                    <span className="text-sm text-text-tertiary">
                      {entry.role}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {entry.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-text-secondary italic leading-relaxed max-w-2xl"
        >
          A common thread: I&apos;ve always chased the most interesting
          technology of the moment — ads marketplaces, social APIs, crypto
          protocols, stablecoins — and now AI.
        </motion.p>
      </div>
    </section>
  );
}
