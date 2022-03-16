import React, { Component } from 'react';
import { navElements } from './Services/navElements';
import { details } from './Services/restaurantDetails';
import Header from '../organism/header/header.jsx';
import RestaurantDetails from './Components/DetailSection/restaurantDetails';
import Menu from './Components/Menu/menu.jsx';

class Restaurant extends Component {
    
    render() { 
        return (<>
        <Header navContents={navElements} address={details.address} />
        <RestaurantDetails details={details} />
        <Menu />
        </>);
    }
}
 
export default Restaurant;