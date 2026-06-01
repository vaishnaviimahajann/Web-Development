import { useState } from "react";

function Input(){
    const [text , settext] = useState("");

    return(
        <div>
              <input onChange={(e) => settext(e.target.value)} />
          <h1>Tu likh rahi hai: {text}</h1>
        </div>
    )
}
export default Input;