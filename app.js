import Fastify from 'fastify';

// buildApp wires the routes and returns the Fastify instance WITHOUT listening,
// so tests can drive it with app.inject() and never bind a port. Build your
// feature by registering more routes here (or in modules this file registers),
// and keep the business logic in plain functions so it can be tested without HTTP.
export function buildApp(opts = {}) {
  const app = Fastify(opts);

  app.get('/healthz', async () => ({ status: 'ok' }));

  return app;
}
