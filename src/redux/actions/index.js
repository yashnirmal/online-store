import actionTypes from "../constants/actionTypes";

export const setProducts=(products)=>{
    return {
        type:actionTypes.SET_PRODUCT,
        payload:products
    }
}

export const addToCart=(product)=>{
    return {
      type: actionTypes.ADD_TO_CART,
      payload: product,
    };
}

export const removeFromCart=(product)=>{
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: product,
    };
}

export const incQuantity=(productId)=>{
  return {
    type: actionTypes.INC_QUANTITY,
    payload: productId
  }
}

export const decQuantity=(productId)=>{
  return {
    type: actionTypes.DEC_QUANTITY,
    payload: productId
  }
}