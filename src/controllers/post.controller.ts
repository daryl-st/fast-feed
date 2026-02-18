import { commentOnAPost, createPostService, getAllPosts, getPostbyUserId, reactOnAPost } from "@/services/post.service";
import type { Context } from "hono";
import { getUserById } from "./user.controller";
import { getUserIdfromName } from "@/services/user.service";
import { Post } from "@/Models/Post";

export const createPost = async (c: Context) => {
    try {
        const postData = await c.req.json();
        // since a user has to be logged in to post, we can pull the name and search his id
        const userId = await getUserIdfromName("Darnell");
        const post = await createPostService(postData, userId);

        return c.json({ post }, 201);
    } catch (err) {
        console.error(err);
    }
}

export const getPosts = async (c: Context) => {
    try {
        const posts = await getAllPosts();

        return c.json({ posts }, 200);
    } catch (err) {
        console.error(err);
    }
}

export const getPostByUser = async (c: Context) => {
    try {
        // const user = c.req.param('name');
        const userId = await getUserIdfromName("Lucy");
        const post = await getPostbyUserId(userId);

        return c.json({ post }, 200);
    } catch (err) {
        console.error(err);
    }
}

export const react = async (c: Context) => {
    try {
        const post = await Post.findOne({id: 1});
        const react = await reactOnAPost(post);

        return c.json({ react }, 200);
    } catch (err) {
        console.error(err);
    }
}

export const comment = async (c: Context) => {
    try {
        const comment = await c.req.json();
        const userId = await getUserIdfromName("Lucy");
        const post = await getPostbyUserId(userId); // it's hard to figure out on which post to comment
        const data = await commentOnAPost(comment, post);

        return c.json( { data }, 200);
    } catch (err) {
        console.error(err);
    }
}