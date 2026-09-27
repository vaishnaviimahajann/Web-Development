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

let color = ['red', 'green', 'blue', 'yellow'];
color.forEach(function(col){
    console.log(col);
});  //forEach() is an array method that executes a provided function once for each element of an array.


let arr = [1, 2, 3, 4, 5];
let result4 = arr.find(function(num){
    return num > 3;
});
console.log(result4);  //find() is an array method that returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let numberss = [1, 3, 5, 8];

let result5 = numberss.some(function(num) {
    return num % 2 === 0;
});
console.log(result5);


//some and every function are both gives bolean result

let flowers = ["lily" , "jasmine" , "rose" , "mogra"];
flowers.sort();
console.log(flowers);