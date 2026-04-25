const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
app.use(express.json());

// 🔗 MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🔴 Session setup
app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: true
}));

// 🧠 User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user"
  }
});

const User = mongoose.model("User", userSchema);


// 🟢 SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // check already exists
  const existing = await User.findOne({ email });
  if (existing) {
    return res.send("User already exists");
  }

  const newUser = new User({ email, password });
  await newUser.save();

  res.send("Signup successful");
});


// 🔵 LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User not found");
  }

  if (user.password !== password) {
    return res.status(401).send("Invalid password");
  }

  // 🔥 session me save
  req.session.user = user;

  console.log("SESSION:", req.session);

  res.send("Login successful");
});


// 🔐 AUTH middleware
function auth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send("Not logged in");
  }
  next();
}


// 👑 ADMIN middleware
function isAdmin(req, res, next) {
  if (req.session.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }
  next();
}


// 🟣 PROFILE
app.get("/profile", auth, (req, res) => {
  res.json(req.session.user);
});


// 🔴 DELETE (admin only)
app.delete("/users/:id", auth, isAdmin, (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});


// 🚪 LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});


// 🟢 Home
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});


// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});