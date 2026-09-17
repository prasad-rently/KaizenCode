<div align="center">

# 改 KaizenCode

### From Backend Foundations to a CTO Mindset

A **24-week, 6-phase** self-study roadmap that takes a senior Mobile Engineer
(iOS / React Native, 14+ yrs) from building their first REST API to reasoning
about distributed systems like an architect.

Named for **Kaizen (改善)** — the Japanese philosophy of *continuous,
incremental improvement*.

[**🌐 Live site**](https://prasad-rently.github.io/KaizenCode/) · [Docs](docs/README.md) · [Roadmap summary](roadmap_summary_md.md)

</div>

---

## What is this?

KaizenCode is a collection of **self-contained, offline-friendly HTML learning
docs** — one per phase — plus a polished homepage that ties them together. Each
phase explains a backend/infra topic through the lens of someone who already
ships mobile apps, with runnable code and a weekly mini-project.

> One small concept a day. One mini-project a week. Compounding for six months.

## The six phases

| # | Phase | Weeks | Key tech | File |
|---|-------|-------|----------|------|
| 1 | HTTP & Backend Foundations | 1–4 | HTTP, Node.js, Express, JWT, REST | [`phase1_http_backend_foundations.html`](phase1_http_backend_foundations.html) |
| 2 | Databases | 5–8 | PostgreSQL, MongoDB, Prisma, SQL | [`phase2_databases.html`](phase2_databases.html) |
| 3 | Full Stack: Next.js & MERN | 9–12 | React, Next.js, MERN, Vercel | [`phase3_nextjs_mern_fullstack.html`](phase3_nextjs_mern_fullstack.html) |
| 4 | Docker & DevOps | 13–16 | Docker, Compose, GitHub Actions, Nginx | [`phase4_docker_devops.html`](phase4_docker_devops.html) |
| 5 | Cloud: AWS | 17–20 | EC2, S3, RDS, Lambda, IAM, VPC | [`phase5_aws_cloud.html`](phase5_aws_cloud.html) |
| 6 | Distributed Systems & Kafka | 21–24 | Kafka, Redis, Microservices, CAP | [`phase6_distributed_systems_kafka.html`](phase6_distributed_systems_kafka.html) |

**Daily commitment:** 1–2 hrs/day (30 min concept + 30 min hands-on code).

## How to use it

1. Open [`index.html`](index.html) in any browser — or visit the [live site](https://prasad-rently.github.io/KaizenCode/).
2. Work through the phases **in order** (1 → 6), or use them as a reference.
3. Every file supports **dark mode** automatically and has **zero dependencies**.
4. Build the mini-project at the end of each phase before moving on.

## Repository layout

```
KaizenCode/
├── index.html                              # homepage (links all phases)
├── phase1_http_backend_foundations.html
├── phase2_databases.html
├── phase3_nextjs_mern_fullstack.html
├── phase4_docker_devops.html
├── phase5_aws_cloud.html
├── phase6_distributed_systems_kafka.html
├── roadmap_summary_md.md                   # full text summary of the six phases
├── mastery_*.html                          # 28 Mastery Track modules (inline runnable code)
├── crypto_*.html                           # Cryptography topic — 9 generic, per-method explainers
├── aws_*.html                              # AWS deep-dive: from-scratch guide + cloud toolbox
├── mobile_*.html                           # Mobile Development field notes (5 articles)
├── leadership_*.html                       # Leadership track — 22 modules, Stages 2–5 of the CTO board
├── upcoming.html                           # the build-and-track board (32/32 modules shipped)
├── map.html                                # site map — every track & module at a glance
├── docs/                                   # markdown companion docs (+ generated .html siblings)
│   ├── README.md
│   ├── 00-project-setup.md
│   ├── expansion-analysis.md               # gap analysis behind the Mastery Track
│   ├── phase-1-http-backend-foundations.md
│   ├── … (phases 2–6)
│   └── future-roadmap.md
├── scripts/build-docs.mjs                  # optional generator: docs/*.md → styled .html
├── CLAUDE.md                               # guidance for Claude Code / contributors
└── README.md
```

### Six tracks

- **Core phases (1–6)** — the ordered "build & run a system" journey.
- **Mastery Track** — 28 cross-cutting modules (named, not numbered) covering
  observability, security, deep auth, testing, APIs, IaC, leadership, CI/CD,
  event-driven systems, data engineering, performance, cloud cost, AI/LLM apps,
  concurrency, resilience, database internals, systems algorithms, networking,
  Kubernetes, DDD, mobile-at-scale, platform engineering, multi-tenancy,
  disaster recovery, migrations, and privacy/compliance. Each has **inline
  runnable code** (copy + ▶ Run buttons) and stays zero-dependency.
- **Cryptography** — 9 **generic, project-independent** explainers, one method
  per file (`crypto_*.html`), reusing the Mastery module's runnable-code shell:
  ECDH, RSA, AES-GCM, hashing/HMAC, HKDF, digital signatures, Shamir's Secret
  Sharing, zero-knowledge proofs, and a TLS 1.3 handshake capstone.
- **AWS deep-dive** (`aws_*.html`) — a from-scratch guide to core AWS services
  with runnable labs and a 4-week planner, plus a decision-driven cloud toolbox.
- **Mobile Development** (`mobile_*.html`) — blog-style field notes on
  mobile-specific problems: silent push, offline-first sync, background
  execution limits, device fragmentation, and deep linking.
- **Leadership Track** (`leadership_*.html`) — 22 modules covering the people,
  delivery, business, and CTO-craft stages of [`upcoming.html`](upcoming.html),
  the build-and-track board (all 32 planned modules now shipped).

### Docs as HTML

The `docs/*.md` files are the source of truth and render on GitHub. Styled,
site-matching HTML versions are generated with a zero-dependency script:

```bash
node scripts/build-docs.mjs    # regenerate docs/*.html after editing any .md
```

## Hosting

This site is static HTML with no build step, so it's hosted **free on GitHub
Pages** straight from the `main` branch. See
[`docs/00-project-setup.md`](docs/00-project-setup.md) for the full setup and a
comparison of free hosting platforms (GitHub Pages, Cloudflare Pages, Netlify,
Vercel).

## Contributing / extending

Ideas for where this goes next live in
[`docs/future-roadmap.md`](docs/future-roadmap.md) — interactive code playgrounds,
progress tracking, quizzes, and more.

## License

[MIT](LICENSE) — learning material, free to use and adapt.
