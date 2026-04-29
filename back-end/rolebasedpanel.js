const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

  // database connection
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  //user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});


const User = mongoose.model("User", userSchema);


// 🟢 SIGNUP ROUTE
app.post("/signup", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      role: role || "user" // default user
    });

    // save in DB
    await newUser.save();

    res.send("Signup successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



// 🔵 LOGIN ROUTE
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Wrong password");
    }

    // 🎟️ create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



// 🔴 LOGOUT ROUTE
app.post("/logout", (req, res) => {
  // JWT logout usually frontend token remove karta hai
  res.send("Logout successful (remove token from frontend)");
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
    return res.status(401).send("Invalid or expired token");
  }
}


// 🛡️ ADMIN MIDDLEWARE
function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }

  next();
}


// 🗑️ DELETE USER ROUTE (ADMIN ONLY)
app.delete("/users/:id", auth, isAdmin, async (req, res) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    res.send(`User ${userId} deleted successfully`);

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});