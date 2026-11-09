function greet(name) {
    console.log("Hello " + name);
}

console.log("Before");

setTimeout(greet, 2000, "Vaishnavi");

console.log("After");

//git add "settimeout.js"
//git commit -m "Add JavaScript setTimeout example"