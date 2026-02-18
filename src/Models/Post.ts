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
    reactions: [reactionSchema], // this means it's embedded 
})

export const Post = model("Post", postSchema);

export const Comments = model("Comments", new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    }
})); // might need to include user here coz we need to know who commented
