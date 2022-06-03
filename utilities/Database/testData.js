import mongoose from "mongoose";

//define connection as empty object: we're gonna use it to determine is we are connected to the DB or not
const connection = {};

//create an async fct to connect to DB
async function connect() {
  //1st: check if connected to db or not
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    //2nd: if not connected then check Mongoose
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      //3rd check if 1st statement is true: isConnected
      console.log("use previous connection");
      return;
    } //if the connection status is not one, we need to disconnect = kill connection because not ready
    await mongoose.disconnect();
  }

  //Now we connect to Mongo DB via mongoose using await for promises //first params must be URI passed with process.env
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,});
    console.log("you got a new connection");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//create an async fct to DISconnect to DB when being in production to prevent connecting/disconnecting when in production mode cause it uses energy, processor, CPU, and so on
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

const db = { connect, disconnect };
export default db;
