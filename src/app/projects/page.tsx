import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectCardAnimated } from "@/components/projects/ProjectCardAnimated";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { getAllProjects } from "@/content/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects I've built — from training LLMs to building AI-powered platforms.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <SectionHeading>Projects</SectionHeading>
            <p className="text-text-secondary max-w-2xl -mt-6">
              Side projects I&apos;ve built and launched — from training LLMs from
              scratch to building full-stack AI platforms.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, i) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <ProjectCardAnimated delay={i * 0.12}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {project.screenshots.length > 0 && (
                      <div className="lg:w-80 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={project.screenshots[0]}
                          alt={`${project.name} screenshot`}
                          width={640}
                          height={400}
                          className="w-full h-52 lg:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-serif text-text-primary group-hover:text-accent transition-colors">
                            {project.name}
                          </h2>
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
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 6).map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                        <ArrowRight
                          size={20}
                          className="hidden md:block text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-4"
                        />
                      </div>
                    </div>
                  </div>
                </ProjectCardAnimated>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
