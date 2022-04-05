import React, { useState } from 'react';
import { EMPTY_CART_IMAGE } from '../../../../images';
import { VEG_ICON } from '../../../../images';
import { NONVEG_ICON } from '../../../../images';
import './cart.css';

const Cart = (props) => {
    const { onIncrement, onDecrement, cart } = props;
    function onEmpty() {
        return (
            <React.Fragment>
                <h1>Cart Empty</h1>
                <img src={EMPTY_CART_IMAGE} style={{height: 300, width: 300}} alt="" />
            </React.Fragment>
        );

    }

    let subtotal = 0;
    cart.forEach(item=>{
        subtotal+=(item.product.Price * item.qty);
    })

    function displaySubtotal() {
        return (
            <>
            <div className="subtotal-container">
                <span className="subtotal-text">Subtotal</span>
                <span className="subtotal">&#8377; {subtotal}</span>
            </div>
            <button className="checkout-btn" >CHECKOUT</button>
            </>
        )
    }

    function notEmpty() {
        return (
            <div className="cart-container">
                <h1>Cart</h1>
                {cart.map(item=>{
                    return(
                        <div className='cart-item-container'>
                            <div className="item-type"><img src={item.isVeg ? VEG_ICON: NONVEG_ICON} style={{height: 25, width: 20}} alt="" /></div>
                            <div className="cart-item-name">{item.product.Name}</div>
                            <div className="btn">
                                <button className='cart-decrement-btn' onClick={() => onDecrement(item.product)}>-</button>
                                {item.qty>0 ? <div className="item-qtn" style={{paddingLeft: 15, paddingRight: 15, fontWeight: 600}} >{item.qty}</div>: 'ADD'}
                                <button className='cart-increment-btn' onClick={() => onIncrement(item.product)}>+</button>
                            </div>
                            <div className="item-price">&#8377; {item.qty * item.product.Price}</div>
                        </div>
                        
                    );
                })}
                {subtotal>0? displaySubtotal(): ""}
            </div>
        );
    }

    return ( 
        <div className="cart-container">
            {cart.length === 0 ? onEmpty(): notEmpty()}
        </div>
     );
}
 
export default Cart;