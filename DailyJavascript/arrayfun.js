let arry = [1 ,2 ,3]
let result = arry.map(function(num){
    return num*2;
});
console.log(result);


let fruits = ['apple', 'banana', 'mango', 'orange'];
let result2 = fruits.filter(function(fruit){
    return fruit.length > 5;
});
console.log(result2);

let numbers = [1, 2, 3, 4, 5];
let result3 = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(result3);