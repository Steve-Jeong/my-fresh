import { Bson, MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { cars } from "../../main.ts";
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async GET(req, ctx) {
    // const all_users = await users.find({ _id: new ObjectId("637f5b7d086fc859787397bb") }).toArray();
    const all_cars = await cars.find().toArray();
    const new_cars = all_cars.filter((car, index)=> {  // remove duplicate data
      if(index>0 && all_cars.length>1) { return car.saveDate !== all_cars[index-1].saveDate}
      else {return true}
    })
    console.log("all cars location : ", new_cars);  
    return new Response(JSON.stringify(new_cars))
  }
}