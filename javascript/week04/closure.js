function outerFunction() {
    let count = 0;  // variable in outer scope

    function innerFunction() {
        count++;
        console.log("Count:", count);
    }

    return innerFunction;
}

const counter = outerFunction();

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3