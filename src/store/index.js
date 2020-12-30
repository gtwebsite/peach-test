import createDataContext from "./createDataContext";
import { productActions, productReducer, productInitialState } from "./productContext";

const actions = { ...productActions };

const reducer = ({ products }, action) => ({
  products: productReducer(products, action),
});

const initialState = {
  products: productInitialState,
};

export const { Context, Provider } = createDataContext(reducer, actions, initialState);