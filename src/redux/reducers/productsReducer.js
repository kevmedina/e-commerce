import storeProducts from "../../data.json";

const initialState = {
  products: storeProducts.products,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const newProduct = state.products.filter(
        (product) => product.id === action.id
      );
      return {
        ...state,
        cart: [...state.cart, newProduct],
      };
    case "REMOVE_PRODUCT":
      const updatedCartItems = state.products.filter(
        (product) => product.id !== action.id
      );
      return {
        ...state,
        cart: updatedCartItems,
      };
    default:
      return state;
  }
};
