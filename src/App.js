import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product-details" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
