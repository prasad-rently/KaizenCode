# Project Setup & Hosting

How KaizenCode is put together, and how it's published to the web for free.

## What was done

This repository started as a loose bundle of six standalone HTML learning files
plus a markdown summary. It was turned into a proper, hosted project:

1. **Renamed** the project from *KaizenCore* → **KaizenCode** (after *Kaizen*,
   改善 — continuous, incremental improvement).
2. **Built a homepage** (`index.html`) — a polished landing page that links every
   phase, explains the philosophy, shows the daily rhythm, and links the docs.
   Matches the phases' Apple-style design, accent purple, and automatic dark mode.
3. **Added project scaffolding** — `README.md`, `CLAUDE.md` (contributor/agent
   guidance), `.gitignore`, `LICENSE` (MIT).
4. **Wrote markdown docs** — this `docs/` folder: one note per phase plus this
   setup doc and a future-roadmap analysis.
5. **Published to GitHub** as a public repo and **hosted it free on GitHub Pages**.

## Architecture (deliberately boring)

- **Static, zero-dependency, no build step.** Every page is a single HTML file
  with inline CSS. Nothing to compile, install, or run.
- **Why:** it loads instantly, works offline, can't rot from dependency churn,
  and hosts free anywhere. For learning material, that durability matters more
  than tooling sophistication.

## Hosting: GitHub Pages

Because the site is pure static files, GitHub Pages is the simplest fit — it
serves files straight from the repo with zero config.

```bash
# One-time, after the repo exists:
# Settings → Pages → Source: "Deploy from a branch" → main / (root)
# Or via CLI:
gh api -X POST repos/<owner>/KaizenCode/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

Live URL: `https://<owner>.github.io/KaizenCode/`

Every push to `main` redeploys automatically in ~1 minute. No pipeline, no
secrets, no cost.

## Best free platforms for static pages — comparison

All four below are genuinely free for a project this size. Recommendation first:

| Platform | Best for | Free tier highlights | Trade-offs |
|----------|----------|----------------------|------------|
| **GitHub Pages** ⭐ | Docs/sites already on GitHub | Free, unlimited static sites, custom domain + free HTTPS, deploy on push | No server-side code; soft 100 GB/mo bandwidth; build only via Actions |
| **Cloudflare Pages** | Fastest global delivery | Unlimited bandwidth, huge CDN, custom domain, preview deploys | Slightly more setup than Pages |
| **Netlify** | Forms, redirects, build plugins | 100 GB/mo bandwidth, instant rollbacks, deploy previews | Build-minute limits if you add a build step |
| **Vercel** | Next.js / dynamic apps | Great DX, edge network, previews | Overkill for plain static; oriented around frameworks |

**Recommendation: GitHub Pages.** The content already lives on GitHub, there's no
build step, and "push to `main`" is the entire deploy process. If you later want
unlimited bandwidth or edge functions, **Cloudflare Pages** is the easiest
upgrade — point it at the same repo, no code changes.

## Custom domain (optional, later)

Any of the above support a free custom domain with auto HTTPS. For GitHub Pages:
add a `CNAME` file with your domain, then point a DNS `CNAME`/`A` record at
GitHub. You only pay for the domain itself (~$10/yr), never the hosting.
