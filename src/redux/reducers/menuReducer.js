import { menudata } from "../../RestaurantPage/Services/menuItems";

const initState = {
  menuItems: [...menudata],
};

const menu = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, menuItems: action.payload.newMenuState };
    case "REMOVE_ITEM":
      return { ...state, menuItems: action.payload.newMenuState };
    case "SEARCH_ITEM":
      return { ...state, menuItems: action.payload.newMenuState };
    case "VEG_ONLY":
      return { ...state, menuItems: action.payload.newMenuState };

    default:
      return state;
  }
};

export default menu;
