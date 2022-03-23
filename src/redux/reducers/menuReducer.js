import { menudata } from "../../RestaurantPage/Services/menuItems";

const menu = (state = [...menudata], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload.newMenuState;
    case "REMOVE_ITEM":
      return action.payload.newMenuState;

    default:
      return state;
  }
};

export default menu;
