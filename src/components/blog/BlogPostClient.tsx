"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogPostClientProps {
  post: BlogPost & { content: string };
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-text-tertiary">
          <span>{formatDate(post.date)}</span>
          <span>&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-text-primary
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary
          prose-code:text-accent prose-code:bg-bg-tertiary prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
          prose-pre:bg-bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded-xl
          prose-blockquote:border-accent/30 prose-blockquote:text-text-secondary
          prose-li:text-text-secondary
          prose-hr:border-border"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </motion.article>
    </div>
  );
}
