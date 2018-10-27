import * as types from "../constants/action-types";

export const addToCart = item => {
  return { type: types.ADD_TO_CART, item };
};
