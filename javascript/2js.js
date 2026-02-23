/*document.getElementById("btn").addEventListener("click",function(){
          let div=document.querySelectorAll(".div1");
          for (let i = 0; i < div.length; i++) {
                     div[i].style.backgroundColor = "yellow";
}
})*/
let count=0;
document.getElementById("increase").addEventListener("click",function(){
    count++;
    document.getElementById("count").innerText=count;
})
document.getElementById("decrease").addEventListener("click",function(){
    count--;
    document.getElementById("count").innerText=count;
})