function hello(){
    console.log("inside hello function");
    console.log("Hello World");
}
hello();

function demo(){
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();

function one(){
    return 1;
}
function two(){
    return 2;
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();

h3=document.querySelector("h3");
setTimeout(function(){
h3.style.color="red";
},2000);
setTimeout(function(){
    h3.style.color="blue";
    },4000);

function savetodb(data){
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>5){
        console.log("data saved successfully");
    }else{
        console.log("data not saved");
    }
    console.log("saving to db");
}