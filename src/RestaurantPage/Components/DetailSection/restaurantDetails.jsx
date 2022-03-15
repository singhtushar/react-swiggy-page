import React from 'react';
import IconText from '../../../molecule/iconText';
import './restaurantDetails.css';

const RestaurantDetails = (props) => {
    const { details } = props;
    return ( 
    <div className="details-container">
        <div className="display-container">
            <img src={details.image} alt="" style={{height: 160, marginLeft: -97}}/>
            <div className="restaurant-description">
                <div className="restaurant-name"><h1>{details.name}</h1></div>
                <div className="restaurant-type">{details.type}</div><br />  
                <div className="restaurant-location">{details.location} | <IconText text='Change Outlet' icon='fa fa-chevron-down' /></div>
                <div className="restaurant-info">
                    <div className="restaurant-info-1">
                        <div className="rating"><i className='fa fa-star displaybar-text-color'></i>{details.rating}</div>
                        <div className="votes">{details.votes}</div>
                    </div>
                    <div className="restaurant-info-2">
                        <div className="delivery-time">{details.deliveryTime}</div>
                        <div>Delivery Time</div>
                    </div>
                    <div className="restaurant-info-3">
                        <div>&#8377; {details.costForTwo}</div>
                        <div>Cost for Two</div>
                    </div>
                </div>
            </div>
            <div className="offer">
                <div className="offer-text">
                    Offer
                </div>
                <div className="off">
                    {details.offers.map((offer)=>{
                        return (
                            <div className="offer-name"><i className=''></i>{offer}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default RestaurantDetails;