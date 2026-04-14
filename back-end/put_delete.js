const express = require("express");
const app = express();

app.use(express.json());

// 👇 data store
let user = {
  name: "vaishnavi",
  age: 22,
  city: "pune"
};

// GET
app.get("/user", (req, res) => {
  res.json(user);
});

// PUT (update name)
app.post("/user", (req, res) => {
  const { name } = req.body;

  user.name = name;

  res.json({
    message: "name updated",
    data: user
  });
});

// DELETE
app.delete("/user", (req, res) => {
  user = {}; // 👈 delete data

  res.json({
    message: "user deleted",
    data: user
  });
});

app.listen(5080, () => {
  console.log("Server is running on port 5080");
});