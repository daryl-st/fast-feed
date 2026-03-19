import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017/fast-feed');
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {client}),
    emailAndPassword: {
        enabled: true,
    },
    // socialProviders: {
    //     google: 
    // }
})