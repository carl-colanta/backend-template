import type { FastifyInstance } from "fastify";
import type { FastifyRequest, FastifyReply } from "fastify";

// POC libarary
// This can be updated later on or write a custom library that's faster through C++, or anything with less abstraction
import screenshot from "screenshot-desktop";

export async function routes(app: FastifyInstance) {
  app.get("/screen", async (request: FastifyRequest, reply: FastifyReply) => {
    const imgPath: String = `./tmp/demo-${Date.now()}.png`;
    // Initial POC just to see how screenshots work
    // Add fp either
    try {
      screenshot({ filename: imgPath });
      return {
        message: "screenshot " + imgPath,
      };
    } catch (error) {
      console.error("Error capturing screen: ", error);
    }

    return reply.code(201).send({ status: "Created", path: imgPath });
  });
}
