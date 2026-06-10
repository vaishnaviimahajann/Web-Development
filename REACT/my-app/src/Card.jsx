import Header from "./header";
import Footer from "./footer";

function Card(props) {
  return (
    <div>
      <Header />
      <h1>Hello, I am {props.name}</h1>
      <Footer />
    </div>
  )
}

export default Card;


//git commit -m " learn about component where "A component is like a reusable piece of code that represents a part of the user interface. Just like you have different parts of a recipe — the ingredients, the instructions, and the presentation — a component can represent any part of your app, such as a header, a footer, or a card. Components help you break down your app into smaller, manageable pieces that can be reused and maintained easily!"