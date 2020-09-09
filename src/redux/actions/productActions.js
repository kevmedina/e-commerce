export const addProduct = (product) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT", product });
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT", id });
};
