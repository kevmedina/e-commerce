import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ storeProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(storeProducts);
  }, [storeProducts]);

  return (
    <div className="products-container">
      <header>
        <h1 className="title">Products</h1>
      </header>

      <div className="product-list">
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (reduxStore) => {
  return {
    storeProducts: reduxStore.productsReducer.products,
  };
};

export default connect(mapStateToProps, null)(Products);
