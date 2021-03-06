import React from 'react';
import DisplayDetails from '../../../molecule/displayDetails';
import Offer from '../../../molecule/offer';
import './restaurantDetails.css';

const RestaurantDetails = (props) => {
    const { details } = props;
    return ( 
    <div className="details-container">
        <div className="display-container">
            <img src={details.image} alt="" style={{height: 160, marginLeft: -97}}/>
            <DisplayDetails details={details} />
            <Offer key={details} details = {details} />
        </div>
    </div>
    );
}
 
export default RestaurantDetails;