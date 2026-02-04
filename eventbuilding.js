let div=document.querySelector("div");
/*let ul=document.querySelector("ul");*/
let lis=document.querySelectorAll("li");


div.addEventListener("click",function(){
    console.log("div clicked");
});

ul.addEventListener("click",function(){
    console.log("ul clicked");
    event.stopPropagation();
});

for(let li of lis){
    li.addEventListener("click",function(){
        console.log("li clicked");
        event.stopPropagation();
    });
}

let btn=document.querySelector("button");
let ul = document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    console.log(inp.value);
    ul.appendChild(item);
    inp.value="";
})

