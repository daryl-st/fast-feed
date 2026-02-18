import { connectDB } from "@/config/mongo";
import { User } from "@/Models/User";

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

export const createUser = async (data: any) => {
    // need refactoring for any
    try {
        const user = await User.create({
            username: data.username,
            name: data.name,
            DoB: data.DoB,
        });

        return user;
    } catch (err) {
        console.error("Error occured while fetching data.");
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
