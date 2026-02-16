import {
    createNewUser,
    getUsers,
    updateUserInfo,
} from "@/controllers/user.controller";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/", getUsers);
userRouter.post("/", createNewUser);
userRouter.put("/", updateUserInfo);

export default userRouter;
