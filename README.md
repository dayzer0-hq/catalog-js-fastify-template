# catalog-js-fastify-template

A minimal **JavaScript + Fastify (Node)** starter for DayZer0 catalog backend briefs. It is the
starting point shared by every brief in the JS+Fastify bucket, so it carries only a health route —
the feature work is yours to build on top.

## Stack
- Node.js 20 or newer
- Fastify 5 (ESM)
- `node --test` for the test runner (no extra test framework)

## Run it
```bash
npm install
npm start                      # listens on http://localhost:3000
curl localhost:3000/healthz    # -> {"status":"ok"}
```

## Test it
```bash
npm test                       # runs node --test over test/
```

## Layout
- `app.js` — `buildApp()` builds the Fastify instance and registers routes; it does **not** listen,
  so tests drive it with `app.inject()` and never bind a port.
- `server.js` — starts the server.
- `test/` — `node --test` suites.

Build your feature on top: add routes in `app.js` (or modules it registers), declare each route's
schema so Fastify validates the request at the door, and keep business logic in plain functions so
it can be unit-tested without HTTP.
