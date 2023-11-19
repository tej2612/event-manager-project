const mongoose = require("mongoose");

const eventManagerDB = mongoose.createConnection("mongodb://localhost:27017/user-input");

eventManagerDB.on("error", err => {
  console.error("Event Manager MongoDB connection error:", err);
});

eventManagerDB.once("open", () => {
  console.log("Event Manager MongoDB connected");
});

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  typeOfUser: {
    type: String,
    required: true
  },
});

const User = eventManagerDB.model('User', userSchema);

const plannerInputDB = mongoose.createConnection("mongodb://localhost:27017/planner-input");

plannerInputDB.on("error", err => {
  console.error("Planner Input MongoDB connection error:", err);
});

plannerInputDB.once("open", () => {
  console.log("Planner Input MongoDB connected");
});

const plannerInputSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventTime: {
    type: String,
    required: true
  },
  eventAddress: {
    type: String,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  }
});

const PlannerInput = plannerInputDB.model('PlannerInput', plannerInputSchema);

module.exports = {
  User,
  PlannerInput
};
