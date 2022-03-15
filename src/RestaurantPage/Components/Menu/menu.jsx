import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import { sidemenu } from '../../Services/sidebarElements';
import Mainmenu from './mainmenu/mainmenu';
import './menu.css';
import Cart from '../Menu/cart/cart';

class Menu extends Component {
    state = {
        cart: [],
    }

    handleIncrement = (product) => {
        console.log('increment', product);

        let exist = false;
        let newCart = this.state.cart;

        newCart.forEach((ele) => {
            if (ele.product.id === product.id) {
                ele.qty += 1;
                exist = true;
            }
        });

        if (exist) {
            this.setState({ cart: newCart });
        } else {
            let newProduct = { product, qty: 1 };
            this.setState({ cart: [...newCart, newProduct] });
        }
    }

    handleDecrement = (product) => {
        console.log('decrement', product);

        let exist = false;
        let newCart = this.state.cart;

        newCart.forEach((ele, index) => {
            if (ele.product.id === product.id) {
                ele.qty -= 1;
                if (ele.qty === 0) {
                    newCart.splice(index, 1);
                }
                exist = true;
            }
        });

        this.setState({ cart: newCart })

    }

    render() {
        console.log(this.state.cart)
        return (
            <div className="menu-container">
                <Sidemenu sidemenu={sidemenu} />
                <Mainmenu onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} cart={this.state.cart} />
                <Cart onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} cart={this.state.cart} />
            </div>
        );
    }
}

export default Menu;