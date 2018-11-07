import * as types from "../constants/action-types";
import * as inmutable from "../helpers/array-helpers";

const findProductIndex = (products, productToFind) => {
  if(typeof(productToFind) === 'undefined') return -1;
  return products.findIndex((p) => p.id === productToFind.id)
}

const addProd = (products, newProd) => {
  const index = findProductIndex(products, newProd);
  if (index !== -1) {
    let prod = Object.assign({}, products[index], { units: products[index].units + 1 });
    return inmutable.replaceAt(products, index, prod);
  }
  return inmutable.push(products, newProd);
};

const updateUnits = (products, product) => {
  const index = findProductIndex(products, product);
  let newUnits = 0;
  if(products[index].units == 1) newUnits = product.units;
  else newUnits = parseInt(`${products[index].units}${product.units}`);
  let prod = Object.assign({}, products[index], {units: newUnits});
  return inmutable.replaceAt(products, index, prod);
}

const updateDsct = (products, product) => {
  const index = findProductIndex(products, product);
  let disc = parseInt(`${products[index].discount}${product.discount}`);
  if(disc > 100) disc = 100;
  let prod = Object.assign({}, products[index], {discount: disc});
  return inmutable.replaceAt(products, index, prod);
}

const changeSign = (products, product) => {
  const index = findProductIndex(products, product);
  let prod = Object.assign({}, products[index], {price: products[index].price * -1});
  return inmutable.replaceAt(products, index, prod);
}

const updatePrice = (products, product) => {
  const index = findProductIndex(products, product);
  let price = parseInt(`${products[index].price}${product.price}`);
  let prod = Object.assign({}, products[index], {price: price});
  return inmutable.replaceAt(products, index, prod);
}

const removeProduct = (products, product) => {
  const index = findProductIndex(products, product);
  return inmutable.deleteItem(products, index);
}

const cartReducer = (state = { }, action) => {
  if(typeof(state.products) === 'undefined') return state;
  let { products } = state;

  switch(action.type){
    case types.ADD_TO_CART:
      products = addProd(products, action.payload);
      return Object.assign({}, state, {products: products});
    case types.REMOVE_FROM_CART:
      products = removeProduct(products, action.payload);
      return Object.assign({}, state, { products: products });
    case types.SELECT_PROD_CART_ITEM:
      return Object.assign({}, state, { selectedItem: action.payload.id })
    case types.UPDATE_PROD_CART_PRICE:
      products = updatePrice(products, action.payload);
      return Object.assign({}, state, { products: products });
    case types.UPDATE_PROD_CART_UNITS:
      products = updateUnits(products, action.payload);
      return Object.assign({}, state, {products: products});
    case types.UPDATE_PROD_CART_SIGN:
      products = changeSign(products, action.payload);
      return Object.assign({}, state, {products: products});
    case types.UPDATE_PROD_CART_DISCOUNT:
      products = updateDsct(products, action.payload);
      return Object.assign({}, state, {products: products});
    default:
      return state;
  }
}

export default cartReducer;
