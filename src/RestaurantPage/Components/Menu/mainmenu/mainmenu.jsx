import React, { useState } from 'react';
import { VEG_ICON } from '../../../../images';
import { NONVEG_ICON } from '../../../../images';
import Add from '../addBtn/add';
import { menudata } from '../../../Services/menuItems';
import './mainmenu.css';

const Mainmenu = (props) => {
    const { onIncrement, onDecrement, cart } = props;
    return (
        <>
            <div className="filters">
                <span className="search-container">
                    <i className='fa fa-search'></i> <input className="search-container_input" type="text" placeholder='Search for dishes...' />
                </span>
                <span className="search-container">
                    <input className="search-container_input" type="checkbox" />
                    Veg Only
                </span>
                <span className="search-container">
                    <input className="search-container_input" type="checkbox" />
                    Favourites
                </span>
            </div>
            <div className="mainmenu-container">
                <h1>Recommended</h1>
                <h4>{menudata.length} ITEMS</h4>
                {menudata.map(item => {
                    return (
                        <div className="item-container">
                            <div className="left-container">
                                <img src={item.isVeg ? VEG_ICON : NONVEG_ICON} style={{ height: 25, width: 20 }} alt="" />
                                <div className="item-name">{item.Name}</div>
                                <div className="item-price">&#8377; {item.Price}</div>
                                <div className="item-description">{item.Description}</div>
                            </div>
                            <div className="right-container">
                                <img src={item.image} alt="" style={{ height: 96, width: 114, borderRadius: 10 }} />
                                <Add key={item} onAdd={onIncrement} onDelete={onDecrement} product={item} value={
                                    cart.find(prod => prod.product.id === item.id) ? cart.find(prod => prod.product.id === item.id).qty : 0
                                } />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Mainmenu;