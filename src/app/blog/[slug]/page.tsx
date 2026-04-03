import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BlogPostClient } from "@/components/blog/BlogPostClient";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://jonathanavni.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: "Jonathan Avni",
      url: "https://jonathanavni.com",
    },
    publisher: {
      "@type": "Person",
      name: "Jonathan Avni",
      url: "https://jonathanavni.com",
    },
    ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(", ") }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-24 pb-16">
        <BlogPostClient post={post} />
      </main>
      <Footer />
    </>
  );
}
