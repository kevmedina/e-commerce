import React from "react";
import Product from "../Product/Product";
import storeProducts from "../../data.json";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <header>
        <h1 className="title">Products</h1>
      </header>

      <div className="product-list">
        {storeProducts.products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;
