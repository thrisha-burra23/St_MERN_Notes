import "./ProductItem.css";

function ProductItem({name,price,rating}){
    return(
        <div className="productItem">
            <h1>{name}</h1>
            <h4>{price}</h4>
            <p>{rating}</p>
        </div>
    )
}

export default ProductItem;