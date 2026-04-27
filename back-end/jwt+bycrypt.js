const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// 🔗 DB connect
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// 🧠 Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// 🟢 SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.send("User already exists");
  }

  // 🔐 hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save user
  const newUser = new User({
    email,
    password: hashedPassword
  });

  await newUser.save();

  res.send("Signup successful");
});


// 🔵 LOGIN
app.post("/login", async (req, res) => {
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

  // 🎟️ create JWT token
  const token = jwt.sign(
    { id: user._id },   // payload
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});



// 🔐 AUTH MIDDLEWARE
function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).send("No token");
  }

  const token = header.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
}



// 🟣 PROTECTED ROUTE
app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Welcome 🔥",
    userId: req.user.id
  });
});



// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});