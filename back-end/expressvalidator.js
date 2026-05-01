const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User Schema
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


// 🟢 SIGNUP ROUTE WITH EXPRESS-VALIDATOR
app.post(
  "/signup",
  [
    check("email")
      .trim()
      .toLowerCase()
      .isEmail()
      .withMessage("Invalid email format"),

    check("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
      .withMessage(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
      )
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      // Validation errors
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      const { email, password, role } = req.body;

      // Existing user check
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).send("User already exists");
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const newUser = new User({
        email,
        password: hashedPassword,
        role: role === "admin" ? "admin" : "user"
      });

      await newUser.save();

      res.status(201).send("Signup successful");

    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  }
);


// 🚀 SERVER
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});