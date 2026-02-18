import { createPost } from "@/controllers/post.controller";
import { Hono } from "hono";

const postRouter = new Hono();

postRouter.post("/", createPost);

export default postRouter;