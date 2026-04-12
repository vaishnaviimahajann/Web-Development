const express = require('express');
const app = express();

// ✅ IMPORTANT: body parser middleware
app.use(express.json());

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});

app.get("/",(req,res)=>{
    res.send("hello from get");
    
});

app.get("/get",(req,res)=>{
    res.send("name:vaishnavi,age:22,city:pune");
});

app.post("/getjson",(req,res)=>{
    const data = {
        name:"vaishnavi",
        age:22,
        city:"pune"
    };
    console.log(data);
});

app.post("/post",(req,res)=>{
    console.log(req.body);
    res.send("hello from post");
});

