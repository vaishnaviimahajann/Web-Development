const express = require ("express");
const mongose = require ("mongoose");

const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// 🔗 MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🧠 Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// 🟢 POST → SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // check already exists
  const existing = await User.findOne({ email });
  if (existing) {
    return res.send("User already exists");
  }

  // 🔐 hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save
  const newUser = new User({
    email,
    password: hashedPassword
  });

  await newUser.save();

  res.send("Signup successful");
});


// 🔵 POST → LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
   
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
});


// 🟣 GET → All users (for checking)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// 🚀 server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});