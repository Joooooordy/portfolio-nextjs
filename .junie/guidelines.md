# Project Guidelines

Project: Portfolio website built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## 1) Project Overview
- Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, ESLint (eslint-config-next), Geist fonts.
- Purpose: Personal portfolio showcasing projects/skills with performant static and server-rendered pages.
- Notable folders/files:
  - app/ — Next.js App Router pages, layouts, and route segments (e.g., app/page.tsx, app/about/page.tsx, app/layout.tsx).
  - components/ — Reusable UI components (e.g., components/tech-card.tsx).
  - public/ — Static assets (e.g., public/logos/*.svg, public/fonts/geist/*).
  - data/ — Any data files used by the UI.
  - styles: Tailwind is configured via globals in app/globals.css; config in tailwind.config.js.
  - next.config.ts, tsconfig.json, postcss.config.mjs — Build and tooling configs.

## 2) Node/Tooling Requirements
- Node.js: 18.18+ (Node 20 LTS recommended).
- Package manager: npm (package-lock.json is present).
- IMPORTANT: Under no circumstances should npm (or any package manager) be executed in this environment by Junie. All npm commands mentioned below are for maintainers to run locally on their own machines only.

## 3) Common Commands
- Reference only: Do NOT run these commands in this environment; maintainers should run them locally.
- Development: npm run dev
- Build: npm run build
- Start (serve production build): npm run start
- Lint: npm run lint

## 4) Running and Building
- These steps are for maintainers on their local machines. Do NOT run npm in this environment.
- Local development: Run "npm install" once, then "npm run dev" and open the shown localhost URL.
- Production build: Run "npm run build". Then "npm run start" to serve the optimized build.

## 5) Tests
- There are currently no automated tests in this repository. If you add tests in the future, document how to run them here.

## 6) What Junie Should Do Before Submitting Changes
- Do NOT run npm (or any package manager) or any build/lint commands in this environment.
- If source code or config files changed, clearly note in the submission that maintainers should run locally:
  - npm install (if dependencies changed)
  - npm run build — verify the build completes without errors
  - npm run lint — fix any reported issues
- If only content or markdown changed, a full build is optional but recommended for maintainers if changes may affect the app output.

## 7) Code Style & Conventions
- TypeScript preferred for components/pages.
- Follow ESLint (eslint-config-next). Prefer functional React components with explicit props typing.
- Styling: Tailwind CSS utility-first classes in JSX and app/globals.css for base styles.
- Assets: Place images under public/ (e.g., public/logos/) and fonts under public/fonts/.
- Keep components small, typed, and accessible (semantic HTML, alt text for images/svg roles as needed).

## 8) Project Structure (quick reference)
- app/
  - layout.tsx — Root layout, fonts, metadata.
  - page.tsx — Home page.
  - about/page.tsx — About page.
  - globals.css — Global styles (Tailwind base/includes).
- components/
  - tech-card.tsx — Example reusable component.
- public/
  - logos/*.svg — Logos for technologies.
  - fonts/geist/* — Geist font files.
- Config: next.config.ts, tailwind.config.js, tsconfig.json, eslint.config.mjs, postcss.config.mjs.

## 9) Notes
- When adding new routes under app/, prefer server components by default and mark client components with "use client" only when necessary.
- Keep imports path-alias friendly if you add tsconfig paths later; currently default relative imports are used.
