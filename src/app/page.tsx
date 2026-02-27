import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { BlogTeaser } from "@/components/home/BlogTeaser";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonathan Avni",
  url: "https://jonathanavni.com",
  jobTitle: "Product Leader & AI Builder",
  description:
    "10 years building developer platforms at Yahoo, Pinterest, Coinbase, and Paxos. Now going deep on AI.",
  sameAs: [
    "https://github.com/tuggspeedman-ai",
    "https://linkedin.com/in/jonathanavni",
    "https://x.com/jonathanavni",
  ],
  worksFor: [
    { "@type": "Organization", name: "Yahoo" },
    { "@type": "Organization", name: "Pinterest" },
    { "@type": "Organization", name: "Coinbase" },
    { "@type": "Organization", name: "Paxos" },
  ],
};

export default function Home() {
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
        <BlogTeaser />
      </main>
      <Footer />
    </>
  );
}
