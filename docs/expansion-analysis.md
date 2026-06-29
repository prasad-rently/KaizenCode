# Expansion Analysis — New Topics for the Roadmap

A deeper look at what the six core phases *don't* yet cover, and the new
self-contained modules added to fill those gaps. New concepts live in **new
modules** — the original Phase 1–6 lessons are untouched.

## Method

The core six phases build a vertical slice: **request → data → app → ship → host
→ scale**. That's the "how do I build and run a system" path. Mapping it against
what a modern senior engineer / engineering leader is actually expected to own
surfaces six recurring gaps that cut *across* every phase rather than sitting
inside one. Those cross-cutting concerns become the **Mastery Track**.

## Gap analysis

| Concern | Covered in core six? | Why it matters |
|---------|----------------------|----------------|
| Observability (logs, metrics, traces, SLOs) | Only CloudWatch mention | You can't operate what you can't see; #1 skill when prod breaks |
| Security & auth hardening | JWT basics only | One breach outweighs a year of features; expected of any senior+ |
| Testing & quality | Not covered | The difference between "ships" and "ships safely"; enables refactoring |
| API design beyond REST (GraphQL, gateways) | REST only | Real systems expose GraphQL, gRPC, gateways, versioning, pagination |
| Infrastructure as Code | Manual AWS clicks | Reproducible, reviewable infra; clicking the console doesn't scale |
| Engineering leadership | Architecture lens only | The actual "→ CTO" half: people, process, strategy, decisions |

## The Mastery Track (new modules)

Named, not numbered — pick any order based on what you need next.

| Module | Catchy name | Covers | Runnable code? |
|--------|-------------|--------|----------------|
| Observability | **The Watchtower** | Structured logging, metrics, the RED/USE method, percentiles, distributed tracing, SLOs/error budgets | ✅ JS |
| Security | **The Vault** | OWASP Top 10, password hashing, JWT internals, timing-safe compares, secrets management, least privilege | ✅ JS |
| Testing | **The Safety Net** | Test pyramid, unit/integration/e2e, TDD, mocking, a tiny assert runner you build yourself | ✅ JS |
| API design | **The Gateway** | REST vs GraphQL vs gRPC, resolvers, N+1, cursor pagination, rate limiting, API gateways, versioning | ✅ JS |
| IaC | **The Blueprint** | Declarative vs imperative infra, Terraform, state, drift, modules, plan/apply, GitOps | Copy-only |
| Leadership | **The Compass** | System-design interviews, RFCs/ADRs, team topologies, on-call & incidents, build-vs-buy, tech strategy | Copy-only |

### Why these names

The originals are "Phase N" because they're an ordered, sequential journey. The
Mastery Track is a **toolbox** — you reach for the right tool when you hit the
problem — so each gets an evocative, memorable handle:

- **The Watchtower** — you watch the system from above.
- **The Vault** — where secrets and trust are kept.
- **The Safety Net** — what catches you when you change code.
- **The Gateway** — the front door to your services.
- **The Blueprint** — infrastructure defined as a drawing you can reproduce.
- **The Compass** — direction for people and decisions, not code.

## Interactive code

Every module ships with the new **runnable snippet** component:

- **Copy** button on every code block (one-click to clipboard).
- **▶ Run** button on JavaScript snippets — executes in a sandboxed async
  function with a captured `console`, printing output inline under the snippet.
- Pure vanilla JS, inline, zero dependencies — keeps the offline-first promise.

Non-JS snippets (Terraform, SQL, shell) get a Copy button only, since they can't
run in a browser.

## Considered but deferred

Strong candidates kept out of this batch to avoid bloat — good "next" additions:

- **The Forge** — advanced CI/CD: blue-green & canary deploys, feature flags,
  artifact registries, supply-chain security (SBOM, signing).
- **The Streaming Mind** — deeper event-driven & real-time: WebSockets, SSE,
  CQRS, event sourcing, exactly-once semantics.
- **The Ledger** — data engineering: ETL/ELT, warehouses, analytics, OLAP vs
  OLTP, data modelling.
- **The Edge** — performance & frontend infra: CDNs, caching layers, Core Web
  Vitals, edge functions.
- **The Wallet** — cloud cost engineering: FinOps, rightsizing, spot instances,
  build-vs-buy economics.

## Recommendation

Start the Mastery Track with **The Safety Net** (testing) and **The Watchtower**
(observability) — they pay off immediately on the projects built in Phases 1–4.
Then **The Vault** before anything goes public. **The Compass** is the bridge into
the leadership half of "Mobile Engineer → CTO".
