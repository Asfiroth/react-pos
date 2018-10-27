import * as types from "../constants/action-types";

const cartReducer = (state = {}, action) =>{
  switch(action.type){
    case types.ADD_TO_CART:
      return Object.assign(state, {}, { cart: action.cart })
    default:
      return state;
  }
}

export default cartReducer;
