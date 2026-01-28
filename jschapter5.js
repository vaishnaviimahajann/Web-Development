const student={
    name:"vaishnavi",
    age:20,
    marks:89.78
};
console.log(student);

const post={
    username:"@vaishnavimahajan.com",
    content:"this is my first post",
    likes:145,
    repost:0,
    tags:["@apnaclg","delta"]

};
console.log(student);

const classinfo={
    aman:{
        grade:"a",
        city:"delhi"
    },
    vaishnavi:{
         grade:"b",
        city:"haryana"
    },
    haran:{
         grade:"c",
        city:"maharastra"
    }
}


const classinfoo=[
    {
        name:"raj",
        grade:"a",
        city:"delhi"
    },
    {
         name:"vaishnavi",
         grade:"b",
        city:"haryana"
    },
   {
         grade:"c",
        city:"maharastra"
    }
];


const max = prompt("enter a  maximum no"); 
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("you are right congatulations");
        break;
    } else {
        console.log("wrong guess");
        guess = prompt("guess the number again"); // 👈 ONLY FIX
    }
}
