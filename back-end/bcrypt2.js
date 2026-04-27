const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// 🔗 MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/bcryptDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🧠 Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);


// 🟢 SIGNUP (POST)
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Original:", password); 
    console.log("Hashed Password:", hashedPassword);

    // save user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.send("Signup successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


// 🔵 LOGIN (POST)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.send("User not found");
    }

    // 🔥 compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Wrong password");
    }

    res.send("Login successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


// 🟣 CHECK USERS (GET)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});