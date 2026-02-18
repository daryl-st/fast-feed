import { createPostService } from "@/services/post.service";
import type { Context } from "hono";

export const createPost = async (c: Context) => {
    try {
        const postData = await c.req.json();
        const post = await createPostService(postData);

        return c.json({ post }, 201);
    } catch (err) {
        console.error(err);
    }
}