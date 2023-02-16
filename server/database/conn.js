import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  const server = await MongoMemoryServer.create();
  const uri = server.getUri();
  console.log(uri);

  const db = mongoose.connect(uri);
  console.log(`connected to database`);
  return db;
}

export default connect;
