function changetext(){
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