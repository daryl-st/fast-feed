import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    profile: String,
    DoB: {
        type: String,
        required: true,
    },
    bio: String,
    posts: [
        {
            content: {
                type: String,
                required: true,
            },
            reactions: [
                {
                    react: ["like", "clap", "heart"],
                },
            ],
            comments: [
                {
                    content: {
                        type: String,
                        required: true,
                    },
                    reactions: [
                        {
                            react: ["like", "clap", "heart"],
                        },
                    ],
                },
            ],
        },
    ],
});

export const User = model("User", userSchema);
