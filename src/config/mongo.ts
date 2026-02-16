import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/fast-feed");
        console.log("MongoDB Connected!");
    } catch (err: any) {
        console.error("Error connecting to the database", err._message);
        process.exit(1);
    }
}
