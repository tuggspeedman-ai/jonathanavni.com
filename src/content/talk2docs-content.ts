export const talk2docsOverview = `A Next.js app (TypeScript + React) using PostgreSQL (via Supabase) for database operations and vector search, Stripe for payments, and Clerk for auth. Infra runs on Vercel and Railway. Upload a document — a PDF, a URL, a podcast episode — and Talk2Docs makes it conversational. Ask questions and get answers grounded in your actual content, with clickable citations that navigate to the source. Under the hood: a full RAG pipeline built from scratch, including agentic RAG for multi-document chats.`;

export const talk2docsFeatures = [
  {
    title: "Multi-format Ingestion",
    description:
      "PDFs (with OCR for scanned documents), web URLs, pasted text, and podcast episodes via transcript import.",
  },
  {
    title: "AI Chat with Citations",
    description:
      "Every answer is grounded in retrieved content, with citations you can click to jump to the exact source passage.",
  },
  {
    title: "Projects",
    description:
      "Group multiple documents and chat across all of them — the system intelligently routes queries to the right documents first.",
  },
  {
    title: "Custom RAG Pipeline",
    description:
      "Seven-stage pipeline: query classification, rewriting, hybrid retrieval, two-tier routing, reranking, prompt composition, and citation validation.",
  },
];

export const talk2docsArchitecture = [
  {
    stage: "1. Query Classification",
    detail:
      "Categorizes queries into 10 types (factual, comparison, explanation, etc.), each with a different retrieval strategy.",
  },
  {
    stage: "2. Query Rewriting",
    detail:
      "Three strategies (preserve, expand, aggressive-expand) based on classification. Resolves pronouns using chat history.",
  },
  {
    stage: "3. Hybrid Retrieval",
    detail:
      "Vector search (OpenAI embeddings, pgvector) + lexical search (PostgreSQL full-text) with per-document-type weighting.",
  },
  {
    stage: "4. Two-Tier Project Routing",
    detail:
      "For multi-document queries: first score documents by metadata, select top 5, then retrieve chunks within those documents.",
  },
  {
    stage: "5. Reranking with Diversity",
    detail:
      "Cohere rerank model + Jaccard similarity filter to prevent duplicate information in context.",
  },
  {
    stage: "6. Prompt Composition",
    detail:
      "19-file modular library assembling prompts from 4 dimensions: base instructions, query type, document type, and chat mode.",
  },
  {
    stage: "7. Citation Validation",
    detail:
      "Post-response validator checks every citation against retrieved chunks. Retries with stricter instructions if invalid.",
  },
];

export const talk2docsStats = [
  { label: "Files", value: "363" },
  { label: "React components", value: "105" },
  { label: "API endpoints", value: "38" },
  { label: "Database tables", value: "16" },
  { label: "Server actions", value: "200+" },
  { label: "Background workers", value: "3" },
  { label: "Prompt templates", value: "19" },
  { label: "RAG query types", value: "10" },
];

export const talk2docsLearnings = [
  {
    title: "Built to learn",
    detail:
      "I was learning about RAG at the time, and my initial motivation was to build a retrieval system from scratch — no LangChain, no LlamaIndex — to really understand every layer of the pipeline.",
  },
  {
    title: "My first full product built with AI",
    detail:
      "This was the first end-to-end product I built using AI coding tools. I started with Cursor and tried different models. While building Talk2Docs, both Claude Code and Codex came out — I tried both and landed on Claude Code, which is my primary agentic coding tool today.",
  },
  {
    title: "AI accelerates the 80%, you still own the 20%",
    detail:
      "AI tools could scaffold components and implement API routes at remarkable speed. But RAG tuning, debugging production OCR failures, and designing the two-tier retrieval system required deep thinking that no tool could shortcut.",
  },
  {
    title: "Shipped, learned, moved on",
    detail:
      "Talk2Docs was live for a few months with dozens of users. I learned a lot from building and operating it — then wound it down to focus on what came next.",
  },
];
