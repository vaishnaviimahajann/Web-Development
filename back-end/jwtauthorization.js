const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// 🔴 Dummy user
const user = {
  id: 1,
  email: "vaishnavi@gmail.com",
  password: "1234",
  role: "admin"
};

// 🟢 LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // check credentials
  if (email !== user.email || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // ✅ IMPORTANT: include role in token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  console.log("TOKEN:", token);

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

    console.log("USER VERIFIED:", verified);

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// 🔐 ADMIN MIDDLEWARE
function isAdmin(req, res, next) {
  console.log("ROLE CHECK:", req.user.role);

  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }

  next();
}

// 🟣 PROTECTED ROUTE
app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Welcome Vaishnavi 🔥",
    userId: req.user.id,
    role: req.user.role
  });
});

// 🟠 ADMIN ONLY ROUTE
app.delete("/users/:id", auth, isAdmin, (req, res) => {
  const id = req.params.id;

  res.json({
    message: `User ${id} deleted by admin`
  });
});

// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});