import { Hono } from "hono";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.routes";
import { auth } from "./utils/auth";

const app = new Hono();

app.route("/users", userRouter);
app.route("/posts", postRouter);

app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw));

export default app;
