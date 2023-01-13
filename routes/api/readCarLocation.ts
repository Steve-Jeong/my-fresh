import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { cars } from "../../main.ts";
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async GET(req, ctx) {
    // const all_users = await users.find({ _id: new ObjectId("637f5b7d086fc859787397bb") }).toArray();
    const all_cars = await cars.find().toArray();
    console.log("all users : ", all_cars);
    return new Response(JSON.stringify(all_cars))
  }
}