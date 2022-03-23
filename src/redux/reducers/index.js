import { combineReducers } from "redux";
import menu from "./menuReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  menuItems: menu,
  cart,
});

export default rootReducer;
