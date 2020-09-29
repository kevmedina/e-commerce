import storeProducts from "../../data.json";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_CART_ITEMS } from "../actions/types";

const initialState = {
  products: storeProducts.products,
  cartItems: [],
  itemsInCart: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = state.products.filter(
        (product) => product.id === action.payload.id
      );

      const subTotal = state.cartItems.reduce((accum, currentPrice) => {
        return accum + currentPrice[0].price;
      }, 0);

      return {
        ...state,
        cartItems: [...state.cartItems, newProduct],
        cartSubTotal: subTotal,
        itemsInCart: state.itemsInCart + 1,
      };

    case DELETE_PRODUCT:
      const updatedCartItems = [...state.cartItems].filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        itemsInCart: state.itemsInCart - 1,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
