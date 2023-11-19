// app.js
const express = require("express");
const { User, PlannerInput } = require("./mongo"); 
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

// Register endpoint
app.post("/register", async (req, res) => {
  const { email, password, typeOfUser } = req.body;

  const data = {
    email: email,
    password: password,
    typeOfUser: typeOfUser
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      const newUser = new collection(data);
      await newUser.save();
    }
  } catch (e) {
    res.json("notexist");
  }
});

// Endpoint to handle planner input form submission
app.post("/planner-input", async (req, res) => {
  const { eventName, eventType, eventDate, eventTime, eventAddress, numberOfPeople } = req.body;

  try {
    const newEvent = new plannerInputDB.PlannerInput({
      eventName,
      eventType,
      eventDate,
      eventTime,
      eventAddress,
      numberOfPeople
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error saving event data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
