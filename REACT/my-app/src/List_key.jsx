function Fruitlist(){
    const fruits = ['apple', 'banana', 'orange', 'grape'];
    return(
        <div>
             <h1>Fruit List</h1>
             <ul>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
             </ul>
        </div>
    )
}
export default Fruitlist;