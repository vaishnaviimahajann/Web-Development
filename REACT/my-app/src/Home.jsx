
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>

        <h1>Home Page</h1>

           <Link to="/about">Please click here to visit the about page</Link>
        </div>
    )
}
export default Home;