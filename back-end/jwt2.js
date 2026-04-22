const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// 🔴 Dummy user
const user = {
  id: 1,
  email: "vaishnavi@gmail.com",
  password: "1234"
};


// 🟢 LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: "1h" // 🔥 expiry add kiya
  });

  console.log("TOKEN:", token); // terminal me dikhega

  res.json({
    message: "Login successful",
    token
  });
});


// 🔵 AUTH MIDDLEWARE
function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token" });
  }

  const token = header.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;

    console.log("USER VERIFIED:", verified); // terminal log

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}


// 🟣 PROTECTED ROUTE
app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Welcome Vaishnavi 🔥",
    userId: req.user.id
  });
});


// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});