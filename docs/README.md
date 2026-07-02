# KaizenCode — Documentation

Markdown companions to the HTML learning docs. Each phase file distills the same
content as its `.html` counterpart into readable, copy-pasteable notes, plus
meta-docs on how the project was built and where it's going.

## Meta

- [`00-project-setup.md`](00-project-setup.md) — how KaizenCode is structured, how it's hosted free, and a comparison of static-hosting platforms.
- [`expansion-analysis.md`](expansion-analysis.md) — deeper gap analysis and the new **Mastery Track** modules.
- [`future-roadmap.md`](future-roadmap.md) — analysis of the project and ideas to explore next.

## Mastery Track (new modules)

Cross-cutting skills beyond the core six, with **inline runnable code** (copy + ▶ Run):

| Module | Topic |
|--------|-------|
| 🗼 [The Watchtower](../mastery_watchtower_observability.html) | Observability — logs, metrics, tracing, SLOs |
| 🔐 [The Vault](../mastery_vault_security.html) | Security & auth — OWASP, hashing, JWT, secrets |
| 🪢 [The Safety Net](../mastery_safety_net_testing.html) | Testing — pyramid, TDD, mocking, coverage |
| 🚪 [The Gateway](../mastery_gateway_apis.html) | API design — GraphQL, N+1, pagination, rate limiting |
| 📐 [The Blueprint](../mastery_blueprint_iac.html) | Infrastructure as Code — Terraform, state, GitOps |
| 🧭 [The Compass](../mastery_compass_leadership.html) | Engineering leadership — system design, ADRs, on-call |
| 🔥 [The Forge](../mastery_forge_cicd.html) | CI/CD — pipeline, canary/blue-green, feature flags, SBOM |
| 🌊 [The Streaming Mind](../mastery_streaming_mind_eventdriven.html) | Event-driven — pub/sub, event sourcing, CQRS, idempotency |
| 📒 [The Ledger](../mastery_ledger_data_engineering.html) | Data engineering — OLTP/OLAP, ETL/ELT, star schema |
| ⚡ [The Edge](../mastery_edge_performance.html) | Performance — latency, caching hierarchy, Web Vitals, edge |
| 💰 [The Wallet](../mastery_wallet_finops.html) | FinOps — on-demand/reserved/spot, rightsizing, build-vs-buy |
| 🔮 [The Oracle](../mastery_oracle_ai_llm.html) | AI/LLM apps — tokens, embeddings, RAG, prompting, agents |
| 🤹 [The Juggler](../mastery_juggler_concurrency.html) | Concurrency — event loop, parallelism, semaphores, races |
| 🛡️ [The Bulwark](../mastery_bulwark_resilience.html) | Resilience — timeouts, retries, circuit breaker, bulkheads |
| ⚙️ [The Engine Room](../mastery_engine_room_db_internals.html) | DB internals — B-trees, WAL, ACID, isolation, MVCC, pooling |
| 🧰 [The Foundry](../mastery_foundry_algorithms.html) | Systems algorithms — LRU, Bloom filter, consistent hashing |

## Phase notes

| # | Doc | Topic |
|---|-----|-------|
| 1 | [phase-1-http-backend-foundations.md](phase-1-http-backend-foundations.md) | HTTP, Node.js, Express, middleware, JWT, REST |
| 2 | [phase-2-databases.md](phase-2-databases.md) | SQL/NoSQL, PostgreSQL, JOINs, indexes, MongoDB, Prisma |
| 3 | [phase-3-nextjs-mern-fullstack.md](phase-3-nextjs-mern-fullstack.md) | React web, Next.js, rendering modes, MERN, deployment |
| 4 | [phase-4-docker-devops.md](phase-4-docker-devops.md) | Docker, Compose, CI/CD, GitHub Actions, Nginx |
| 5 | [phase-5-aws-cloud.md](phase-5-aws-cloud.md) | EC2, S3, RDS, Lambda, IAM, VPC, CloudWatch, Route 53 |
| 6 | [phase-6-distributed-systems-kafka.md](phase-6-distributed-systems-kafka.md) | Scaling, Kafka, Redis, microservices, CAP, system design |

See also the top-level [`roadmap_summary_md.md`](../roadmap_summary_md.md) for the
full at-a-glance summary.
