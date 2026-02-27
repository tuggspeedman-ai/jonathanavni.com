"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogTeaser() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Writing</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-border bg-bg-secondary p-12 text-center"
        >
          <PenLine size={32} className="mx-auto mb-4 text-text-tertiary" />
          <p className="text-text-secondary mb-2">
            Posts coming soon.
          </p>
          <p className="text-sm text-text-tertiary">
            Thoughts on AI, developer tools, and building products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
          >
            Go to blog
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
