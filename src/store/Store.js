import React from "react";
import Actions from "../actions/Actions";

export const Store = React.createContext(null);

const initialState = {
  category: [],
  products: [],
  purchaseHistory: []
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        category: action.payload.category,
        products: action.payload.products
      };
    case Actions.ADD_TO_PURCHASE_HISTORY:
      return {
        ...state,
        purchaseHistory: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
