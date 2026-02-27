# jonathanavni.com — Personal Website

A premium personal website for Jonathan Avni, built with Next.js 15, Tailwind CSS v4, and Framer Motion. Deployed on Vercel.

## Task Management

- Before implementation, write a plan to `tasks/todo.md` with checkable items
- Check in with the user before starting implementation
- Mark items complete as you go
- Add a review section to `tasks/todo.md` when done

## Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write a rule that prevents the same mistake recurring
- Review `tasks/lessons.md` at the start of each session

## Workflow

- Enter plan mode for any non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan — don't keep pushing
- Use subagents to keep the main context window clean; offload research and parallel analysis
- Never mark a task complete without proving it works (run tests, check logs)
- Give Claude a verification feedback loop where possible (test suite, browser, bash command) — this 2-3x's output quality

## Core Principles

- **Simplicity first** — make every change as simple as possible, minimal code impact
- **No laziness** — find root causes, no temporary fixes, senior developer standards
- **Minimal impact** — only touch what's necessary, avoid introducing bugs
- **No over-engineering** — don't add features, abstractions, or error handling beyond what's asked

## Design System

- **Aesthetic:** "Obsidian Forge" — near-black base + warm amber (#E8A849) accent
- **Typography:** Instrument Serif (headings), Space Grotesk (body), JetBrains Mono (code/stats)
- **Design Skill:** Follow [Claude Code Frontend Design Skill](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md) methodology
- **Never use:** Inter, Roboto, Arial, purple gradients, generic AI aesthetics

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4 + CSS custom properties (no component libraries)
- Framer Motion v11 for animations
- MDX for blog posts (`@next/mdx` + `gray-matter` + `rehype-pretty-code`)
- lucide-react for icons
- Fully static rendering (SSG), deployed on Vercel

## Project Structure

- `src/app/` — Next.js App Router pages
- `src/components/` — React components organized by section (layout, home, projects, blog, ui)
- `src/content/` — Blog MDX files and project data
- `src/lib/` — Utilities, MDX helpers, constants
- `src/types/` — TypeScript interfaces
- `public/images/projects/` — Project screenshots
- `assets/` — Source content (About-Jonathan.md, talk2docs draft, raw screenshots)
