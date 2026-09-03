let array = ["aaple", "banana", "cherry", "date"];
array.forEach(function(arrayy,index){
    console.log(array + index);
});

let mappedArray = array.map(function(arrayy){
    return arrayy.toUpperCase();
});
console.log(mappedArray);

let num=[1,2,3,4,5];
let filterarray = num.filter(function(num){
    return num%2==0;
});
console.log(filterarray);

let numbers = [10, 20, 30];

let total = numbers.reduce(function(sum, num) {
    return sum + num;
});
console.log(total);
