import React from 'react';
import Filter from '../../../../organism/filters/filters';
import Item from '../../../../organism/Item/item';
import './mainmenu.css';

const Mainmenu = (props) => {
    const { menudata, onVegOnly, onSearch, onIncrement, onDecrement, cart } = props;
    return (
        <>
            <Filter onSearch={onSearch} onVegOnly={onVegOnly} />
            <div className="mainmenu-container">
                <h1>Recommended</h1>
                <h4>{menudata.length} ITEMS</h4>
                {menudata.map(item => {
                    return (
                        <Item item={item} onIncrement={onIncrement} onDecrement={onDecrement} cart={cart} />
                    );
                })}
            </div>
        </>
    );
}

export default Mainmenu;