import dotenv from "dotenv";
import { EnvSchema } from "./env.schema.js";

dotenv.config();

const result =
    EnvSchema.safeParse(process.env);

if (!result.success) {
    throw new Error(
        "Invalid environment"
    );
}

export const env = result.data;
