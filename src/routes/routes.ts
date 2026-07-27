import type { FastifyInstance } from "fastify";


export async function routes(
    app: FastifyInstance
) {

    app.get("/screen", async () => {
        return {
            message: "Hello API"
        };

    });

    app.get("/windows", async () => {
        return {
            status: "ok"
        };
    });
}
