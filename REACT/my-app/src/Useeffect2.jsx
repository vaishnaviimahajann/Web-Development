import { useEffect, useState } from "react";

function Useeffect2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  )
}

export default Useeffect2;

//git commit -m "useEffect2 component created to fetch and display user data from API"