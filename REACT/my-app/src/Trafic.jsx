import { useState } from "react";

function Trafic(){
    const [color , setcolor]= useState("red");

    return(
        <div>
             <h1>Trafic Light</h1>
                <div style={{width:"100px", height:"100px", backgroundColor:color, borderRadius:"50%", margin:"20px auto"}}></div>
                <button onClick={() => setcolor("red")}>Red</button>
                
                <button onClick={() => setcolor("yellow")}>Yellow</button>
                
                <button onClick={() => setcolor("green")}>Green</button>
                <h2>Current color : {color}</h2>
        </div>
    )
}
export default Trafic;

