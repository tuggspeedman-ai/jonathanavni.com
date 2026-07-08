import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learnings from my projects and from watching the AI and agentic payments space.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <SectionHeading>Blog</SectionHeading>
            <p className="text-text-secondary max-w-2xl -mt-6">
              Learnings from my projects and from watching the AI and agentic
              payments space.
            </p>
          </div>

          {posts.length === 0 ? (
            <BlogListClient posts={[]} />
          ) : (
            <BlogListClient posts={posts} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
