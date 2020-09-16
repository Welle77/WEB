const connect = require("./connect");
const create = require("./create");

async function run() {
  try {
    const { db, dbClose } = await connect.connect();
    // Use the collection "people"
    const col = db.collection("people");
    create.createNice(col);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
    dbClose();
  } catch (err) {
    console.log(err.stack);
  }
}

run().catch(console.dir);
