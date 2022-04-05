export const updateCartItemOnAdd = (product, cartItems) => {
  let newCartState = [...cartItems];
  if (newCartState.length === 0) newCartState = [{ ...product, count: 1 }];
  else {
    let flag = false;
    newCartState.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        flag = true;
      }
    });
    if (!flag) {
      newCartState.push({ ...product, count: 1 });
    }
  }
  return newCartState;
};

export const updateCartItemOnRemove = (product, cartItems) => {
  let newCartState = [...cartItems];
  newCartState.forEach((item, index) => {
    if (item.id === product.id) {
      item.count--;
      if (item.count === 0) newCartState.splice(index, 1);
    }
  });
  return newCartState;
};
