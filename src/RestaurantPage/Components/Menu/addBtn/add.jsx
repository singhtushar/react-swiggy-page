import React, { useState } from 'react';
import './add.css';

const Add = (props) => {
    return ( 
        <div className="add-btn">
            <button className='decrement-btn' onClick={() => props.onDelete(props.product)}>-</button>
            {props.value>0 ? <div className="item-qtn" style={{paddingLeft: 10, paddingRight: 10}} >{props.value}</div>: 'ADD'}
            <button className='increment-btn' onClick={() => props.onAdd(props.product)}>+</button>
        </div>
     );
}
 
export default Add;