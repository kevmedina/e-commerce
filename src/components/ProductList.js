import React from "react";
import Product from "./Product";
import { storeProducts } from "../data";

const ProductList = () => {
  return (
    <div className="products">
      <h1 className="text-center m-5">Products</h1>
      <div className="product-list">
        {storeProducts.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
