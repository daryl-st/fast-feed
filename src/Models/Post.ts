import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { connectDB } from "@/config/mongo";

await connectDB();

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
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    react: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

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
    reactions: [reactionSchema],
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
}));

// const lucyPostId = await Post.findOne({content: "Lucy first post"}).select("_id");

// const comment = await Comments.create({
//     id: 1,
//     content: 'Not alone Lucy!',
//     post: lucyPostId!._id,
// });
// const comment = await Comments.find().populate("post");

// console.log(comment);

// const user = await User.create({
//     id: 2,
//     username: 'lucy',
//     name: 'Lucy',
//     DoB: '2003-12-01',
//     bio: 'Figuring out Nightcity by my self.'
// });

// console.log(user);

// const userId = await User.find({name: 'Lucy'}).select('_id');
// const post2 = await Post.create({
//     id: 3,
//     content: 'Lucy first post',
//     user: userId[0]._id,
// })

// console.log(post2);
// const user = await User.find({id: 1});
// const name = user[0]._id;
// const updatedPost = await Post.updateOne({user: name}, {content: "Again! Updated Post"});
// const post = await Post.find().populate('user');
// console.log(post);

// const reactions = await Reactions.create({
//     id: 1,
//     react: 'like',
//     user: userId[0]._id,
// })

// const react = new Reactions({
//     id: 1,
//     react: 'like',
//     user: userId[0]._id,
// })

// const updatePost = await Post.updateOne({user: userId[0]._id}, {reactions: [react]});
// console.log(updatePost);

// const reactions = await Post.findOne({"reactions.react": 'like'}).populate('reactions.user').select('reactions.user');
// console.log(reactions);
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
