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

app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
  
    const user = users.find(u => u.id === id);

    if(!user){
        return res.send("user not found");
    }

    user.name=req.body.name || user.name;
    user.age=req.body.age || user.age;

    console.log("UPDATED USER:", user);
   console.log(users);
    res.json({
    message: "user updated",
    data: users
  });

  

});
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // user exist check
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.send("user not found");
  }

  // delete
  users = users.filter(u => u.id !== id);

  // 👇 updated array terminal me print
  console.log(users);

  res.json({
    message: "user deleted",
    data: users
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
