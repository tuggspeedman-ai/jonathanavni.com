export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "sunset" | "in-progress";
  stats: { label: string; value: string }[];
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    blog?: string;
  };
  screenshots: string[];
  featured: boolean;
  order: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
}

export interface CareerEntry {
  period: string;
  company: string;
  role: string;
  highlight: string;
  isCurrent?: boolean;
}
