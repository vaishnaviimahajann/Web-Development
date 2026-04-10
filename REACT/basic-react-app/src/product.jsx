
import "./Product.css"
function Product(title, price, features){
    
    return(
        <div className="product">
            <h3>{title}</h3>
            <p>price:{price}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default Product;