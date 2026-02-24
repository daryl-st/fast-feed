import mongoose from "mongoose";
const { Schema, model } = mongoose;

enum reaction {
    "LIKE",
    "HEART",
    "CLAP"
}

const userSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    DoB: {
        type: String,
        required: true,
    },
    bio: String,
})

export const User = model("User", userSchema);

const reactionSchema = new Schema({
    react: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

// i might not need this after all, since it's embedded no reason to create a model (document)
export const Reactions = model("Reactions", reactionSchema); 

const commentSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

export const Comments = model("Comments", commentSchema);

const postSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comments: [commentSchema], // Both comments and reactions embedded
    reactions: [reactionSchema], 
})

export const Post = model("Post", postSchema);
