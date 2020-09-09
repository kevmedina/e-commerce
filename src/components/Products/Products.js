import React from "react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products }) => {
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
    products: reduxStore.productsReducer.products,
  };
};

export default connect(mapStateToProps, null)(Products);
