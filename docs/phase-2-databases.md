# Phase 2 — Databases

**Weeks 5–8** · `phase2_databases.html`

> Where your data lives permanently — queryable, relational, and built for scale.

## What you'll learn

- **SQL vs NoSQL** — relational (transactions, relationships, strict schema) vs
  document (flexible schema, high write volume). When each wins.
- **PostgreSQL** — tables, columns, data types; `CREATE TABLE`, `INSERT`,
  `SELECT`, `UPDATE`, `DELETE`.
- **SQL queries** — `WHERE`, `ORDER BY`, `LIMIT/OFFSET` (pagination), `GROUP BY`,
  `COUNT`.
- **JOINs** — `INNER JOIN`, `LEFT JOIN`, foreign keys, `ON DELETE CASCADE`.
- **Indexes** — why queries slow at scale, how an index works, which columns to
  index (and the write-cost trade-off).
- **MongoDB** — documents, collections, schema-free design; `find` / `create` /
  `findByIdAndUpdate`.
- **Prisma ORM** — type-safe DB access, `schema.prisma`, generated client,
  `include` for joins.
- **Migrations** — versioned schema changes; `prisma migrate dev`; keeping
  environments in sync.

## Mobile analogies

- **SQL** ≈ Core Data with a strict managed-object model.
- **JOIN** ≈ a Core Data relationship fetch (`user.posts`).
- **Migrations** ≈ Core Data lightweight migration policies.

## Mini project

Replace the in-memory array from Phase 1 with PostgreSQL via Prisma. Add a
`posts` table with a foreign key to `users`, and expose nested reads
(`/users/:id/posts`).

## Self-check

- When would you reach for MongoDB over PostgreSQL — and when is that a mistake?
- What's the difference between `INNER JOIN` and `LEFT JOIN`?
- An index makes reads faster — what does it cost you?
- Why run migrations instead of editing the schema by hand on each environment?
