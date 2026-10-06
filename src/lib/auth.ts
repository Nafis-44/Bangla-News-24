import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
console.log(process.env.NEXT_PUBLIC_MONGODB_URL)
const client = new MongoClient(`mongodb://bangla-news-24:rmu8bf2m6ZyGHLbc@ac-j5dzkkh-shard-00-00.sf3zsqq.mongodb.net:27017,ac-j5dzkkh-shard-00-01.sf3zsqq.mongodb.net:27017,ac-j5dzkkh-shard-00-02.sf3zsqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-85eomf-shard-0&authSource=admin&appName=Cluster0
`);

const db = client.db("bangla-news-24");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});