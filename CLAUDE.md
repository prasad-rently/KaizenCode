# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## What this project is

**KaizenCode** is a static, dependency-free learning site: a homepage
(`index.html`) plus six self-contained HTML reference docs, one per phase of a
24-week "Mobile Engineer → CTO" backend/infra roadmap. There is **no build step,
no framework, no package.json, no server** — every file opens directly in a
browser. It is hosted free on GitHub Pages from `main`.

The name comes from **Kaizen (改善)**, the Japanese philosophy of continuous,
incremental improvement.

## Project structure

- `index.html` — the homepage; links to all six phases, the Mastery Track, the
  Cryptography topic, and the docs.
- `phaseN_*.html` — six standalone core learning docs (phases 1–6).
- `mastery_*.html` — seventeen standalone Mastery Track modules (named, not numbered)
  covering cross-cutting topics. These add an **inline runnable-code component**:
  every `<pre>` is wrapped in `.snippet` with a Copy button, and JS snippets get a
  ▶ Run button driven by a small vanilla-JS runner inlined at the bottom of each
  file (sandboxed `new Function` + captured `console`). Keep it dependency-free.
- `crypto_*.html` — the **Cryptography topic**: a growing series of standalone,
  *generic* (project-independent) explainers, one cryptographic method per file
  (e.g. `crypto_ecdh_key_agreement.html`). They reuse the exact Mastery module
  shell — same CSS, `.snippet` Copy/▶ Run component, and highlight classes — but
  are method-named, not whimsically named, and stay framework-free. Add new
  methods (RSA, AES-GCM, hashing/HMAC, signatures) as new `crypto_*.html` files
  and a card in the `#crypto` section of `index.html`.
- `upcoming.html` — the **build-and-track board**: 32 planned modules across 5
  stages (weeks 25–96, the "Road to CTO" second half). Status chips cycle
  Planned→Building→Shipped and persist in `localStorage`; a module can be marked
  shipped-by-default with `data-default="shipped"` on its `.module` (plus an
  "Open shipped module →" link). When a board module ships, build the file, flip
  it here, and add its homepage card.
- `leadership_*.html` — the **Leadership track** (Stage 2+ board modules that are
  people/business, not technical): same shell but **scenario panels** and
  builders instead of `▶ Run` code (e.g. `leadership_first_follower.html`).
  Cards go in the `#leadership` section. (Technical board modules like deep auth
  instead join the Mastery Track as `mastery_*.html`.)
- `roadmap_summary_md.md` — full prose summary of all phases (source of truth for content).
- `docs/` — markdown companion docs (per phase + meta). The `.md` files are the
  source of truth; `docs/*.html` and `roadmap_summary.html` are **generated** from
  them by `scripts/build-docs.mjs` (run `node scripts/build-docs.mjs` after editing
  any doc). Don't hand-edit the generated `.html` docs.

## Conventions (match these when editing)

- **Single-file, inline everything.** Each HTML file has its CSS in a `<style>`
  block and no external requests. Keep it that way — offline use is a feature.
- **Design system.** Apple-style typography (`-apple-system` stack), accent
  purple `#5350B4` (light) / `#8f8cff` (dark), rounded cards, generous spacing.
- **Dark mode is mandatory.** Every color must have a
  `@media(prefers-color-scheme:dark)` counterpart. `index.html` uses CSS custom
  properties (`--bg`, `--fg`, `--accent`, …); the phase files use inline media
  queries. Follow whichever file you're in.
- **Mobile-engineer analogies.** Content explains backend concepts by analogy to
  iOS / React Native (URLSession, Core Data, APNs, Podfile, etc.). Preserve this
  voice.
- **Code samples** use the existing syntax-highlight span classes
  (`.kw .str .num .cm .fn .tn`). Reuse them; don't introduce a JS highlighter.

## Naming

The project is **KaizenCode** (one word). Do not reintroduce the old name
"KaizenCore" — if you see it, it's a leftover to fix. (The local folder may still
be named `KaizenCore`; that's cosmetic and separate from the project name.)

## Testing changes

There are no automated tests. To verify a change: open the affected HTML file in
a browser, toggle OS light/dark mode, and check at mobile + desktop widths. The
homepage links must all resolve to files that exist in the repo root or `docs/`.

## Deploying

Push to `main`. GitHub Pages (configured to serve `/` from `main`) redeploys
automatically within ~1 minute. No other steps.
