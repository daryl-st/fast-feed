import { connectDB } from "@/config/mongo";
import { User } from "@/Models/User";

await connectDB();

export const createPostService = async (data: any) => {
    try {
        const postData = {
            content: 'post',
            reactions: 'like',
            comments: {
                content: 'comment',
                reactions: 'heart',
            }
        }
        const post = await User.updateOne(
            { username: data.username }, 
            { 
                $push: {
                    'posts.$.comments': {
                        content: "great post",
                        reactions: [],
                    }
                }
            }
        );
        console.log(post);

        return post;
    } catch (err) {
        console.error(err);
    }
}