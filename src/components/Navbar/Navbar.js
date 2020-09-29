import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import { getCartItems } from "../../redux/actions/productActions";

const Navbar = (props) => {
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Shop
        </NavLink>
      </div>
      <NavLink to="/cart" className="cart-link">
        <span className="cart-icon">
          <i className="fas fa-cart-plus"></i>
        </span>
        <span>{props.itemsInCart}</span>
      </NavLink>
    </nav>
  );
};

const mapStateToProps = (reduxStore) => {
  return {
    itemsInCart: reduxStore.productsReducer.itemsInCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems: () => dispatch(getCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
