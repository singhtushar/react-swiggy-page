import React from "react";
import { navElements } from "./Services/navElements";
import { details } from "./Services/restaurantDetails";
import Header from "../organism/header/header.jsx";
import RestaurantDetails from "./Components/DetailSection/restaurantDetails";
import Menu from "./Components/Menu/menu.jsx";
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM, SEARCH_ITEM, VEG_ONLY } from "../redux/actions";

const Restaurant = (props) => {
  console.log(props);
  return (
    <>
      <Header navContents={navElements} address={details.address} />
      <RestaurantDetails details={details} />
      <Menu
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        onSearch={props.onSearch}
        onVegOnly={props.onVegOnly}
        menuItems={props.menuItems}
        cart={props.cartItems}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    menuItems: state.menu.menuItems,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (item, menuItems, cartItems) =>
      dispatch(ADD_ITEM(item, menuItems, cartItems)),
    onRemove: (item, menuItems, cartItems) =>
      dispatch(REMOVE_ITEM(item, menuItems, cartItems)),
    onSearch: (str, menuItems) => dispatch(SEARCH_ITEM(str, menuItems)),
    onVegOnly: (toggle, cartItems) => dispatch(VEG_ONLY(toggle, cartItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
