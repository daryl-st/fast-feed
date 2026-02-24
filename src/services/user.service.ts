import { connectDB } from "@/config/mongo";
import { User } from "@/Models/Post";

await connectDB();

export const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.error("Error occured while fetching data.");
    }
};

export const getOneUser = async (data: any) => {
    try {
        const user = await User.findOne({ username: data.username });
        return user;
    } catch (err) {
        console.error(err);
    }
};

export const getUserIdfromName = async (name: string) => {
    try {
        const userId = await User.findOne({name: name}).select('_id');
        return userId?._id;
    } catch (err) {
        console.error(err);
    }
}

export const createUser = async (data: any) => {
    // need refactoring for any
    try {
        const user = await User.create({
            id: data.id,
            username: data.username,
            name: data.name,
            DoB: data.DoB,
            bio: data.bio,
        });

        return user;
    } catch (err) {
        console.error("Error occured while fetching data.", err);
    }
};

export const updateUser = async (data: any) => {
    try {
        const user = await User.updateOne(
            { username: data.username },
            {
                bio: data.bio,
            },
        );

        return user;
    } catch (err) {
        console.error("Error occured while fetching data.");
    }
};
