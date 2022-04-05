import { menudata } from "../Services/menuItems";
export const renderOnSearch = (str, menuItem) => {
  console.log(menuItem);
  let newMenuState = [];
  menudata.forEach((item) => {
    if (item.Name.toLowerCase().includes(str.toLowerCase())) {
      let flag = false;
      if (menuItem !== undefined) {
        menuItem.forEach((menuItem) => {
          if (item.id === menuItem.id) {
            newMenuState.push(menuItem);
            flag = true;
          }
        });
      }
      if (!flag) newMenuState.push(item);
    }
  });
  return newMenuState;
};
