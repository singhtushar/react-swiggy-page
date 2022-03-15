import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import { sidemenu } from '../../Services/sidebarElements';
import { menudata } from '../../Services/menuItems';
import Mainmenu from './mainmenu/mainmenu';
import './menu.css';
import Cart from '../Menu/cart/cart';

class Menu extends Component {
    state = {  } 
    render() { 
        return (
        <div className="menu-container">
            <Sidemenu sidemenu={sidemenu} />
            <Mainmenu items={menudata} />
            <Cart />
            {/* <Mainmenu items={items} />
            <Cart cartItems={cart} /> */}
        </div>
        );
    }
}
 
export default Menu;