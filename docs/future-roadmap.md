# Future Roadmap — What to Explore Next

An analysis of KaizenCode as it stands today and concrete directions to grow it.
True to *Kaizen*, these are incremental improvements — ship one, learn, repeat.

## Where the project is today

**Strengths**

- Six focused, self-contained learning docs with a consistent voice and design.
- Zero dependencies → loads instantly, works offline, hosts free, never rots.
- Strong pedagogy: mobile-engineer analogies, runnable code, weekly projects.
- Now has a homepage, docs, a public repo, and free hosting.

**Gaps / opportunities**

- Content is **read-only** — no way to *do* the exercises in-page.
- No sense of **progress** — a learner can't track which phases they've finished.
- No **search** across phases, and no cross-linking between related concepts.
- Each HTML file repeats the same inline CSS (~1.5 KB duplicated six times).
- No **analytics** or feedback loop on which sections land.

## Ideas to explore (roughly by effort)

### Quick wins (hours)

- **Per-phase "mark complete" toggles** stored in `localStorage`, with a progress
  bar on the homepage. No backend needed.
- **Estimated reading time** and a **table of contents** on each phase.
- **"Copy code" buttons** on every `<pre>` block.
- **A `print.css`** so phases export cleanly to PDF for offline study.
- **Open Graph preview image** so links unfurl nicely when shared.

### Medium (days)

- **Interactive code playgrounds** — embed a JS sandbox (e.g. a sandboxed
  iframe or StackBlitz) so HTTP/Express snippets run in-page.
- **End-of-phase quizzes** — turn each doc's "self-check" questions into
  interactive multiple-choice with instant feedback.
- **Client-side search** across all phases (a small prebuilt index + fuzzy match).
- **Shared stylesheet / build step** — extract the duplicated CSS into one file,
  or generate the phase HTML from markdown so content and styling live separately.
- **Architect's Journal** — a simple `localStorage`-backed notes panel matching
  the program's "how would I architect this?" habit.

### Larger (weeks)

- **Phase 7+ expansion** — natural next topics: Observability (tracing, metrics,
  SLOs), Security (OWASP, secrets management, auth deep-dive), Testing strategy,
  GraphQL & API gateways, Infrastructure as Code (Terraform), and an
  Engineering-Management track (hiring, code review culture, on-call, roadmaps).
- **Hands-on lab repos** — a companion repo per mini-project with starter code,
  tests, and a reference solution branch.
- **Spaced-repetition review** — resurface key concepts on a schedule (the Kaizen
  cadence applied to memory).
- **Companion CLI or PWA** — installable offline app, daily nudge to do today's
  30+30 minutes.

## A "Phase 7 / Management" track (CTO-completion)

The current six phases build the *technical* CTO foundation. To round out the
"Mobile Engineer → CTO" arc, a leadership track could cover:

- System design interviews & whiteboarding practice.
- Cost awareness (cloud bills, build vs buy).
- Team topologies, ownership boundaries, on-call & incident response.
- Technical strategy, RFCs/ADRs, and communicating architecture to non-engineers.

## Suggested next step

Start with the **quick wins** — progress tracking + copy buttons + reading time.
They're high-value, need no backend, and keep the zero-dependency promise intact.
Then evaluate whether an interactive playground justifies introducing a light
build step.
