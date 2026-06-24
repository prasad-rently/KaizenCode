# KaizenCode Learning Roadmap — Summary
> A 24-week self-study program for a 14+ year Mobile Engineer (iOS / React Native) transitioning toward a CTO / Engineering Manager role. All 6 phases are available as standalone HTML reference files.

---

## Overview

| # | Phase | Duration | Key Technologies |
|---|-------|----------|-----------------|
| 1 | HTTP & Backend Foundations | Weeks 1–4 | HTTP, Node.js, Express, JWT, REST |
| 2 | Databases | Weeks 5–8 | PostgreSQL, MongoDB, Prisma, SQL |
| 3 | Full Stack: Next.js & MERN | Weeks 9–12 | React, Next.js, MERN, Vercel |
| 4 | Docker & DevOps | Weeks 13–16 | Docker, Compose, GitHub Actions, Nginx |
| 5 | Cloud: AWS | Weeks 17–20 | EC2, S3, RDS, Lambda, IAM, VPC |
| 6 | Distributed Systems & Kafka | Weeks 21–24 | Kafka, Redis, Microservices, CAP |

**Daily commitment:** 1–2 hrs/day (30 min concept + 30 min hands-on code)

---

## Phase 1 — HTTP & Backend Foundations
**File:** `phase1_http_backend_foundations.html` · Weeks 1–4

The building block for everything else. You've consumed REST APIs for 14 years — this phase teaches you to build them.

### What you'll learn
- **HTTP protocol** — request/response cycle, methods (GET POST PUT PATCH DELETE), status codes (2xx / 4xx / 5xx), headers, and body anatomy
- **Node.js** — JavaScript running on the server; no browser, no UI, just logic and I/O
- **npm** — package management, `package.json`, `node_modules`, scripts
- **Express.js** — routing, middleware pipeline, request/response helpers
- **Middleware** — logging, authentication guards, error handlers
- **JWT Auth** — stateless token-based authentication; issue on login, verify on every request
- **REST API design** — nouns in URLs, correct HTTP verbs, versioning, nested resources

### Mini project
Build a full CRUD REST API for a `tasks` resource using Express + JWT auth. Test with Postman or curl.

---

## Phase 2 — Databases
**File:** `phase2_databases.html` · Weeks 5–8

Where your data lives permanently — queryable, relational, and built for scale.

### What you'll learn
- **SQL vs NoSQL** — when to use relational (transactions, relationships) vs document (flexible schema, high write volume)
- **PostgreSQL** — tables, columns, data types, `CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`
- **SQL queries** — `WHERE`, `ORDER BY`, `LIMIT OFFSET` (pagination), `GROUP BY`, `COUNT`
- **JOINs** — `INNER JOIN`, `LEFT JOIN`, foreign keys, `ON DELETE CASCADE`
- **Indexes** — why queries slow down at scale, how indexes work, which columns to index
- **MongoDB** — documents, collections, schema-free design, `find` / `create` / `findByIdAndUpdate`
- **Prisma ORM** — type-safe database access, `schema.prisma`, auto-generated client, `include` for joins
- **Migrations** — versioned schema changes, `prisma migrate dev`, keeping environments in sync

### Mobile analogies
- SQL = Core Data with a strict managed object model
- JOIN = Core Data relationship fetch (`user.posts`)
- Migrations = Core Data lightweight migration policies

### Mini project
Replace the in-memory array from Phase 1 with PostgreSQL via Prisma. Add a `posts` table with a foreign key to `users`.

---

## Phase 3 — Full Stack: Next.js & MERN
**File:** `phase3_nextjs_mern_fullstack.html` · Weeks 9–12

React Native to React web is a small step. Full-stack is one more.

### What you'll learn
- **React for web** — same hooks, same component model; only primitives change (`<View>` → `<div>`, `StyleSheet` → Tailwind/CSS)
- **Next.js** — file-based routing (same as Expo Router), `app/` directory, `page.tsx`, dynamic `[id]` segments
- **Rendering modes**
  - `CSR` — client-side rendering; empty HTML shell, React hydrates in browser (dashboards, auth-gated pages)
  - `SSG` — static generation at build time; fastest, CDN-cacheable (blogs, docs, marketing)
  - `SSR` — server-side rendering per request; fresh data + SEO (product pages, feeds)
- **API Routes** — backend endpoints inside the same Next.js project (`app/api/users/route.ts`)
- **MERN stack** — MongoDB + Express + React + Node; one language end-to-end
- **Environment variables** — `.env.local`, `NEXT_PUBLIC_*` (browser-safe) vs private server-only vars
- **Deployment** — Vercel for Next.js (auto-deploy from GitHub), Render for Express backends, MongoDB Atlas for cloud DB

### Mobile analogies
- Next.js = Expo (React Native bare → full framework)
- API Routes = a mini Express server baked into your Expo project
- `fetch()` calls are identical to React Native — zero learning curve

### Mini project
A personal link manager: add URL + title, list all links, delete a link. Stack: Next.js + MongoDB Atlas + Vercel.

---

## Phase 4 — Docker & DevOps
**File:** `phase4_docker_devops.html` · Weeks 13–16

Containerise your app, automate your pipeline, ship with confidence.

### What you'll learn
- **Docker** — containers vs VMs; why "works on my machine" is solved by packaging app + deps together
- **Dockerfile** — `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`; layer caching strategy
- **Docker commands** — `build`, `run`, `ps`, `logs`, `exec`, `stop`, `rm`, `system prune`
- **Docker Compose** — multi-container orchestration; one `docker-compose.yml` boots API + database + Redis together
- **CI/CD** — Continuous Integration (run tests on every push) + Continuous Deployment (auto-deploy on green)
- **GitHub Actions** — `.github/workflows/*.yml`; `on: push`, jobs, steps, `actions/checkout`, `setup-node`
- **Nginx** — reverse proxy in front of Node.js; handles SSL termination, forwards plain HTTP internally

### Mobile analogies
- Docker image = `.ipa` / `.apk` — app + runtime bundled, runs identically anywhere
- `docker-compose.yml` = `Podfile` / `Package.swift` for your entire runtime environment

### Mini project
Dockerise the Express API from Phase 1. Write a `docker-compose.yml` (API + PostgreSQL). Add a GitHub Actions CI workflow that runs tests on every push.

---

## Phase 5 — Cloud: AWS
**File:** `phase5_aws_cloud.html` · Weeks 17–20

The infrastructure layer every CTO must own.

### What you'll learn
- **Mental model** — regions, availability zones; renting infrastructure via API instead of owning hardware
- **EC2** — virtual machines; SSH access, AMIs, security groups, Elastic IPs, instance types (`t3.micro` → `m6i.large`)
- **S3** — object storage for files; buckets, keys, public URLs; never store uploads on EC2 disk
- **RDS** — managed PostgreSQL/MySQL; automated backups, multi-AZ failover, read replicas; alternatives: Supabase, PlanetScale
- **Lambda** — serverless functions triggered by HTTP, S3 events, schedules; pay per invocation; watch cold starts
- **IAM** — users, roles, policies; principle of least privilege; never hardcode access keys in application code
- **VPC** — public subnets (load balancer) vs private subnets (app servers + databases); RDS always in private subnet
- **CloudWatch** — logs, metrics, alarms; first stop when production breaks
- **Route 53** — DNS, domain registration, health checks, failover routing

### Mobile analogies
- AWS = iCloud for everything; consume infrastructure via API without managing hardware
- S3 = a global file server; store the URL in DB, serve files from S3 CDN

### Standard production architecture
```
Route 53 → CloudFront (CDN) → ALB → EC2 (private subnet) → RDS (private subnet)
                                                          → S3 (assets/uploads)
                                                          → CloudWatch (monitoring)
```

---

## Phase 6 — Distributed Systems & Kafka
**File:** `phase6_distributed_systems_kafka.html` · Weeks 21–24

How large-scale systems are really built. The CTO's mental model for architecture.

### What you'll learn
- **Scaling** — vertical (bigger server, ceiling exists) vs horizontal (more servers, requires coordination)
- **Message queues** — loose coupling via async messaging; producer drops event, consumer picks it up independently
- **Apache Kafka**
  - Topics, partitions, producers, consumers, consumer groups, brokers, offsets
  - Message retention (7-day default) enables replay — new services can consume historical events
  - Kafka vs SQS/RabbitMQ: Kafka retains; SQS deletes on consume
- **Redis** — in-memory store; cache-aside pattern, rate limiting, session storage, leaderboards (sorted sets), pub/sub; complements DB, never replaces it
- **Microservices vs Monolith** — start with a monolith; split only when you have a proven, specific scale or team ownership problem
- **CAP theorem** — Consistency vs Availability during network partition; PostgreSQL = CP; Cassandra/DynamoDB = AP
- **System design patterns** — load balancing, multi-layer caching (CDN → Redis → DB), rate limiting, circuit breaker, database sharding, event sourcing

### Mobile analogies
- Kafka = APNs at massive scale; fire-and-forget, consumer processes when ready, supports replay
- Message queue = the exact pattern behind every push notification you've ever implemented

### The CTO architecture lens (key questions)
1. Where is the actual bottleneck?
2. What happens when any single component goes down?
3. Can we replay events if a consumer fails mid-processing?
4. How do we trace a request across multiple services?
5. Are we solving a problem we actually have, or one we imagine at scale?
6. Could a well-indexed Postgres + Redis solve this instead of Kafka?
7. What's the operational burden on a small team?

> **Rule of three:** Add architectural complexity only after hitting the same limit three times.

---

## How to use these files

1. Open any HTML file directly in your browser — no server needed
2. All files support **dark mode** automatically
3. Each file is self-contained — no external dependencies
4. Read sequentially (Phase 1 → 6) or use as reference during Q&A

## Recommended learning rhythm

| Time | Activity |
|------|----------|
| 30 min | Read the phase section for the day |
| 30 min | Write the code example by hand (don't copy-paste) |
| End of week | Build the mini project |
| Ongoing | Keep a "how would I architect this?" journal |

## Files in this bundle

```
KaizenCode/
├── index.html                              # homepage
├── phase1_http_backend_foundations.html
├── phase2_databases.html
├── phase3_nextjs_mern_fullstack.html
├── phase4_docker_devops.html
├── phase5_aws_cloud.html
└── phase6_distributed_systems_kafka.html
```

---

*Generated as part of a personalised CTO upskilling program for a 14+ year Mobile Engineer.*
