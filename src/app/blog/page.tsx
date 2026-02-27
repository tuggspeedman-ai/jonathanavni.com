import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on AI, developer tools, and building products.",
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
              Thoughts on AI, developer tools, and building products.
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
