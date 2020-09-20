const user = require("./user");

const mongoose = require("mongoose");

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

const plaintextPassword = "qwerasdf";

const newUser = {
  email: "hej@hej.dk",
  password: plaintextPassword,
  name: "hej",
  workouts: [
    {
      name: "Ben",
      description: "Store stænger",
      sets: 3,
      reps: 10,
    },
  ],
};

//user.create(newUser);
user.login(newUser);
