import React from "react";
import Product from "../Product/Product";
import storeProducts from "../../data.json";

const Products = () => {
  return (
    <div className="products">
      <h1 className="text-center m-5">Products</h1>
      <div className="product-list">
        {storeProducts.products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;
