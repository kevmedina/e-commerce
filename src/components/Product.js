import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div>
        <img src={product.img} alt="product" />
      </div>
      <div>
        <h3>{product.title}</h3>
      </div>
    </div>
  );
};

export default Product;
