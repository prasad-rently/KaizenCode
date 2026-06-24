# Phase 6 — Distributed Systems & Kafka

**Weeks 21–24** · `phase6_distributed_systems_kafka.html`

> How large-scale systems are really built. The CTO's mental model for
> architecture.

## What you'll learn

- **Scaling** — vertical (bigger server, hard ceiling) vs horizontal (more
  servers, requires coordination).
- **Message queues** — loose coupling via async messaging: producer drops an
  event, consumer picks it up independently.
- **Apache Kafka**
  - Topics, partitions, producers, consumers, consumer groups, brokers, offsets.
  - Message retention (7-day default) enables **replay** — new services can
    consume historical events.
  - Kafka vs SQS/RabbitMQ: Kafka *retains*; SQS *deletes on consume*.
- **Redis** — in-memory store; cache-aside, rate limiting, session storage,
  leaderboards (sorted sets), pub/sub. Complements the DB, never replaces it.
- **Microservices vs monolith** — start with a monolith; split only for a proven,
  specific scale or team-ownership problem.
- **CAP theorem** — Consistency vs Availability during a network partition.
  PostgreSQL = CP; Cassandra/DynamoDB = AP.
- **System-design patterns** — load balancing, multi-layer caching
  (CDN → Redis → DB), rate limiting, circuit breaker, sharding, event sourcing.

## Mobile analogies

- **Kafka** ≈ APNs at massive scale — fire-and-forget, consumer processes when
  ready, supports replay.
- **Message queue** ≈ the exact pattern behind every push notification you've
  ever implemented.

## The CTO architecture lens (ask these)

1. Where is the actual bottleneck?
2. What happens when any single component goes down?
3. Can we replay events if a consumer fails mid-processing?
4. How do we trace a request across multiple services?
5. Are we solving a problem we *have*, or one we *imagine* at scale?
6. Could a well-indexed Postgres + Redis solve this instead of Kafka?
7. What's the operational burden on a small team?

> **Rule of three:** add architectural complexity only after hitting the same
> limit three times.

## Self-check

- Explain CAP using PostgreSQL and DynamoDB as the two examples.
- Why does Kafka's retention enable use cases SQS can't?
- Give one thing Redis should do and one thing it should never be the system of
  record for.
