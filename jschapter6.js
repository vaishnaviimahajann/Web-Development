function hello(){
    console.log("hiee");
}
hello();

function printpoem(){
    console.log("twinkle twinkle little star");
    console.log("how i wonder what you are");
}
printpoem();
printpoem();

//create a function to roll a dice 7 alwyas  display the value of dice(1to6)
function rolldice(){
    let random=Math.floor(Math.random()*6)+1;
console.log(random);
}
rolldice();


function hie(name){
    console.log(name);
}
hie("vaishnavi");

function sum(a,b){
    console.log(a+b);
}
sum(2,3);
sum(21,32);
sum(2,13);

//create a function that gives average of 3 numbers

function avg(a,b,c){
    let avg=console.log(a+b+c)/3;
    console.log(avg);
}
avg(3,3,3);



//function that creates multiplication table
function table(n){
    for(let i=1;i<n*10;i+=n){
        console.log(i);
    }
}
table(2);

//create a function that calculates sum of n num


function sum(n) {
    let summ = 0;
    for (let i = 1; i < n; i++) {
        summ += i;
    }
    return summ;
}

sum(8); // 28


function outerfun(){
    let x=5;
    let y=7;
    function innerfun(){
        console.log(x);
         console.log(y);
    }
    innerfun();
}

function outerfun(){
    
    function innerfun(){
        console.log(x);
         console.log(y);

         let x=5;
    let y=7;
    }
    innerfun();
}


   
function oddeventest(request)
{
    if(request=="odd"){
          let odd=function(n){
        console.log(!(n%2==0));
    }
    return odd;
    }else if(request =="even"){
          let even=function(n){
        console.log((n%2==0));
    }
    return even;
    }else{
        console.log("wrong rewquest");
    }
}

let request="odd";