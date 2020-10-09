import storeProducts from "../../data.json";
import { ADD_PRODUCT, DELETE_PRODUCT, GET_CART_ITEMS } from "../actions/types";

const initialState = {
  products: storeProducts.products,
  cartItems: [],
  totalItemsInCart: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  outOfStock: "Item is out of stock",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = state.products.filter(
        (product) => product.id === action.payload
      );
      newProduct[0].inCart = true;

      return {
        ...state,
        cartItems: [...state.cartItems, newProduct],
        totalItemsInCart: state.totalItemsInCart + 1,
      };

    case DELETE_PRODUCT:
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        cartItems: state.cartItems.filter((_, i) => i !== index),
        totalItemsInCart: state.totalItemsInCart - 1,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
