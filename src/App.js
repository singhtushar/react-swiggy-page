import "./App.css";
import React from "react";
import Restaurant from "./RestaurantPage/restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Checkout from "./CheckoutPage/checkout";

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Restaurant />} />
          <Route
            exact
            path="/Checkout"
            element={<Checkout cart={props.cartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu.menuItems,
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(App);
