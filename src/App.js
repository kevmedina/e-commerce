import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/product-details" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
