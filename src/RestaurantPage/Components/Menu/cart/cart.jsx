import React, { useState } from 'react';
import { EMPTY_CART_IMAGE } from '../../../../images';

const Cart = (props) => {
    return ( 
        <div className="cart-container">
            <h1>Cart Empty</h1>
            <img src={EMPTY_CART_IMAGE} style={{height: 300, width: 300}} alt="" />
        </div>
     );
}
 
export default Cart;