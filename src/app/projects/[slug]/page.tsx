import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectPageClient } from "@/components/projects/ProjectPageClient";
import { getProjectBySlug, getAllProjects } from "@/content/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Jonathan Avni`,
      description: project.tagline,
      images: project.screenshots.length > 0 ? [project.screenshots[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <ProjectPageClient project={project} />
      </main>
      <Footer />
    </>
  );
}
