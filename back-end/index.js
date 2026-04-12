const express = require("express");
const app = express();

// middleware (IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server start
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

// GET routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.send("vaishnavi");
});

app.get("/userr", (req, res) => {
  res.json({
    name: "vaishnavi",
    age: 22,
    city: "pune",
  });
});

app.get("/test", (req, res) => {
  console.log("TEST WORKING");
  res.send("ok");
});

// POST route
app.post("/user", (req, res) => {
  console.log("HEADERS:", req.headers["content-type"]);
  console.log("BODY:", req.body);

  res.json({
    message: "Data received successfully",
    data: req.body,
  });
});