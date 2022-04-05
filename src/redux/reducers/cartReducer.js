const initState = {
  cartItems: [],
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: action.payload.newCartState };
    case "REMOVE_ITEM":
      return { ...state, cartItems: action.payload.newCartState };
    default:
      return state;
  }
};

export default cart;
