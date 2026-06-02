import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      
      <div style={{
        backgroundColor: isLoggedIn ? "#1a4a1a" : "#4a1a1a",
        padding:"30px",
        borderRadius:"10px",
        width:"300px",
        margin:"auto"
      }}>
        <h2 style={{color: isLoggedIn ? "lightgreen" : "salmon"}}>
          {isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}
        </h2>
        
        {isLoggedIn ? <h1>Welcome <h1></h1>Vaishnavi!</h1> : <h1>Please Login</h1>}
        
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

    </div>
  )
}

export default App;