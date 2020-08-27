import React from "react";

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
        <p>{product.description}</p>
      </div>

      <div>
        <button>Product Details</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
