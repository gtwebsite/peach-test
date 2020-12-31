const setProducts = dispatch => {
  return products => {
    dispatch({ type: "set_product", payload: products });
  };
};

export const productActions = {
  setProducts,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "set_product":
      return action.payload;
    default:
      return state;
  }
};

export const productInitialState = {
  cart: [],
  activeProduct: {},
  searchProduct: ""
};