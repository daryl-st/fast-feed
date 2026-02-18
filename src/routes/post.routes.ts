import { comment, createPost, getPostByUser, getPosts, react } from "@/controllers/post.controller";
import { Hono } from "hono";

const postRouter = new Hono();

postRouter.post("/", createPost);
postRouter.get("/", getPosts);
// postRouter.get("/", getPostByUser); // Not reachable ??
postRouter.put("/", react); // not sure this should be on route
postRouter.post("/comment", comment);

export default postRouter;