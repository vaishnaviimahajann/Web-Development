const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey"; // 🔐

// 🔴 Dummy user (simple learning ke liye)
const user = {
  id: 1,
  email: "vaishnavi@gmail.com",
  password: "1234"
};


// 🟢 LOGIN ROUTE
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // check email
  if (email !== user.email) {
    return res.status(401).send("Invalid email");
  }

  // check password
  if (password !== user.password) {
    return res.status(401).send("Invalid password");
  }

  // 🔥 create token
  const token = jwt.sign({ id: user.id }, SECRET_KEY);

  res.json({
    message: "login successful",
    token: token
  });
});


// 🔵 Middleware (token check)
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
    message: "Welcome user",
    userId: req.user.id
  });
});


// 🚀 SERVER START
app.listen(5000, () => {
  console.log("Server running on port 5000");
});