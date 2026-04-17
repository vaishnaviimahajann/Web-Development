const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ✅ Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// ✅ Model
const User = mongoose.model("User", userSchema);

// ✅ POST (save to DB)
app.post("/users", async (req, res) => {
  const newUser = new User(req.body);

  await newUser.save();
 console.log("NEW USER:", newUser);  
  res.json({
    message: "user saved to DB",
    data: newUser
  });
});

// ✅ GET (fetch from DB)
app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// ✅ server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});