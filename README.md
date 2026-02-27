# jonathanavni.com

Personal website for Jonathan Avni — Product Leader & AI Builder.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, CSS custom properties
- **Animation:** Framer Motion
- **Content:** MDX blog posts, structured project data
- **Deployment:** Vercel (fully static / SSG)

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/           # Pages (home, /projects, /blog)
  components/    # React components (layout, home, projects, blog, ui)
  content/       # Project data + blog MDX files
  lib/           # Utilities, constants, MDX helpers
  types/         # TypeScript interfaces
public/
  images/        # Project screenshots
```

## Built With

Built with [Claude Code](https://claude.ai/claude-code) as a pair programmer.
