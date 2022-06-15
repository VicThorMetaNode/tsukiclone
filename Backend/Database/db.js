import mongoose from "mongoose";


global.mongoose = {
  conn: null,
  promise: null
}

//define connection as empty object: we're gonna use it to determine is we are connected to the DB or not
const connection = {};

//create an async fct to connect to DB
 async function connect() {

  if (global.mongoose && global.mongoose.conn) {
    console.log("You're using an existing mongoose connection !");
    return global.mongoose.conn;
  } else {
    console.log("You got a new mongoose connection !")
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

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      //if en production mode then disconnect mongoose
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      //if connected but not in production mode then do nothing
      console.log("not disconnected cause you're not in production mode");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;