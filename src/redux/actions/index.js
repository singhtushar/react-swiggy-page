import store from "../store";
export const ADD_ITEM = (product) => {
  let newMenuState = [...store.getState().menuItems];
  newMenuState = newMenuState.map((item) => {
    if (item.Name === product.Name) {
      if (item.count === undefined) {
        item.count = 1;
      } else {
        item.count++;
      }
    }
    return item;
  });

  let newCartState = [...store.getState().cart];
  if (newCartState.length === 0) newCartState = [{ ...product, count: 1 }];
  else {
    let flag = false;
    newCartState.forEach((item) => {
      if (item.Name === product.Name) {
        item.count++;
        flag = true;
      }
    });
    if (!flag) {
      newCartState.push({ ...product, count: 1 });
    }
  }
  return {
    type: "ADD_ITEM",
    payload: { newMenuState, newCartState },
  };
};

export const REMOVE_ITEM = (product) => {
  let newMenuState = [...store.getState().menuItems];
  newMenuState.forEach((item) => {
    if (item.Name === product.Name) {
      if (item.count > 0) {
        item.count--;
        if (item.count === 0) delete item.count;
      }
    }
  });

  let newCartState = [...store.getState().cart];
  newCartState.forEach((item, index) => {
    if (item.Name === product.Name) {
      item.count--;
      if (item.count === 0) newCartState.splice(index, 1);
    }
  });

  return {
    type: "REMOVE_ITEM",
    payload: { newMenuState, newCartState },
  };
};
