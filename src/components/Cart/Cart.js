import React from "react";
import "./Cart.css";
import { connect } from "react-redux";

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-container">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <section>
        {/* Table with products added to the cart */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Qty</th>
                <th>Remove</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1</td>
                <td>1</td>
                <td>X</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Checkout button section */}
        <div className="checkout-container">
          <div>
            <h1>DBDY</h1>
          </div>
          <div>
            <p>
              Subtotal <span>$0.00</span>
            </p>
            <p>
              Tax <span>$0.00</span>
            </p>
            <p>
              Total <span>$0.00</span>
            </p>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (reduxStore) => {
  return {
    cartItems: reduxStore.productsReducer.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
