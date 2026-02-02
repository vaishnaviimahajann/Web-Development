let arr=[1,2,3,4,5];
let print =function(el){
    console.log(el);

};
arr.forEach(print);

let num=[1,2,3,4,5];
let newarr=num.map(function(el){
    return el*2;
});

let plus=[2,3,4,5,6,7];
let newplus=plus.map(function(el){
    return el+5;

});


let square =[9,16,23,45];
let newsquare=square.map((square)=>square*square);
console.log(newsquare);




let number=[1,2,3,4,5,5,6];
let ans=number.filter(el=>{
    return el%2==0;

});
console.log(ans);

let numbers=[1,2,3,4,5];
let finalval=numbers.reduce((res,el)=>res+el);
console.log(finalval);

//find maximum value in array using reduce
let max=-1;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log(max);

let maxval=numbers.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
},-1);
console.log(maxval);

function sum(a,b=2){
    return a+b;
}
sum(4);


let names=["apple","banana","grapes","mango"];
let [winner,runnerup,secondrunnerup]=names;
 