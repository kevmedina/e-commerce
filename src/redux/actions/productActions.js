import { ADD_PRODUCT, DELETE_PRODUCT, GET_CART_ITEMS } from "../actions/types";

export const addProduct = (id) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT, payload: id });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT, payload: id });
};

export const getCartItems = () => (dispatch) => {
  dispatch({ type: GET_CART_ITEMS });
};
