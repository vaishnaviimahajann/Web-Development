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

    ///empty fields
    if(!email  || !password){
        return res.status(400).send("email and password are required");
    }
    

    ///email format
     if(!email.includes("@")){
          return res.status(400).send("invalid email format");
     }

    // 🔹 Strong password + minimum 6 chars in one regex
            const strongPassword =
                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

          if (!strongPassword.test(password)) {
            return res.status(400).send(
                   "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
          );
    }
    
    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }
   

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      email,
      password: hashedPassword,
       role: role === "admin" ? "admin" : "user"
    });

    // save in DB
    await newUser.save();

    res.send("Signup successful");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});





app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});