import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    name: String,
    profile: String,
    DoB: String,
    bio: String,
    posts: [
        {
            content: String,
            reactions: [
                {
                    react: ["like", "clap", "heart"],
                    count: Number,
                },
            ],
            comments: [
                {
                    content: String,
                    reactions: [
                        {
                            react: ["like", "clap", "heart"],
                            count: Number,
                        },
                    ],
                },
            ],
        },
    ],
});

export const User = model("User", userSchema);
