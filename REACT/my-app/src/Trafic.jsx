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

//git commit -m "learn about useState hook where "The useState hook is a special function in React that allows you to add state to your functional components. State is like a way to store and manage data that can change over time. When you use the useState hook, you can create a piece of state and a function to update that state. This makes it easy to create interactive components that can respond to user actions or other events. For example, in the Trafic component, we use useState to keep track of the current color of the traffic light and update it when the buttons are clicked!"