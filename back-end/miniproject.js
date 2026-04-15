const express = require("express");
const app = express();


app.use(express.json());

let users=[
    {
        id : 1, name:"vaishnavi" , age:22
    },
    {
         id : 2, name:"sita" , age:23
    }
];

app.get("/users",(req,res)=>{
    res.json(users);
});


//post add new user
app.post("/users",(req,res)=>{
    const newUser={
        id : users.length + 1 ,
        name : req.body.name,
        age  : req.body.age

    };
    users.push(newUser);

      console.log("NEW USER:", newUser);   // 👈 terminal me print
  console.log("ALL USERS:", users);    // 👈 pura array print


     res.json({
    message: "user added",
    data: users
  });
})


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
/*const express = require("express");
const app = express();

app.use(express.json());

// 👇 temporary database
let users = [
  { id: 1, name: "vaishnavi", age: 22 },
  { id: 2, name: "rahul", age: 25 }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST (add user)
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  users.push(newUser);

  res.json({
    message: "user added",
    data: users
  });
});

// PUT (update user by id)
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.send("user not found");
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.json({
    message: "user updated",
    data: users
  });
});

// DELETE (delete user by id)
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({
    message: "user deleted",
    data: users
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});*/