function greet(name){
      console.log("hello" +name);
}
function callback(callback, name){
    callback(name);
}
callback(greet , "John");