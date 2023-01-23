import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { cars } from "../../main.ts";
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async POST(req) {
    // Insert DB
    // console.log('POST req : ', req);
    const body = await req.json();
    console.log('POST body :', body);
    if (body.location === '') {
      console.log('body.location is null')
      return new Response(null)
    }
    const newLocation = await cars.insertOne({
      location: body.location,
      username: body.username,
      saveDate: body.saveDate,
    });

    let lastId=0;
    const maxNumberOfDocument = 10
    const last = await cars.find().sort({_id:-1}).skip(maxNumberOfDocument).limit(1)
    if(last != null) {
      for await (const doc of last) {
        // console.log('last id : ', doc._id);
        lastId=doc._id
      }
    }
    if(lastId != 0) {
      // console.log('lastId : ', lastId)
      await cars.deleteMany({_id:{$lt:lastId}})
    }
    
    console.log('car newLocation : ', newLocation)
    return new Response(newLocation)
  }
}