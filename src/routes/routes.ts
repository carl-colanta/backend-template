import type { FastifyInstance } from "fastify";


export async function routes(
    app: FastifyInstance
) {

    app.get("/", async () => {
        return {
            message: "Hello API"
        };

    });

    app.get("/health", async () => {
        return {
            status: "ok"
        };

    });
}
