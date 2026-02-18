import {
    createNewUser,
    getUserById,
    getUsers,
    updateUserInfo,
} from "@/controllers/user.controller";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/users", getUsers);
userRouter.post("/users", createNewUser);
userRouter.put("/users", updateUserInfo);
userRouter.get("/users/:name", getUserById); // doesn't work

export default userRouter;
