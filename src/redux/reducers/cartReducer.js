const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload.newCartState;
    case "REMOVE_ITEM":
      return action.payload.newCartState;
    default:
      return state;
  }
};

export default cart;
