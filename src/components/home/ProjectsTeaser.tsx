"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/content/projects";

export function ProjectsTeaser() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Selected Projects</SectionHeading>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <GlowCard delay={i * 0.15}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Screenshot */}
                  {project.screenshots.length > 0 && (
                    <div className="md:w-72 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={project.screenshots[0]}
                        alt={`${project.name} screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-48 md:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-serif text-text-primary group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                        <Badge
                          variant={
                            project.status === "live" ? "live" : "sunset"
                          }
                        >
                          {project.status === "live" ? "Live" : "Sunset"}
                        </Badge>
                      </div>
                      <p className="text-accent/80 font-mono text-sm mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center">
                    <ArrowRight
                      size={20}
                      className="text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
          >
            View all projects
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
