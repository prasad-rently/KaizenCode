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

## Round 2 additions (delivery, data & scale)

The first six Mastery modules covered the "run it well" concerns. Round 2 added
five more that surfaced from the same gap analysis, all shipped and runnable:

- **The Forge** 🔥 — CI/CD: blue-green & canary deploys, feature flags, artifacts,
  supply-chain security (SBOM, signing).
- **The Streaming Mind** 🌊 — event-driven & real-time: WebSockets/SSE, event
  sourcing, CQRS, delivery guarantees & idempotency.
- **The Ledger** 📒 — data engineering: OLTP vs OLAP, ETL/ELT, warehouses/lakes,
  star schemas, batch vs streaming.
- **The Edge** ⚡ — performance: latency budgets, the caching hierarchy, Core Web
  Vitals, edge compute.
- **The Wallet** 💰 — cloud cost engineering: on-demand/reserved/spot, rightsizing,
  serverless break-even, build-vs-buy.

## Round 3 additions (AI + how things really work)

A second-order gap analysis: the roadmap taught how to *build and operate*
systems, but not the **timely skill of the moment** (LLM apps) nor the **depth**
of how the primitives underneath actually work. Five new modules close that —
all with inline runnable code:

| Module | Catchy name | Why it's new / distinct | Runnable? |
|--------|-------------|-------------------------|-----------|
| AI/LLM apps | **The Oracle** 🔮 | The topic of the day. Nothing else covers tokens, embeddings, RAG, prompting, agents/tool-use | ✅ JS |
| Concurrency | **The Juggler** 🤹 | Event loop, parallel vs sequential, semaphores, race conditions, debounce/throttle — orthogonal to all prior modules | ✅ JS |
| Resilience | **The Bulwark** 🛡️ | Timeouts, retry+backoff+jitter, circuit breaker, bulkheads, graceful degradation, chaos | ✅ JS |
| DB internals | **The Engine Room** ⚙️ | *How* Phase 2's database works: B-tree indexes, WAL, ACID, isolation anomalies, MVCC, pooling | ✅ JS |
| Systems algorithms | **The Foundry** 🧰 | The structures behind caches/limiters/sharding: LRU, Bloom filter, consistent hashing, sliding window, HyperLogLog | ✅ JS |

### Why these names

- **The Oracle** — an oracle answers questions, sometimes cryptically (hello,
  hallucinations); you learn to ground it (RAG) and constrain it (structured output).
- **The Juggler** — one thread, many tasks in the air at once.
- **The Bulwark** — the defensive wall that holds when dependencies fall.
- **The Engine Room** — below deck, where the database machinery actually turns.
- **The Foundry** — where you forge the core data structures by hand.

### Design note

The Oracle's API example uses the **Claude Messages API** with a current model id
(`claude-sonnet-5`) and keeps the key server-side (cross-links **The Vault**). Its
"ship responsibly" guidance links to **The Bulwark** (timeouts/retries) and **The
Watchtower** (logging for eval) — the Mastery Track is increasingly a web of
cross-references, not a list.

## Considered but deferred (future rounds)

Still-unbuilt candidates, for when the track grows again:

- **The Cartographer** — domain-driven design: bounded contexts, aggregates,
  hexagonal/clean architecture, ubiquitous language.
- **The Switchboard** — networking internals: DNS, TLS handshake, TCP vs UDP,
  HTTP/2 & /3, load-balancing algorithms.
- **The Gatekeeper** — deep auth: OAuth2/OIDC flows, PKCE, sessions vs tokens,
  refresh rotation, SSO (extends The Vault without overlapping it).
- **The Green Thread** — sustainability/efficiency: carbon-aware scheduling,
  energy-per-request, efficient runtimes.

## Recommendation

Start the Mastery Track with **The Safety Net** (testing) and **The Watchtower**
(observability) — they pay off immediately on the projects built in Phases 1–4.
Then **The Vault** before anything goes public. **The Compass** is the bridge into
the leadership half of "Mobile Engineer → CTO".

For the deeper/newer set: do **The Juggler** and **The Engine Room** right after
Phases 1–2 (they explain *why* your code and queries behave as they do), reach for
**The Bulwark** the moment you have more than one service, and treat **The Oracle**
as the highest-leverage "today" skill — it composes with everything else you've
built. **The Foundry** is the reference you'll open during system-design prep.
