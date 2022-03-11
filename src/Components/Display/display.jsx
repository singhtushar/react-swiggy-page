import React, { Component } from 'react';
import display_img from "../../images/swiggy-display-image.jpeg";
import './display.css';

const Display = () => {
    return ( 
        <div className="display-container">
            <img src={display_img} alt="" style={{height: 160}}/>
            <div className="restaurant-description">
                <div className="restaurant-name"><h1>Kitchens Of Punjab</h1></div>
                <div className="restaurant-type">Punjabi, North Indian</div><br />  
                <div className="restaurant-location">Bilekahalli, BTM - Bangalore | Change Outlet <i className="fa fa-chevron-down"></i></div>
                <div className="restaurant-info">
                    <div className="restaurant-info-1">
                        <div className="rating">4.3</div>
                        <div className="votes">100+</div>
                    </div>
                    <div className="restaurant-info-2">
                        <div className="delivery-time">63 mins</div>
                        <div>Delivery Time</div>
                    </div>
                    <div className="restaurant-info-3">
                        <div>500</div>
                        <div>Cost for Two</div>
                    </div>
                </div>
            </div>
            <div className="offer">
                <div className="oo1">
                    Offer
                </div>
                <div className="off">
                    <div className="o1">  50% off upto Rs.100 | use code TRYNEW</div>
                    <div className="o1"> 30% off upto Rs.150 on orders above Rs.400 | Use code JUMBO</div>
                </div>
            </div>
        </div>
     );
}
 
export default Display;