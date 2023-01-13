import { load } from "https://deno.land/std@0.170.0/dotenv/mod.ts";
import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

// Defining schema interface
interface UserSchema {
  // _id: ObjectId;
  username: string;
  password: string;
}

console.log("mongo atlas connecting...");

const client = new MongoClient();
const { MONGO_SERVER_HOST, MONGO_PORT, MONGO_DB, MONGO_USERNAME, MONGO_PASSWORD } = await load();  // .env filepath is from the root directory { envPath: "./.env" }
// console.log('MONGO_SERVER_HOST : ', MONGO_SERVER_HOST);

// Connecting to a Mongo Atlas Database
// await client.connect({
//   db: MONGO_DB,
//   tls: true,
//   servers: [
//     {
//       host: MONGO_SERVER_HOST,
//       port: Number(MONGO_PORT),
//     },
//   ],
//   credential: {
//     username: MONGO_USERNAME,
//     password: MONGO_PASSWORD,
//     db: MONGO_DB,
//     mechanism: "SCRAM-SHA-1",
//   },
// });


// Connect using srv url
await client.connect(
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.dszjj.mongodb.net/test123?authMechanism=SCRAM-SHA-1`,
);


// await client.connect("mongodb://127.0.0.1:27017");
console.log("mongo atlas connected.");

const db = client.database("test123");
export const cars = db.collection("cars");