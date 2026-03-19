const users = [
    {
        id: 1,
        name: "Darnell",
        username: "daryl",
        profile: null,
        DoB: "2004-05-24",
        bio: "A simple guy addicted to coding.",
        posts: [],
        followes: [],
    },
    {
        id: 2,
        name: "Lucy",
        username: "lucy",
        profile: null,
        DoB: "2005-02-04",
        bio: "I will go to the moon",
        posts: posts,
        followers: [],
    },
];

const posts = [
    {
        id: 1,
        content: "A post idea as a first post. #yay",
        reactions: [],
        userId: users.id,
        comments: comments,
    },
    {
        id: 1,
        content: "A Second post idea.",
        reactions: reactions,
        userId: users.id,
        comments: comments,
    },
];

const reactions = [
    {
        type: ["like", "clap", "heart"],
        count: 0,
        post: posts.id,
        comment: null,
    },
];

const comments = [
    {
        content: "Just commenting for test.",
        reactions: reactions,
        post: posts.id,
    },
];
