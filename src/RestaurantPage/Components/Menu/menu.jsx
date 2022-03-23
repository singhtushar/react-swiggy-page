import React, { Component } from "react";
import Sidemenu from "./sidemenu/sidemenu";
import { sidemenu } from "../../Services/sidebarElements";
import Mainmenu from "./mainmenu/mainmenu";
import "./menu.css";
import Cart from "../Menu/cart/cart";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <Sidemenu sidemenu={sidemenu} />
        <Mainmenu
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          menuItems={this.props.menuItems}
          cart={this.props.cart}
        />
        <Cart
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

export default Menu;
