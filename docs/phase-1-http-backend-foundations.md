# Phase 1 — HTTP & Backend Foundations

**Weeks 1–4** · `phase1_http_backend_foundations.html`

> You've consumed REST APIs for 14 years. Now you build them.

The building block for everything else in the roadmap. The mental shift: for your
whole career you've been the **client**. Now you become the **server**.

## What you'll learn

- **HTTP protocol** — the request/response cycle; methods (`GET POST PUT PATCH
  DELETE`); status codes (2xx / 4xx / 5xx); headers and body anatomy.
- **Node.js** — JavaScript on the server. The same V8 engine as the browser, but
  with access to the filesystem, network sockets, and OS APIs instead of UI.
- **npm** — `package.json`, `node_modules`, scripts, dev vs prod dependencies.
- **Express.js** — routing, the middleware pipeline, request/response helpers.
- **Middleware** — logging, auth guards, error handlers; `(req, res, next)`.
- **JWT auth** — stateless tokens: issue on login, verify on every request.
- **REST design** — nouns in URLs, correct verbs, versioning, nested resources.

## Key reference

**HTTP methods**

| Method | Action | Mobile analogy |
|--------|--------|----------------|
| `GET` | Fetch data, no side effects | `viewDidLoad` — read only |
| `POST` | Create a new resource | Submitting a sign-up form |
| `PUT` | Replace entire resource | Overwrite a saved file |
| `PATCH` | Update partial fields | Edit one setting |
| `DELETE` | Remove a resource | Swipe-to-delete in a table view |

**Status codes worth memorising:** `200` OK · `201` Created · `204` No Content ·
`400` Bad Request · `401` Unauthorized (no token) · `403` Forbidden (no
permission) · `404` Not Found · `422` Unprocessable · `500` Server Error.

## Mobile analogies

- **Middleware** ≈ URLSession interceptors / Alamofire adapters — sit between
  your code and the request/response, transforming or blocking.
- **Node runtime** ≈ the React Native JS runtime, minus the native UI layer —
  it serves data instead of rendering views.

## Mini project

Build a full CRUD REST API for a `tasks` resource using Express + an in-memory
array. Add JWT auth (issue on `/login`, verify on protected routes). Test with
Postman or curl. This single project covers ~80% of daily backend work.

## Self-check

- Can you explain the difference between `401` and `403`?
- Why is `PUT` idempotent but `POST` is not?
- What does `next()` do in an Express middleware, and what happens if you forget it?
- Where should the JWT secret live, and why never in source code?
