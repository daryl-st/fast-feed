import { Hono } from "hono";
import { connectDB } from "./db/mongo";
import { User } from "./Models/User";

await connectDB();

const app = new Hono();

app.get("/", (c) => {
    return c.text("Hello Hono!");
});

export default app;
