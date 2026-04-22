const mongoose = require('mongoose');

let rul="https://localhost:8080/users";



main().then((res)=>{
    console.log("connected to mongodb");
})
.catch(err=>{console.error(err);});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const user=mongoose.model("User",userSchema);

/*

const user1=new user({
    name:"John ",
    email:"john@example.com",
    age:30
});*/
/*
user.insertMany([
    { name:"John ",email:"john@example.com",age:30 },
    { name:"Jane ",email:"jane@example.com",age:25 },
    { name:"Doe ",email:"doe@example.com",age:30 }

]).then((res)=>{
    console.log("users inserted");
})

//user1.save();

user.findOne({_id: "69ac3804ad00e7dd2ab9afda"}).then((res)=>{
    console.log(res);
}).catch(err=>{console.error(err);});

*/

user.updateOne({_id: "69ac3804ad00e7dd2ab9afda"},{name:"vaishnaviiiiiiiiiiiiiii"}).then((res)=>{
    console.log("user updated");
}).catch(err=>{console.error(err);});

user.deleteOne({name:"john",name:"jane"}).then((res)=>{
    console.log("user deleted");
}).catch(err=>{console.error(err);});