import React, { useState } from 'react';
import './add.css';

const Add = (props) => {

    function whenEmpty() {
        return (
            <div className="add-btn" onClick={() => props.onAdd(props.product)} style={{position: 'absolute', top: 82, marginLeft: 34, paddingLeft: 10, paddingRight: 10, fontWeight: 600, border: 1, borderStyle: 'solid'}} >
                ADD
            </div>
        );
    }

    function notEmpty() {
        return (
            <div className='add-btn-qty'>
            <button className='decrement-btn' onClick={() => props.onDelete(props.product)}>-</button>
            <div className="add-btn">
                
                {props.value>0 ? <div className="item-qtn" style={{paddingLeft: 10, paddingRight: 10}} >{props.value}</div>: 'ADD'}
                
            </div>
            <button className='increment-btn' onClick={() => props.onAdd(props.product)}>+</button>
            </div>
        );
    }

    return ( 
        <>
        {props.value>0?notEmpty():whenEmpty()}
        </>
    );
}
 
export default Add;