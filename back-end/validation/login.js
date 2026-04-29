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
    let { email, password, role } = req.body;

    // 🔹 Empty fields
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // 🔹 Clean email
    email = email.trim().toLowerCase();

    // 🔹 Email format
    if (!email.includes("@")) {
      return res.status(400).send("Invalid email format");
    }

    // 🔹 Strong password
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!strongPassword.test(password)) {
      return res.status(400).send(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
      );
    }

    // 🔹 Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      role: role === "admin" ? "admin" : "user"
    });

    // 💾 Save to DB
    await newUser.save();

    res.status(201).send("Signup successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


// 🔵 LOGIN ROUTE
app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    // 🔹 Empty fields
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // 🔹 Clean email
    email = email.trim().toLowerCase();

    // 🔹 Email format
    if (!email.includes("@")) {
      return res.status(400).send("Invalid email format");
    }

    // 🔹 Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // 🔹 Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Wrong password");
    }

    // 🎟️ Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});