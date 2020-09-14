import storeProducts from "../../data.json";

const initialState = {
  products: storeProducts.products,
  cartItems: [],
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
      localStorage.setItem("itemsInCart", JSON.stringify(newProduct));
      return {
        ...state,
        cartItems: [...state.cartItems, newProduct],
      };

    case "REMOVE_PRODUCT":
      const updatedCartItems = state.cartItems.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("itemsInCart", JSON.stringify(updatedCartItems));
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};
