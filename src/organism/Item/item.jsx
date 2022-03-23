import { VEG_ICON } from "../../images";
import { NONVEG_ICON } from "../../images";
import Add from "../../RestaurantPage/Components/Menu/addBtn/add";

const Item = (props) => {
  const { item, cart } = props;

  return (
    <div className="item-container">
      <div className="left-container">
        <img
          src={item.isVeg ? VEG_ICON : NONVEG_ICON}
          style={{ height: 25, width: 20 }}
          alt=""
        />
        <div className="item-name">{item.Name}</div>
        <div className="item-price">&#8377; {item.Price}</div>
        <div className="item-description">{item.Description}</div>
      </div>
      <div className="right-container">
        <img
          src={item.image}
          alt=""
          style={{ height: 96, width: 114, borderRadius: 10 }}
        />
        <Add
          key={item}
          product={item}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          value={
            cart.find((prod) => prod.id === item.id)
              ? cart.find((prod) => prod.id === item.id).count
              : 0
          }
        />
      </div>
    </div>
  );
};

export default Item;
