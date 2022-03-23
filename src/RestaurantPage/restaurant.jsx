import React from "react";
import { navElements } from "./Services/navElements";
import { details } from "./Services/restaurantDetails";
import Header from "../organism/header/header.jsx";
import RestaurantDetails from "./Components/DetailSection/restaurantDetails";
import Menu from "./Components/Menu/menu.jsx";
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/actions";

const Restaurant = (props) => {
  console.log("props", props);
  return (
    <>
      <Header navContents={navElements} address={details.address} />
      <RestaurantDetails details={details} />
      <Menu
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        menuItems={props.menuItems}
        cart={props.cart}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menuItems,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (item) => dispatch(ADD_ITEM(item)),
    onRemove: (item) => dispatch(REMOVE_ITEM(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
