import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { getAllPosts } from "@/lib/mdx";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonathan Avni",
  url: "https://jonathanavni.com",
  jobTitle: "Product Leader & AI Builder",
  description:
    "Product leader and AI builder with 13+ years shipping developer APIs and payments infrastructure at Coinbase, Paxos, Pinterest, and Yahoo. Now building at the intersection of payments and AI agents: training language models, building agent frameworks, and writing about AI and product development.",
  image: "https://jonathanavni.com/opengraph-image",
  email: "me@jonathanavni.com",
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "AI Agents",
    "Product Management",
    "Payments Infrastructure",
    "Stablecoins",
    "Developer Platforms",
    "RAG Systems",
    "Machine Learning",
  ],
  sameAs: [
    "https://github.com/jonathanavni",
    "https://linkedin.com/in/jonathanavni",
    "https://x.com/YOAVNI",
  ],
  alumniOf: [
    { "@type": "Organization", name: "Yahoo", description: "Product Manager - Founded Yahoo Gemini, $1B+ run-rate monetization (2012–2015)" },
    { "@type": "Organization", name: "Pinterest", description: "Product Manager, Monetization - Marketing APIs, 100+ partners, 50%+ revenue (2015–2018)" },
    { "@type": "Organization", name: "Coinbase", description: "Senior PM, Payments - Payments infrastructure, $100B+ annual volume (2019–2021)" },
    { "@type": "Organization", name: "Paxos", description: "Product Lead, Stablecoins - Built and launched PayPal USD, $3B+ market cap (2022–2024)" },
  ],
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProjectsTeaser />
        <BlogTeaser posts={posts} />
      </main>
      <Footer />
    </>
  );
}
