import { useEffect } from "react";

function Useeffect() {
  useEffect(() => {         // ← return ke BAHAR
    console.log("useEffect called!");
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>
    </div>
  )
}

export default Useeffect;