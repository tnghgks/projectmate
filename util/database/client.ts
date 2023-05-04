import { connect, connection, ConnectOptions } from "mongoose";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

async function dbConnect() {
  if (!connection.readyState) {
    if (!process.env.MONGO_URI) return;
    console.log("Connecting to DB...");
    connect(process.env.MONGO_URI, options as ConnectOptions);
  }
}
export default dbConnect;
