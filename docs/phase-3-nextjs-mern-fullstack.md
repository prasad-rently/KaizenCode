# Phase 3 — Full Stack: Next.js & MERN

**Weeks 9–12** · `phase3_nextjs_mern_fullstack.html`

> React Native to React web is a small step. Full-stack is one more.

## What you'll learn

- **React for web** — same hooks, same component model; only the primitives
  change (`<View>` → `<div>`, `StyleSheet` → Tailwind/CSS).
- **Next.js** — file-based routing (like Expo Router), the `app/` directory,
  `page.tsx`, dynamic `[id]` segments.
- **Rendering modes:**
  - **CSR** — client-side; empty HTML shell, React hydrates in the browser.
    Good for dashboards and auth-gated pages.
  - **SSG** — static generation at build time; fastest, CDN-cacheable. Blogs,
    docs, marketing.
  - **SSR** — server-rendered per request; fresh data + SEO. Product pages, feeds.
- **API Routes** — backend endpoints inside the same Next.js project
  (`app/api/users/route.ts`).
- **MERN** — MongoDB + Express + React + Node; one language end-to-end.
- **Environment variables** — `.env.local`; `NEXT_PUBLIC_*` (browser-safe) vs
  private server-only vars.
- **Deployment** — Vercel for Next.js (auto-deploy from GitHub), Render for
  Express backends, MongoDB Atlas for the cloud DB.

## Mobile analogies

- **Next.js** ≈ Expo — a bare runtime grown into a full framework.
- **API Routes** ≈ a mini Express server baked into your Expo project.
- **`fetch()`** is identical to React Native — zero learning curve.

## Mini project

A personal link manager: add URL + title, list all links, delete a link.
Stack: Next.js + MongoDB Atlas + Vercel — your first end-to-end deployed app.

## Self-check

- For an SEO-critical product page with fresh data, which rendering mode — and why?
- Why must server secrets never use the `NEXT_PUBLIC_` prefix?
- What's the difference between SSG and SSR at request time?
