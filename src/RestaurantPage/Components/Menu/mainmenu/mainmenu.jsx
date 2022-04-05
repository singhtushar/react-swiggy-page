import React from "react";
import Filter from "../../../../organism/filters/filters";
import Item from "../../../../organism/Item/item";
import "./mainmenu.css";

const Mainmenu = (props) => {
  const { onVegOnly, onSearch, menuItems, cart } = props;
  return (
    <>
      <Filter onSearch={onSearch} onVegOnly={onVegOnly} />
      <div className="mainmenu-container">
        <h1>Recommended</h1>
        <h4>{menuItems.length} ITEMS</h4>
        {menuItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              menuItems={menuItems}
              cart={cart}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
    </>
  );
};

export default Mainmenu;
