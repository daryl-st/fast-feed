import { Hono } from "hono";
import userRouter from "./routes/user.route";

const app = new Hono();

app.route("/users", userRouter);

export default app;
