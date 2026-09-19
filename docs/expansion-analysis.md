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

## Round 4 additions (RPC and consensus)

A fresh gap analysis in September 2026 surfaced two foundational
distributed-systems topics nothing in the curriculum touched directly:

- **The Courier** 📦 — RPC frameworks as a category, not just gRPC: IDL/codegen,
  marshalling, gRPC vs Thrift vs JSON-RPC vs Cap'n Proto, where RPC quietly
  runs day-to-day life (Kubernetes' CRI, etcd, blockchain wallets via
  JSON-RPC), and its real vulnerabilities — reflection-service leakage, the
  HTTP/2 Rapid Reset DDoS technique (CVE-2023-44487), the "trusted internal
  network" fallacy.
- **The Quorum** 🗳️ — distributed consensus (Raft &amp; Paxos), written to be
  followable by a non-engineer: majority rule and why any two majorities
  must overlap, Raft's leader-election and log-replication mechanics with
  runnable simulations, a real-world "cut undersea cable" split-brain
  scenario, and where it actually runs today (etcd, Kafka's KRaft, CockroachDB,
  Google Spanner/Chubby on Paxos).

Both are referenced from elsewhere in the curriculum already — The Courier's
gRPC section is the transport The Quorum's own leader-election messages ride
on, and the "clocks lie" warning in the offline-first-sync mobile article is
exactly the problem majority rule sidesteps.

## Round 5 addition (the trilogy's third leg)

- **The Metronome** ⏱️ — time and clocks in distributed systems: why wall
  clocks can't be trusted to agree, Lamport clocks (order via causality, not
  timestamps) and vector clocks (detecting genuine concurrency) with runnable
  simulations, a Git-commit-graph analogy anyone already understands, and
  where real systems land — Dynamo/Riak's version vectors, Spanner's TrueTime,
  and how Raft (The Quorum) sidesteps the problem entirely by never needing
  synchronized clocks across nodes.

This continues the RPC → Consensus → Time arc started with The Courier:
foundational distributed-systems ideas, each explicitly a sequel to the last,
each written to be followable without a CS background first.

## Round 6 addition (resolving, not just detecting)

- **The Loom** 🧵 — CRDTs (Conflict-free Replicated Data Types): picks up
  exactly where The Metronome's vector clocks left off — detecting a conflict
  isn't resolving it. Covers G-Counters and OR-Sets with runnable merge
  simulations, the classic Amazon Dynamo shopping-cart problem, why
  collaborative text (Figma, Notion, Yjs/Automerge) needs a fancier CRDT
  design, and directly resolves the "CRDTs" row in the offline-first-sync
  mobile article's conflict-resolution table, which had named the strategy
  without ever explaining the mechanism.

RPC (The Courier) → Consensus (The Quorum) → Time (The Metronome) → Conflict
resolution (The Loom): four modules that each explicitly build on the one
before it, turning the Mastery Track's distributed-systems corner into a
connected arc rather than a flat list.

## Round 7 addition (sustainability)

- **The Green Thread** ♻️ — sustainable &amp; efficient computing: carbon-aware
  scheduling with a runnable duck-curve simulation, why an idle server still
  burns real power, algorithmic efficiency reframed as an energy lever (ties
  to The Foundry), and the honest limits of carbon accounting. Cross-links
  The Wallet (cost and energy efficiency point the same direction) and The
  Foundry (an O(n²) algorithm is measurably more electricity, not just more
  time, at scale).

## Round 8 addition (closing the retrieval gap)

- **The Haystack** 🌾 — search &amp; vector retrieval internals: inverted
  indexes and TF-IDF/BM25 ranking with runnable demos, why brute-force
  nearest-neighbor search doesn't scale, and HNSW (the graph-based ANN
  algorithm behind Pinecone/Weaviate/Milvus/pgvector) explained as a
  highways-then-local-streets search. Directly explains the mechanism The
  Oracle's RAG coverage introduced but never opened up — embeddings and
  "retrieval" were named there; this is how retrieval actually finds
  anything.

## Round 9 addition (a genuine zero-coverage gap)

- **The Ramp** ♿ — accessibility engineering: zero coverage anywhere in the
  curriculum before this. Semantic HTML vs. ARIA (with a runnable simulation
  of what a screen reader actually perceives), keyboard-navigation failure
  modes (runnable focus-order demo), and real WCAG contrast-ratio math
  (runnable, using the actual relative-luminance formula) rather than
  eyeballing it. Grounded in the curb-cut effect and the real legal stakes
  (ADA lawsuits, WCAG as the standard courts reference, the EU Accessibility
  Act). Cross-links The Registrar (same engineering-vs-checkbox argument,
  applied to "we're accessible" instead of "we're GDPR compliant") and the
  Device Fragmentation mobile article (touch-target sizing).

## Round 10 addition (a new execution model)

- **The Kiln** 🧱 — WebAssembly: compiles and runs an actual, hand-verified
  .wasm binary module live in the page — not a JS simulation, a real
  `WebAssembly.instantiate()` call on real bytes (verified in Node before
  publishing, then re-verified live in a browser tab). Covers why Wasm is
  fast, its sandbox/linear-memory security model, real production use
  (Figma, AutoCAD Web, Squoosh), WASI and why Cloudflare/Fastly run edge
  functions in Wasm sandboxes instead of containers for the cold-start win,
  and plugin sandboxing as a second use case. Cross-links The Edge (edge
  compute runtimes) and The Helmsman (Wasm as an emerging, lighter
  alternative to containers), both directions.

## Considered but deferred (future rounds)

The Cartographer (DDD), The Switchboard (networking internals), The
Gatekeeper (deep auth), The Green Thread (sustainability), The Haystack
(search &amp; retrieval), The Ramp (accessibility), and The Kiln (WebAssembly)
below have all since shipped as Mastery modules. Nothing is currently
sitting in this list — the remaining candidate from the September 2026 gap
analysis (not yet backlogged here) is Internationalization/Localization.

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
