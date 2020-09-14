import React, { useState, useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/actions/productActions";

const Cart = ({ cartItems, deleteProduct }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    setItemsInCart(cartItems);
  }, [cartItems, itemsInCart]);

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
              {itemsInCart.map((product, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {product[0].title}
                      <img
                        src={product[0].image}
                        alt="product"
                        width="60"
                        height="60"
                      />
                    </td>
                    <td>1</td>
                    <td>
                      <button onClick={() => deleteProduct(product.id)}>
                        X
                      </button>
                    </td>
                    <td>${product[0].price}.00</td>
                  </tr>
                );
              })}
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
    cartItems: reduxStore.productsReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
