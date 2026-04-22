const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connected to mongodb");
})
.catch((err)=>console.error(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    publishedDate:{
        type:Date,
    },
    pages:{
        type:Number,
    }
});
const Book = mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    publishedDate:new Date("1925-04-10"),
    pages:180
});

book1.save().then((res)=>{
    console.log("book saved");
}).catch((err)=>{
    console.error(err);
});