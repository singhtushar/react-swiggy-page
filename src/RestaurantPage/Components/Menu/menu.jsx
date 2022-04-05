import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import { sidemenu } from '../../Services/sidebarElements';
import Mainmenu from './mainmenu/mainmenu';
import './menu.css';
import Cart from '../Menu/cart/cart';
import { menudata } from '../../Services/menuItems'

class Menu extends Component {
    state = {
        totalMenu : [],
        filteredMenu : [],
        cart: [],
    }

    componentDidMount() {
        this.setState({
            totalMenu : menudata,
            filteredMenu : menudata
        });
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

    handleSearch = (str) => {
        let newMenu = this.state.totalMenu;

        newMenu = newMenu.filter(item => item.Name.toLowerCase().includes(str.toLowerCase()));

        this.setState({filteredMenu : newMenu});
    }

    handleVegOnly = (e) => {
        let newMenu = this.state.totalMenu;
        if(e.target.checked)
            newMenu = newMenu.filter(item=>item.isVeg === true);

        this.setState({filteredMenu: newMenu})
    }

    render() {
        // console.log(this.state.cart)
        return (
            <div className="menu-container">
                <Sidemenu sidemenu={sidemenu} />
                <Mainmenu menudata={this.state.filteredMenu} onSearch={this.handleSearch} onVegOnly={this.handleVegOnly} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} cart={this.state.cart} />
                <Cart onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} cart={this.state.cart} />
            </div>
        );
    }
}

export default Menu;