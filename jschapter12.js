/*async function greet(){
    console.log("hello");
}
greet();

 function getnum(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve(num);
       },2000);
});
 }
async function demo(){
    getnum();
    getnum();
}

let jsonres='{"fact":"Cats control the outer ear using 32 muscles; humans use 6","length":57}';
let validres=JSON.parse(jsonres);
console.log(jsonres);
console.log(validres);

let student={
    name:"John",
    age:20,
    city:"New York"
};*/

let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    console.log(res.json());
})
.catch((err)=>{
    console.log("ERROR -",err);
});