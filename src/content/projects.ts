import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "tinychat",
    name: "TinyChat",
    tagline: "A 561M-parameter LLM trained from scratch for ~$95",
    description:
      "A complete end-to-end language model built from the ground up — custom BPE tokenizer, GPT architecture with RoPE and Multi-Query Attention, trained on ~38B tokens from FineWeb-EDU, then fine-tuned for conversation. Deployed on Modal serverless GPU with a Next.js frontend.",
    status: "live",
    stats: [
      { label: "Parameters", value: "561M" },
      { label: "Training Cost", value: "~$95" },
      { label: "Vocabulary", value: "65K tokens" },
      { label: "Context Window", value: "2048" },
    ],
    techStack: [
      "PyTorch",
      "Modal (T4 GPU)",
      "Next.js",
      "Tailwind CSS",
      "SSE Streaming",
    ],
    links: {
      github: "https://github.com/tuggspeedman-ai/tinychat",
      live: "https://tinychat-two.vercel.app",
    },
    screenshots: [
      "/images/projects/tinychat/tinychat-chat-ui.png",
      "/images/projects/tinychat/tinychat-training-run.png",
      "/images/projects/tinychat/tinychat-wandb.png",
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "tinybrain",
    name: "TinyBrain",
    tagline: "An AI that earns and spends money autonomously via x402",
    description:
      "An AI inference service built on top of TinyChat that charges users $0.01/query via the x402 payment protocol. Routes complex queries to DeepSeek R1 for ~$0.001, pocketing the difference. Features intelligent complexity classification, a \"bar tab\" payment mode with stateless HMAC-signed sessions, and full wallet integration on Base mainnet.",
    status: "live",
    stats: [
      { label: "Price per Query", value: "$0.01" },
      { label: "Inference Cost", value: "~$0.001" },
      { label: "Payment Protocol", value: "x402" },
      { label: "Chain", value: "Base" },
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "x402 Protocol",
      "wagmi/viem",
      "USDC on Base",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/tuggspeedman-ai/tinybrain",
      live: "https://tinybrain.vercel.app",
    },
    screenshots: [
      "/images/projects/tinybrain/tinybrain-screenshot-1.png",
      "/images/projects/tinybrain/tinybrain-screenshot-2.png",
      "/images/projects/tinybrain/tinybrain-screenshot-3.png",
      "/images/projects/tinybrain/tinybrain-screenshot-4.png",
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "talk2docs",
    name: "Talk2Docs",
    tagline:
      "A full-stack RAG platform for chatting with PDFs, URLs, and podcasts",
    description:
      "A production SaaS platform with a complete RAG system built from scratch — custom chunking, hybrid retrieval, query classification, multi-document synthesis, and citation validation. ~52,500 lines of TypeScript across 363 files, built solo with Claude Code over 10 months.",
    status: "sunset",
    stats: [
      { label: "Lines of Code", value: "52,500" },
      { label: "React Components", value: "105" },
      { label: "API Endpoints", value: "38" },
      { label: "Database Tables", value: "16" },
      { label: "Commits", value: "222" },
      { label: "Developer", value: "1" },
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase + pgvector",
      "OpenAI GPT-4.1",
      "Cohere Rerank",
      "Railway Workers",
      "Stripe",
      "Clerk",
    ],
    links: {},
    screenshots: [
      "/images/projects/talk2docs/talk2docs-1.png",
      "/images/projects/talk2docs/talk2docs-2.png",
      "/images/projects/talk2docs/talk2docs-3.png",
      "/images/projects/talk2docs/talk2docs-4.png",
      "/images/projects/talk2docs/talk2docs-5.png",
      "/images/projects/talk2docs/talk2docs-6.png",
      "/images/projects/talk2docs/talk2docs-7.png",
      "/images/projects/talk2docs/talk2docs-8.png",
      "/images/projects/talk2docs/talk2docs-9.png",
      "/images/projects/talk2docs/talk2docs-10.png",
      "/images/projects/talk2docs/talk2docs-11.png",
      "/images/projects/talk2docs/talk2docs-12.png",
    ],
    featured: true,
    order: 3,
  },
  {
    slug: "pagepiper",
    name: "PagePiper",
    tagline: "Chrome extension that converts web pages to clean markdown",
    description:
      "A Chrome extension that clips web pages or selections to clean, well-formatted markdown and copies to clipboard. Uses Mozilla's Readability.js for content extraction and Turndown.js for HTML-to-markdown conversion. Supports keyboard shortcuts, context menus, preview before copy, and smart cleanup of ads and trackers.",
    status: "live",
    stats: [
      { label: "Format", value: "Chrome Extension" },
      { label: "Manifest", value: "V3" },
    ],
    techStack: [
      "Chrome Extensions API",
      "Readability.js",
      "Turndown.js",
      "Manifest V3",
    ],
    links: {
      github: "https://github.com/tuggspeedman-ai/pagepiper",
    },
    screenshots: [
      "/images/projects/pagepiper/screenshot-1-store.png",
      "/images/projects/pagepiper/screenshot-2-store.png",
      "/images/projects/pagepiper/screenshot-3-store.png",
    ],
    featured: false,
    order: 4,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
