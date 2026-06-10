import { createContext , useContext } from "react";

//context banao
const Usercontext = createContext();

//provide se wrap kro
function Useconcept(){
    return(
        <Usercontext.Provider value="Vaishnavi">
        <Usercontext.Provider value="Raj">
            <Child/>
            </Usercontext.Provider>
            <Child/>
        </Usercontext.Provider>
    )
}
//khi bhi use kro
function Child(){
    const user= useContext(Usercontext);
    return(
        <div>
            <h1> Hello {user} </h1>
        </div>
    )
}
export default Useconcept;