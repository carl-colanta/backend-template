import { createApp } from "./app.js";
import { env } from "./config/index.js";

export async function startServer() {
  const app = createApp();

  await app.listen({
    port: env.PORT,
    host: "localhost",
  });

  console.log(`Server running on port ${env.PORT}`);
}
