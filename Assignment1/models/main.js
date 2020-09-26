const workout = require("./workout");
const exercise = require("./exercise");
const mongoose = require("mongoose");

//***************DB CONNECT*******************//
const url =
  "mongodb+srv://dbUser:Demo@mongo.da2mm.azure.mongodb.net/Mongo?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  keepAliveInitialDelay: 300000,
  keepAlive: 1,
});

//****************Garbage test things*******************//
const plaintextPassword = "qwerasdf";

const newUser = {
  email: "hej@hej.dk",
  password: plaintextPassword,
  name: "hej",
  workouts: {
    name: "Træt torsdag",
    exercises: [
      {
        name: "Ben",
        description: "Store stænger",
        sets: 3,
        reps: 10,
      },
    ],
  },
};

const exercise1 = {
  name: "Tore",
  description: "Run",
  time: "30",
};

const workout1 = {
  name: "hardcore",
  exercises: [exercise1],
};
//****************Garbage test things*******************//

(async () => {
  mongoose.disconnect();
})();
