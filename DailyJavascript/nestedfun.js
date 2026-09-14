function outerFunction (name){
    function innerFunction (age){
        console.log(name + " is " + age + " years old.");
    }
    return innerFunction;
}
outerFunction("John")(25);