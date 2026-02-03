/*let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    alert("button clicked");
};
btn.onmouseenter=function(){
    console.log("mouse entered button");
};
*/
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("Generate a Random color");
    let h3=document.querySelector("h3");
    let RandomColor=getRandomColor();
    h3.innerText=RandomColor;
    let div=document.querySelector("div");
    div.style.backgroundColor=RandomColor;

    console.log("color updated")

});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}

let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log("key is pressed",event.key);
});