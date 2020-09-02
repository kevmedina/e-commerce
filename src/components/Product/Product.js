import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to="/product-details" className="product-link">
        <div>
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h3>{product.title}</h3>
          <h3>${product.price}.00</h3>
        </div>
      </Link>
    </div>
  );
};

export default Product;
