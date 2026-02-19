/*function changetext(){
    document.getElementById("parabtn").addEventListener("click",function(){
         document.getElementById("para").style.color="red";

    })};
changetext();

function changecolor(){
    document.getElementById("change").addEventListener("click",function(){
        document.querySelector("h1").style.color="pink";
    })
}
changecolor();

let color=["red","green","purple","black","red"];
let index=0;
function changecolor(){
    document.getElementById("btn").addEventListener("click",function(){
        document.getElementById("mypara").style.color=color[index];
         index++;

    if(index>=color.length){
        index=0;
    }
    })
   
}
changecolor();*/

let text=[
    "hello dear",
    "welcome to javascript language",
    "you are contineously changing paragrah text",
    "ok thankyou now u can leave from here",
];
let index=0;
function changetext(){
    document.getElementById("btn").addEventListener("click",function(){
        document.getElementById("mypara").innerHTML=text[index];
        index++;
        if(index>=text.length){
        index=0;
    }
    })
}
changetext();