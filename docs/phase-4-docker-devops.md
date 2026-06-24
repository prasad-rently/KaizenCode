# Phase 4 — Docker & DevOps

**Weeks 13–16** · `phase4_docker_devops.html`

> Containerise your app, automate your pipeline, ship with confidence.

## What you'll learn

- **Docker** — containers vs VMs; why "works on my machine" disappears when you
  package app + dependencies together.
- **Dockerfile** — `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`; layer
  caching strategy (order matters for fast rebuilds).
- **Docker commands** — `build`, `run`, `ps`, `logs`, `exec`, `stop`, `rm`,
  `system prune`.
- **Docker Compose** — multi-container orchestration; one `docker-compose.yml`
  boots API + database + Redis together.
- **CI/CD** — Continuous Integration (run tests on every push) + Continuous
  Deployment (auto-deploy on green).
- **GitHub Actions** — `.github/workflows/*.yml`; `on: push`, jobs, steps,
  `actions/checkout`, `setup-node`.
- **Nginx** — reverse proxy in front of Node; SSL termination, forwarding plain
  HTTP internally.

## Mobile analogies

- **Docker image** ≈ an `.ipa` / `.apk` — app + runtime bundled, runs identically
  anywhere.
- **`docker-compose.yml`** ≈ a `Podfile` / `Package.swift` for your *entire*
  runtime environment, not just app dependencies.

## Mini project

Dockerise the Express API from Phase 1. Write a `docker-compose.yml` (API +
PostgreSQL). Add a GitHub Actions CI workflow that runs tests on every push.

## Self-check

- Why order Dockerfile layers so `COPY package.json` comes before `COPY . .`?
- What's the difference between a Docker image and a running container?
- What does a reverse proxy like Nginx give you that exposing Node directly does not?
