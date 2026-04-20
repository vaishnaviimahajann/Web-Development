const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    id:Number,
    name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// 🔵 GET all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
});


// 🟢 POST (add user with validation)
app.post("/users", async (req, res) => {
  
  try {
    const { name, age } = req.body;

    // 🔥 validation
    if (!name || !age) {
      return res.status(400).json({
        message: "name and age are required"
      });
    }

    if (age < 0 || age > 100) {
      return res.status(400).json({
        message: "age must be positive"
      });
    }


    const newUser = new User({ name, age });
    await newUser.save();

    console.log("USER ADDED:", newUser);

    res.json({
      message: "user added",
      data: newUser
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
});


// 🟡 PUT (update user by id)
app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "user not found"
      });
    }

    // update
    user.name = name || user.name;
    user.age = age || user.age;

    await user.save();

    console.log("UPDATED USER:", user);

    res.json({
      message: "user updated",
      data: user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
});


// 🔴 DELETE (delete by id)
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "user not found"
      });
    }

    console.log("DELETED USER:", user);

    res.json({
      message: "user deleted",
      data: user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
});


// 🚀 server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});