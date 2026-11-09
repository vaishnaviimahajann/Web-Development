console.log("Start");

setTimeout(() => {
    console.log("Task 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Task 2");
}, 0);

console.log("End");

