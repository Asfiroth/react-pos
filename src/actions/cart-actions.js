import * as types from "../constants/action-types";

export const addToCart = ({id, name, price, units = 1, discount = 0 }) => {
  return {
    type: types.ADD_TO_CART,
    payload: { id, name, price, units, discount }
  };
};

export const updateItemUnits = ({id, units}) => {
  return {
    type: types.UPDATE_PROD_CART_UNITS,
    payload: { id, units }
  };
};

export const updateItemPrice = ({id, price}) => {
  return {
    type: types.UPDATE_PROD_CART_PRICE,
    payload: {id, price}
  };
};

export const updateItemDiscount = ({id, discount}) => {
  return {
    type: types.UPDATE_PROD_CART_DISCOUNT,
    payload: {id, discount}
  };
};

export const selectProductItem = id => {
  return {
    type: types.SELECT_PROD_CART_ITEM,
    payload: {id}
  };
};

export const changeProductSign = id => {
  return {
    type: types.UPDATE_PROD_CART_SIGN,
    payload: {id}
  };
};

export const removeProduct = id => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {id}
  };
};
