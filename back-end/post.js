const express = require("express");
const app= express();


// ✅ IMPORTANT: body parser middleware because we are sending data in json format from postman

app.use(express.json());

app.post("/getpostdata",(req,res)=>{
    console.log(req.body); // it will send you the data;

    res.json({
        message:"data recived",
        data : req.body
    });
});

app.listen(5080,()=>{
    console.log("Server is running on port 5080");
});

