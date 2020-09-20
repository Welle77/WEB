const mongoose = require("mongoose");
// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://dbUser:Demo@mongo.da2mm.azure.mongodb.net/Mongo?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model("cats", { name: String });

const kitty = new Cat({ name: "Kitty" });
kitty.save().then(() => {
  console.log("meow");
});
