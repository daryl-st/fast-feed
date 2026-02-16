// import mongoose from "mongoose";
// // import { Reaction } from "./Reaction";
// // import { User } from "./User";
// const { Schema, model } = mongoose;

// const postSchema = new Schema({
//     id: {
//         type: Number,
//         unique: true,
//     },
//     content: String,

//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },

//     comment: {
//         content: String,
//         reactions: {
//             type: Schema.Types.ObjectId,
//             ref: "Reaction",
//         },
//     },

//     reactions: {
//         type: Schema.Types.ObjectId,
//         ref: "Reactions",
//     },
// });

// export const Post = model("Post", postSchema);
