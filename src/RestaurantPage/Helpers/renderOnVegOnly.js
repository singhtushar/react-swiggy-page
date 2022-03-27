import { menudata } from "../Services/menuItems";
export const renderOnVegOnly = (toggle, cartItem) => {
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
};
