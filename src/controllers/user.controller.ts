import { getAllUsers, createUser, updateUser } from "@/services/user.services";
import type { Context } from "hono";

export const getUsers = async (c: Context) => {
    try {
        const data = await getAllUsers();

        return c.json({ message: "Success", data: data }, 200);
    } catch (err) {
        console.error(err);
    }
};

export const createNewUser = async (c: Context) => {
    try {
        const userData = await c.req.json();
        const data = await createUser(userData);

        return c.json({ message: "Success", data: data }, 201);
    } catch (err) {
        console.error(err);
    }
};

export const updateUserInfo = async (c: Context) => {
    try {
        const userData = await c.req.json();
        const data = await updateUser(userData);

        return c.json({ data }, 201);
    } catch (err) {
        console.error(err);
    }
};
