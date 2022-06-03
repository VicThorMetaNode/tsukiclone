import mongoose from "mongoose";


global.mongoose = {
  conn: null,
  promise: null
}

//create an async fct to connect to DB
export async function dbConnect() {

  if (global.mongoose && global.mongoose.conn) {
    console.log("You're using an existing mongoose connection !");
    return global.mongoose.conn;
  } else {
    console.log("You got a new mongose connection !")
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const database = process.env.MONGODB_DATABASE;

    const conString = `mongodb+srv://${user}:${password}@node-api-ecom.u8cxa.mongodb.net/${database}?retryWrites=true&w=majority`

    const promise = mongoose.connect(conString, {
      useNewUrlParser: true,
    }).then(mongoose => mongoose);

    global.mongoose = {
      conn: await promise,
      promise
    }
    return await promise;
  }

}