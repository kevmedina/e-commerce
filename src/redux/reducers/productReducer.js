const initialState = {
  products: [],
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
      };
    default:
      return state;
  }
};
