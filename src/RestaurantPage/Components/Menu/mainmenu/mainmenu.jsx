import React, { useState } from 'react';
import { VEG_ICON } from '../../../../images';
import { NONVEG_ICON } from '../../../../images';
import './mainmenu.css';

const Mainmenu = (props) => {
    const { items } = props;
    console.log(items)
    return ( <div className="mainmenu-container">
        <h1>Recommonded</h1>
        <h4>{items.length} ITEMS</h4>
        {items.map(item=>{
            return (
               <div className="item-container">
                   <div className="left-container">
                    <img src={item.isVeg ? VEG_ICON: NONVEG_ICON} style={{height: 25, width: 20}} alt="" />
                    <div className="item-name">{item.Name}</div>
                    <div className="item-price">&#8377; {item.Price}</div>
                    <div className="item-description">{item.Description}</div>
                   </div>
                   <div className="right-container">
                       <img src={item.image} alt="" style={{height: 96, width: 114, borderRadius: 10}}/>
                       {/* <Add /> */}
                       <div className="add-btn">ADD</div>
                   </div>
               </div>
            );
        })}
    </div> );
}
 
export default Mainmenu;