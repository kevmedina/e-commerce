export const addProduct = (product) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT", product });
};

export const removeProduct = (product) => (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT", product });
};
