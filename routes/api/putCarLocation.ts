import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { cars } from "../../main.ts";
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async POST(req) {
    // Insert DB
    // console.log('POST req : ', req);
    const body = await req.json();
    // console.log('POST body :', body);
    if (body.location === '') return new Response(null)
    const newLocation = await cars.insertOne({
      location: body.location,
      username: body.username,
      saveDate: body.saveDate,
    });
    return new Response(newLocation)
  }
}