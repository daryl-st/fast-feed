import { connectDB } from "@/config/mongo";
import { Comments, Post, Reactions, User } from "@/Models/Post";
import { getUserIdfromName } from "./user.service";

await connectDB();

export const createPostService = async (data: any, id: any) => {
    try {
        const post = await Post.create({
            id: data.id,
            content: data.content,
            user: id,
        })

        return post;
    } catch (err) {
        console.error(err);
    }
}

export const getAllPosts = async () => {
    try {
        // const users = await User.find();
        const posts = await Post.find().populate('user');
        return posts;
    } catch (err) {
        console.error(err);
    }
}

export const getPostbyUserId = async (data: any) => {
    try {
        const post = await Post.find({user: data}).populate('user');
        return post;
    } catch (err) {
        console.error(err);
    }
}

export const reactOnAPost = async (data: any) => {
    try {
        const userId = await getUserIdfromName('Darnell');
        const react = new Reactions({
            react: 'like',
            user: userId
        })
        const post = await Post.updateOne({_id: data}, {reactions: react});

        return post;
    } catch (err) {
        console.error(err);
    }
}

export const commentOnAPost = async (data: any, post: any) => {
    try {
        const userId = await getUserIdfromName('Darnell');
        const comment = new Comments({
            id: data.id,
            content: data.content,
            user: userId,
        })

        const updatedPost = await Post.updateOne({_id: post[0]._id}, {comments: comment});

        return updatedPost;
    } catch (err) {
        console.error(err);
    }
}