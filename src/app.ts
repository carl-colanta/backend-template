import Fastify from "fastify";
import { env } from "./config/index.js";

export function createApp() {

    const app = Fastify({
        logger: true
    });

    app.get("/", async () => {
        return {
            message: "Response mock"
        };

    });

    return app;
}
