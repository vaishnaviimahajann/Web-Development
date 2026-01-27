let name = "   h ello oo   ";

console.log(name);          // original

name = name.trim();
console.log(name);          // trim ke baad

name = name.toLowerCase();
console.log(name);          // lowercase

name = name.toUpperCase();
console.log(name);          // uppercase

let msg="hieee";
let repeat=msg.repeat(4);
console.log(repeat);
let str="i love javascript";
let index=str.indexOf("love");
console.log(index);
let replace=str.replace("love","do");
console.log(replace);
let slice=str.slice(2 ,5);
console.log(slice);
strr="apnacollege";
let slicee=strr.slice(-3); //11-3;

let student=["raj","vaishnavi"];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);


let mixarray=["om","hello",56,78.65];
console.log(mixarray[0]);
console.log(mixarray[1]);
console.log(mixarray[2]);
console.log(mixarray[3]);


let nums=[56,45,76,89,43,33];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);



let arr=[7,9,2,-2];
let n=3;
let ans=arr.slice(0,3);
console.log(ans);

let arrr=[7,9,0,-2];
let num=3;
let anss=arr.slice(arrr.length-n);
console.log(anss);

let strrr=[];
if(strrr.lenth==0){
   console.log("strinng is empty");
}
else{
    console.log("string not empty");
}