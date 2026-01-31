const student={
    name:"vaishnavi",
    marks:45.65,
    m2:56.67,
    subject:"cs",
    getavg(){
        let avg=(this.marks+this.m2)/3;
        console.log(avg);
       console.log(`${this.name} got avg marks= ${avg}`);

        
    }
    
}
student.getavg();

try{
console.log(a);
}catch{
    console.log("caught an error ");
}

const sum=(a,b)=>{
    console.log(a+b);
};
sum(2,3);


/*
console.log("hie there");
setTimeout(()=>{
    console.log("apna college");
},4000);
console.log("welcome to")*/

console.log("my name is");
setTimeout(()=>{
    console.log("vaishnavi");
},2000);
console.log("mahajan")


const color={
    name:"purple",
    color:"purple"

}

//write a arrow functiom that returns a square of number name
const square =(n)=>n*n;
square(5);