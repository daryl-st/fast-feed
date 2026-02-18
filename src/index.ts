import { Hono } from "hono";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.routes";

const app = new Hono();

app.route("/", userRouter);
app.route("/posts", postRouter);

export default app;
