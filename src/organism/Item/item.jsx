import { VEG_ICON } from "../../images";
import { NONVEG_ICON } from "../../images";
import Add from "../../RestaurantPage/Components/Menu/addBtn/add";

const Item = (props) => {
    const { item, onIncrement, onDecrement, cart } = props;
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
}

export default Item;