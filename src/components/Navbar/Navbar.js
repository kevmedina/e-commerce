import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
        <button>
          <span className="cart-icon">
            <i className="fas fa-cart-plus"></i>
          </span>
          My Cart
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
