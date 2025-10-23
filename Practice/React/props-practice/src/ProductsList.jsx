import ProductItem from "./ProductItem";
import "./productItem.css";

const products = [
  {
    name: "Wireless Headphones",
    price: 2999,
    rating: 4.5,
  },
  {
    name: "Smart Watch",
    price: 4999,
    rating: 4.2,
  },
  {
    name: "Bluetooth Speaker",
    price: 1999,
    rating: 4.7,
  },
];

function ProductsList() {
  return (
    <div className="productList">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;
