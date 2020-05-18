import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>
      <NavLink to="/cart" className="ml-auto">
        <button>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          My Cart
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
