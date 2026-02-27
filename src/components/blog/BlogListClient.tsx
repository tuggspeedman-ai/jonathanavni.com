"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PenLine, ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogListClientProps {
  posts: BlogPost[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl border border-border bg-bg-secondary p-16 text-center"
      >
        <PenLine size={36} className="mx-auto mb-4 text-text-tertiary" />
        <p className="text-text-secondary mb-2 text-lg">Posts coming soon.</p>
        <p className="text-sm text-text-tertiary max-w-md mx-auto">
          I&apos;m working on posts about my Claude Code + Obsidian setup,
          OpenClaw, and thoughts on x402 and agentic payments.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-6">
      {posts.map((post, i) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <GlowCard delay={i * 0.1}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-serif text-text-primary group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-tertiary">
                  <span>{formatDate(post.date)}</span>
                  <span>&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="hidden md:block text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1"
              />
            </div>
          </GlowCard>
        </Link>
      ))}
    </div>
  );
}
