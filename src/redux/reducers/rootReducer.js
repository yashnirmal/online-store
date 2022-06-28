import { combineReducers } from "redux";
import { productReducer, cartReducer } from "./index.js";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

export default rootReducer;