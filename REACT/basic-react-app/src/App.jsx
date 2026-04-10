import "./App.css";
//import Title from "./titlle,jsx";
import Product from "./product.jsx";
import MessageBox from "./messagebox.jsx";
function Title(){
  return <h1> I am the title</h1>;
}
function App() {
  return( 
    <>
     <Product title="Product 1" price={19.99} features={["Feature 1", "Feature 2"]} />
      <Product title="Product 2" price={29.99} features={["Feature 3", "Feature 4"]} />
      <MessageBox username="Vaishnavi" message="Welcome to React!" />
    </>
  );
}

export default App;
