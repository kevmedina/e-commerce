import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div>
        <img src={product.img} alt="product" />
      </div>

      <div>
        <h3>{product.title}</h3>
      </div>

      <div>
        <Link to="/product-details">Product Details</Link>
        <Link to="/cart">Add To Cart</Link>
      </div>
    </div>
  );
};

export default Product;
