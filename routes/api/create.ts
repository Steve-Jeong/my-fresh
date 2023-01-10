import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { users } from "../../main.ts";
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async POST(req, ctx) {
    // Insert DB
    const all_users = await users.insertMany([{
      username: "user12",
      password: "pass12"
    },
    {
      username: "user22",
      password: "pass22"
    },]);
  }
}