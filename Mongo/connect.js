const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string

const url =
  "mongodb+srv://dbUser:Demo@mongo.da2mm.azure.mongodb.net/Mongo?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

// The database to use
const dbName = "Mongo";

const dbClose = () => {
  client.close();
};

const connect = async () => {
  // Connection URL
  await client.connect();
  console.log("Connected correctly to server");
  const db = client.db(dbName);

  return { db, dbClose };
};

module.exports = { connect };
