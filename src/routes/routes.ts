import type { FastifyInstance } from "fastify";

// POC libarary
// This can be updated later on or write a custom library that's faster through C++, or anything with less abstraction
import screenshot from "screenshot-desktop";

export async function routes(app: FastifyInstance) {
  const fileName: String = app.get("/screen", async () => {
    const imgPath: String = "./tmp/demo.png";
    // Initial POC just to see how screenshots work
    screenshot({ filename: imgPath })
      .then((imgPath: String) => {
        console.log("Screenshot saved to:", imgPath);
      })
      .catch((err: Error) => {
        console.error("Error capturing screen:", err);
      });
    return {
      message: "Hello API",
    };
  });

  app.get("/windows", async () => {
    return {
      status: "ok",
    };
  });
}
