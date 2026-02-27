"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { Talk2DocsDetail } from "./Talk2DocsDetail";

interface ProjectPageClientProps {
  project: Project;
}

export function ProjectPageClient({ project }: ProjectPageClientProps) {
  const isTalk2Docs = project.slug === "talk2docs";

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary">
            {project.name}
          </h1>
          <Badge variant={project.status === "live" ? "live" : "sunset"}>
            {project.status === "live" ? "Live" : "Sunset"}
          </Badge>
        </div>

        <p className="text-xl text-accent font-mono mb-6">{project.tagline}</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mb-8">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg font-mono text-text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent text-bg-primary px-5 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </motion.div>

      {/* Hero screenshot */}
      {project.screenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 overflow-hidden rounded-xl border border-border"
        >
          <Image
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            width={1200}
            height={700}
            className="w-full"
            priority
          />
        </motion.div>
      )}

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-6">
          Overview
        </h2>
        <p className="text-text-secondary leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </motion.div>

      {/* Talk2Docs gets expanded detail */}
      {isTalk2Docs && <Talk2DocsDetail />}

      {/* Additional screenshots gallery */}
      {project.screenshots.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-text-primary mb-8">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.slice(1).map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 2}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tech stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif text-text-primary mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
