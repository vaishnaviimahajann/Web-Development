// ==========================================
// Module 2 Practice
// Topics:
// 1. Primitive vs Non-Primitive
// 2. Pass by Value
// 3. Pass by Reference (Copy of Reference)
// 4. Mutable vs Immutable
// 5. Global Scope
// 6. Function Scope
// ==========================================

console.log("========== Primitive vs Non-Primitive ==========");

// Primitive
let a = 10;
let b = a;

b = 20;

console.log("a =", a);
console.log("b =", b);

console.log("--------------------------------");

// Non-Primitive
let obj1 = {
    name: "Vaishnavi"
};

let obj2 = obj1;

obj2.name = "Alex";

console.log(obj1.name);
console.log(obj2.name);

console.log("===============================================\n");

// ==========================================
// Pass by Value
// ==========================================

console.log("========== Pass by Value ==========");

function changeNumber(num) {
    num = 100;
}

let number = 10;

changeNumber(number);

console.log(number);

console.log("===================================\n");

// ==========================================
// Pass by Reference (Copy of Reference)
// ==========================================

console.log("========== Pass by Reference ==========");

function changePerson(person) {
    person.name = "Rahul";
}

let user = {
    name: "Vaishnavi"
};

changePerson(user);

console.log(user.name);

console.log("=======================================\n");

// ==========================================
// Mutable vs Immutable
// ==========================================

console.log("========== Mutable ==========");

let arr = [1, 2];

arr.push(3);

console.log(arr);

console.log("-----------------------------");

console.log("========== Immutable ==========");

let str = "Hello";

str[0] = "Y";

console.log(str);

console.log("-----------------------------");

let language = "Java";

language += "Script";

console.log(language);

console.log("================================\n");

// ==========================================
// Global Scope
// ==========================================

console.log("========== Global Scope ==========");

let company = "Google";

function employee() {
    console.log(company);
}

employee();

console.log(company);

console.log("==================================\n");

// ==========================================
// Function Scope
// ==========================================

console.log("========== Function Scope ==========");

function greet() {
    let message = "Hello";

    console.log(message);
}

greet();

// Uncomment to see the error
// console.log(message);

console.log("====================================\n");

// ==========================================
// Global vs Function Scope
// ==========================================

console.log("========== Global vs Function Scope ==========");

let city = "Mumbai";

function showCity() {
    let city = "Pune";

    console.log(city);
}

showCity();

console.log(city);

console.log("==============================================\n");

// ==========================================
// Undefined vs ReferenceError
// ==========================================

console.log("========== Undefined ==========");

let x;

console.log(x);

console.log("-------------------------------");

// Uncomment to see ReferenceError
// console.log(y);

console.log("================================");