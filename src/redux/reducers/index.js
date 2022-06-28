import actionTypes from "../constants/actionTypes.js";

const allProductsinitialState=[];
const cartProductsInitialState=[];


export const productReducer = (state = allProductsinitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT:
      return state=action.payload;
    default:
      return state;
  }
};

export const cartReducer = (state = cartProductsInitialState,action)=>{
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        return [...state, action.payload];
      case actionTypes.REMOVE_FROM_CART:
        return (state = state.filter(
          (el, index) => el.id != action.payload.id
        ));
      case actionTypes.INC_QUANTITY:
        return (state = state.map((el, index) => {
          el.quantity = el.id == action.payload ? el.quantity + 1 : el.quantity;
          return el;
        }));
      case actionTypes.DEC_QUANTITY:
        return state.map((el, index) => {
          if (el.id == action.payload){
            if (el.quantity>1){
              el.quantity = el.quantity-1;
            }
          }
          return el;
        });
      default:
        return state;
    }
}
