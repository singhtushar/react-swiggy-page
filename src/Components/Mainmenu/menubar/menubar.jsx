import React, { useState } from 'react';
import './menubar.css';


const Menubar = (props) => {
    // console.log(props.itemsList);
    return ( 
    <div className='menu-container'>
        <h1>Recommonded</h1>
        <h3>5 items</h3>
        {props.itemsList.map((item)=>{
            return (
                <div className="item-wrapper">
                    {/* <img src={vegIcon} alt="" /> */}
                    <div className="left-container">
                        <div className="item-icon">{`${item.isVeg === true ? `vegicon` : `nonVegicon`}`}</div>
                        <div className="item-name" key={item.id}>{item.Name}</div>
                        <div className="item-price">{item.Price}</div>
                        <div className="item-description">{item.description}</div>
                    </div>
                    <div className="right-container">
                        <div className="item-image"><img src={item.image} alt="" /></div>
                        {/* <ADD /> */}
                    </div>
                </div>
            );
        })}
    </div> 
    );
}
 
export default Menubar;