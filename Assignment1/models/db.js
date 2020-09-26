const workout = require("./workout");
const exercise = require("./exercise");
const mongoose = require("mongoose");

//***************DB CONNECT*******************//
const url =
  "mongodb+srv://dbUser:Demo@mongo.da2mm.azure.mongodb.net/Mongo?retryWrites=true&w=majority";

const connect = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    keepAliveInitialDelay: 300000,
    keepAlive: 1,
  });
};

const disconnect = () => {
  mongoose.disconnect();
};

module.exports = { connect, disconnect };
