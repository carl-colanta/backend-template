import Fastify from "fastify";
import { routes } from "./routes/routes.js";

export function createApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(routes);
  return app;
}
