import React, { useState } from "react";
import './navbar.css';
import swiggy_logo from '../../images/swiggy-1.svg';

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="left-wrapper">
        <li className="left-nav-elements"><img src={swiggy_logo} style={{height: 50, width: 50}} /></li>
        <li className="left-nav-element">Set location</li>
        <li className="left-nav-element">Choose Location <i className="fa fa-chevron-down"></i></li>
      </ul>
      <ul className="right-wrapper">
        <li className="right-nav-element"><i className="fa fa-search"></i> Search</li>
        <li className="right-nav-element">Offer</li>
        <li className="right-nav-element"><i className="fa fa-life-ring"></i> Help</li>
        <li className="right-nav-element"><i className="fa fa-user"></i> Sign In</li>
        <li className="right-nav-element"><i className="fa fa-cart-arrow-down"></i> Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
