import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sigildex",
    name: "Sigildex",
    tagline:
      "Approval records for AI agent skills: lock what a human approved, detect when the installed copy drifts, diff what changed",
    description:
      "Started as a hosted, agent-first trust layer for agent skills: a REST API and MCP server that let an agent discover, inspect and verify skills, with x402 micropayments on Base and a three-layer safety-scoring pipeline over a ~200K-row corpus. After a summer spent rebuilding the index, I wound the hosted service down and shipped the piece that stands on its own: a small open-source CLI (lock, check, diff) that records the exact bytes of a skill a human approved and tells you, file by file, when the installed copy drifts. Local, deterministic, no network. Ships with an Agent Skill, llms.txt, a CI example and a postmortem.",
    status: "live",
    stats: [
      { label: "Commands", value: "3" },
      { label: "Tests", value: "324" },
      { label: "Skills Indexed", value: "~200K" },
      { label: "Safety Scoring", value: "~94K skills" },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Supabase / pgvector",
      "OpenAI embeddings",
      "x402 (USDC on Base)",
      "MCP",
      "Vercel",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/sigildex/sigildex",
      live: "https://sigildex.ai",
      blog: "/blog/lessons-from-launching-sigildex",
    },
    screenshots: [
      "/images/projects/sigildex/hero.png",
      "/images/projects/sigildex/lock-check-diff.png",
      "/images/projects/sigildex/workflow.png",
    ],
    featured: true,
    order: 0,
  },
  {
    slug: "llm-fine-tuning-course",
    name: "LLM Fine-tuning Course",
    tagline:
      "Fine-tuning a 3B language model end-to-end on the HF Hub: SFT, DPO, and a vision-language sidetrack",
    description:
      "I worked through Hugging Face's Smol Fine-Tuning Language Models course and shipped a preference-aligned small model to the Hub. SmolLM3-3B-Base taken through SFT on 12k summarization examples, then DPO on 12k preference pairs, with DPO continuing to train the same LoRA rather than starting fresh (and the pre-DPO state frozen as the reference policy). A SmolVLM2-2.2B ChartQA adapter sits alongside as a vision-language sidetrack, where LoRA adapts the LLM while the SigLIP vision encoder stays frozen. Four LoRA adapters published, all reproducible from the public code.",
    status: "live",
    stats: [
      { label: "Base Model", value: "SmolLM3-3B" },
      { label: "Methods", value: "SFT + DPO" },
      { label: "Adapters Shipped", value: "4" },
      { label: "Total Compute", value: "~$12" },
    ],
    techStack: [
      "PyTorch",
      "Hugging Face TRL",
      "PEFT (LoRA)",
      "HF Jobs (A100/A10G)",
      "Python 3.12",
      "uv",
      "Trackio",
    ],
    links: {
      github: "https://github.com/jonathanavni/hf-smol-course",
      live: "https://huggingface.co/tuggspeedman-ai/SmolLM3-3B-summarize-dpo-lora",
    },
    screenshots: [
      "/images/projects/llm-fine-tuning-course/model-card.png",
      "/images/projects/llm-fine-tuning-course/training-run.png",
      "/images/projects/llm-fine-tuning-course/training-run-2.png",
      "/images/projects/llm-fine-tuning-course/code-snippet.png",
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "deep-research-agent",
    name: "Deep Research Agent",
    tagline:
      "An agentic research system with planning, sub-agent delegation, and human-in-the-loop approval",
    description:
      "A deep research agent that takes a question, breaks it into a research plan, waits for human approval, then hands research tasks to isolated sub-agents that search the web and synthesize findings. Uses file-based context offloading instead of context stuffing, and runs Gemma 4 locally via Ollama or any cloud LLM.",
    status: "live",
    stats: [
      { label: "Framework", value: "LangGraph" },
      { label: "Local Model", value: "Gemma 4 27B" },
      { label: "Test Coverage", value: "52 tests" },
      { label: "Language", value: "Python" },
    ],
    techStack: [
      "LangGraph",
      "LangChain",
      "Gemma 4",
      "Ollama",
      "Tavily API",
      "Next.js",
      "Python 3.12",
      "pytest",
    ],
    links: {
      github: "https://github.com/jonathanavni/deep-research-agent",
    },
    screenshots: [
      "/images/projects/deep-research-agent/HITL_approval.png",
      "/images/projects/deep-research-agent/tasks_running.png",
      "/images/projects/deep-research-agent/langsmith_trace2.png",
      "/images/projects/deep-research-agent/research_results.png",
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "tinychat",
    name: "TinyChat",
    tagline: "A 561M-parameter LLM trained from scratch for ~$95",
    description:
      "A language model built from scratch: custom BPE tokenizer, GPT architecture with RoPE and Multi-Query Attention, trained on ~38B tokens from FineWeb-EDU, then fine-tuned for conversation. Deployed on Modal serverless GPU with a Next.js frontend.",
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
      github: "https://github.com/jonathanavni/tinychat",
      live: "https://tinychat-two.vercel.app",
    },
    screenshots: [
      "/images/projects/tinychat/tinychat-chat-ui.png",
      "/images/projects/tinychat/tinychat-training-run.png",
      "/images/projects/tinychat/tinychat-wandb.png",
    ],
    featured: true,
    order: 5,
  },
  {
    slug: "kuchiclaw",
    name: "KuchiClaw",
    tagline:
      "A minimal AI agent framework: ephemeral containers, living file memory, filesystem IPC",
    description:
      "A personal AI agent that runs 24/7 on a VPS, talks through Telegram, manages its own memory, sends emails, and runs scheduled tasks autonomously. Built on the Claude Agent SDK with ephemeral Docker containers, living markdown files for memory, filesystem IPC, and a two-tier skills system (shell scripts + MCP).",
    status: "live",
    stats: [
      { label: "Lines of Code", value: "~2,000" },
      { label: "Source Files", value: "15" },
      { label: "Languages", value: "TypeScript" },
      { label: "Runtime", value: "Docker" },
    ],
    techStack: [
      "Claude Agent SDK",
      "TypeScript",
      "Docker",
      "Telegram Bot API",
      "SQLite",
      "MCP",
    ],
    links: {
      github: "https://github.com/jonathanavni/kuchiclaw",
      blog: "/blog/building-ai-agent-from-scratch",
    },
    screenshots: ["/images/projects/kuchiclaw/kuchiclaw-screenshot.png"],
    featured: true,
    order: 3,
  },
  {
    slug: "tinybrain",
    name: "TinyBrain",
    tagline: "An AI that earns and spends money autonomously via x402",
    description:
      "An inference service built on top of TinyChat that charges $0.01/query via the x402 payment protocol. Routes complex queries to DeepSeek R1 for ~$0.001, pocketing the difference. Includes complexity classification, a \"bar tab\" payment mode with stateless HMAC-signed sessions, and wallet integration on Base mainnet.",
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
      github: "https://github.com/jonathanavni/tinybrain",
      live: "https://tinybrain.vercel.app",
    },
    screenshots: [
      "/images/projects/tinybrain/tinybrain-screenshot-1.png",
      "/images/projects/tinybrain/tinybrain-screenshot-2.png",
      "/images/projects/tinybrain/tinybrain-screenshot-3.png",
      "/images/projects/tinybrain/tinybrain-screenshot-4.png",
    ],
    featured: true,
    order: 4,
  },
  {
    slug: "talk2docs",
    name: "Talk2Docs",
    tagline:
      "A full-stack RAG platform for chatting with PDFs, URLs, and podcasts",
    description:
      "A RAG platform for chatting with your documents: custom chunking, hybrid retrieval, query classification, multi-document synthesis, and citation validation. Built with Next.js, Supabase, Stripe, and Clerk, deployed on Vercel and Railway.",
    status: "sunset",
    stats: [
      { label: "React Components", value: "105" },
      { label: "API Endpoints", value: "38" },
      { label: "Database Tables", value: "16" },
      { label: "Server Actions", value: "200+" },
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
    ],
    featured: true,
    order: 7,
  },
  {
    slug: "pagepiper",
    name: "PagePiper",
    tagline: "Chrome extension that converts web pages to clean markdown",
    description:
      "A Chrome extension that clips web pages or selections to clean markdown and copies to clipboard. Uses Mozilla's Readability.js for content extraction and Turndown.js for HTML-to-markdown conversion. Supports keyboard shortcuts, context menus, preview before copy, and automatic cleanup of ads and trackers.",
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
      github: "https://github.com/jonathanavni/pagepiper",
      live: "https://chromewebstore.google.com/detail/PagePiper/bhjfdfjpbchjnjdpfjdjdnjjaoloehlp",
    },
    screenshots: [
      "/images/projects/pagepiper/screenshot-1-store.png",
      "/images/projects/pagepiper/screenshot-2-store.png",
      "/images/projects/pagepiper/screenshot-3-store.png",
    ],
    featured: false,
    order: 6,
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
