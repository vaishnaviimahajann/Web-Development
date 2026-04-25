const express = require ("express");
const session = require ("express-session");

const app = express();
app.use(express.json());


// 🔴 Session setup
app.use(session({
     secret: "mysecretkey",
     resave: false,
     saveUninitialized: true
}));

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

  if (email !== user.email || password !== user.password) {
    return res.status(401).send("Invalid credentials");
  }

  // 🔥 session me user store
  req.session.user = user;

  console.log("SESSION:", req.session);

  res.send("Login successful");
});


// 🔵 AUTH middleware
function auth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send("Not logged in");
  }
  next();
}


// 🟣 ADMIN middleware
function isAdmin(req, res, next) {
  if (req.session.user.role !== "admin") {
    return res.status(403).send("Access denied");
  }
  next();
}


// 🟢 PROTECTED ROUTE
app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Welcome user",
    user: req.session.user
  });
});


// 🔴 ADMIN ONLY DELETE
app.delete("/users/:id", auth, isAdmin, (req, res) => {
  res.send(`User ${req.params.id} deleted by admin`);
});


// 🟡 LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});


// 🚀 SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});