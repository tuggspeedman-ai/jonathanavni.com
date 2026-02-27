"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogTeaserProps {
  posts: BlogPost[];
}

export function BlogTeaser({ posts }: BlogTeaserProps) {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Writing</SectionHeading>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border bg-bg-secondary p-12 text-center"
          >
            <PenLine size={32} className="mx-auto mb-4 text-text-tertiary" />
            <p className="text-text-secondary mb-2">Posts coming soon.</p>
            <p className="text-sm text-text-tertiary">
              Thoughts on AI, developer tools, and building products.
            </p>
          </motion.div>
        ) : (
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
        )}

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
