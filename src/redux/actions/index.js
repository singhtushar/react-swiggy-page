import { renderOnSearch } from "../../RestaurantPage/Helpers/renderSearchItems";
import {
  updateCartItemOnAdd,
  updateCartItemOnRemove,
} from "../../RestaurantPage/Helpers/updateCartItems";
import {
  updateMenuItemOnAdd,
  updateMenuItemOnRemove,
} from "../../RestaurantPage/Helpers/updateMenuItems";
import { menudata } from "../../RestaurantPage/Services/menuItems";
export const ADD_ITEM = (product, menuItems, cartItems) => {
  let newMenuState = updateMenuItemOnAdd(product, menuItems);
  let newCartState = updateCartItemOnAdd(product, cartItems);
  return {
    type: "ADD_ITEM",
    payload: { newMenuState, newCartState },
  };
};

export const REMOVE_ITEM = (product, menuItems, cartItems) => {
  let newMenuState = updateMenuItemOnRemove(product, menuItems);
  let newCartState = updateCartItemOnRemove(product, cartItems);

  return {
    type: "REMOVE_ITEM",
    payload: { newMenuState, newCartState },
  };
};

export const SEARCH_ITEM = (str, menuItem) => {
  console.log(menuItem);
  let newMenuState = renderOnSearch(str, menuItem);
  return {
    type: "SEARCH_ITEM",
    payload: { newMenuState },
  };
};

export const VEG_ONLY = (toggle, cartItem) => {
  let menuItems = [...menudata];
  let newMenuState = [];
  if (toggle === false) {
    if (cartItem !== undefined) newMenuState = [...cartItem];
    menudata.forEach((item) => {
      let flag = false;
      if (cartItem !== undefined) {
        cartItem.forEach((cartItem) => {
          if (item.id === cartItem.id) flag = true;
        });
      }
      if (!flag) {
        newMenuState.push(item);
      }
    });
  } else newMenuState = menuItems.filter((item) => item.isVeg === true);
  return {
    type: "VEG_ONLY",
    payload: { newMenuState },
  };
};
