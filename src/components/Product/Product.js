import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";

const Product = ({ product, addProduct }) => {
  return (
    <div className="product">
      <div>
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <Link to="/product-details" className="product-link">
          <h3>{product.title}</h3>
        </Link>
        <h3>${product.price}.00</h3>
      </div>
      <button onClick={() => addProduct(product.id)}>Add To Cart</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id) => dispatch(addProduct(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
