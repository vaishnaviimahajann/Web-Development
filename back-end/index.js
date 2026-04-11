const express = require('express');
const app = express();

app.use(express.json());

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/user",(req,res)=>{
    res.send("vaishnavi");
});

app.post("/user", (req, res) => {
  console.log("BODY:", req.body);
  res.json(req.body);
});
app.get("/userr",(req,res)=>{
    res.json(
        {
            name:"vaishnavi",
            age:22,
            city:"pune"
        }
    )
});

app.get("/test", (req, res) => {
  console.log("TEST WORKING");
  res.send("ok");
});