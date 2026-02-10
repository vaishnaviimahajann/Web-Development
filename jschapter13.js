/*let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innertext=fact;
})

let url="https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js";
async function getFacts(params) {
    try{
        let res=await axios.get(url);
        return res.data.fact;

    }catch(e){
        console.log("error-",e);
        return "no fact found";
    }
}*/

const url="https://icanhazdad.com";
async function  getjokes(params) {
    try{
        const config={headers:{Accept : "application/json"}};
        let res= await axios.get(url,config);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}