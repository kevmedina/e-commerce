import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div>
        <img src={product.image} alt={product.title} />
      </div>

      <div>
        <h3>{product.title}</h3>
      </div>

      <div>
        <Link to="/product-details" className="product-link">
          Product Details
        </Link>
        <Link to="/cart" className="product-link">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
