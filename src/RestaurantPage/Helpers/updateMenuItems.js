export const updateMenuItemOnAdd = (product, menuItems) => {
  let newMenuState = [...menuItems];
  newMenuState = newMenuState.map((item) => {
    if (item.id === product.id) {
      if (item.count === undefined) {
        item.count = 1;
      } else {
        item.count++;
      }
    }
    return item;
  });
  return newMenuState;
};

export const updateMenuItemOnRemove = (product, menuItems) => {
  let newMenuState = [...menuItems];
  newMenuState.forEach((item) => {
    if (item.id === product.id) {
      if (item.count > 0) {
        item.count--;
        if (item.count === 0) delete item.count;
      }
    }
  });
  return newMenuState;
};
