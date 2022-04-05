import React, { useState } from 'react';
import IconText from './iconText';

const DisplayDetails = (props) => {
    const { details } = props;
    return (
        <div className="restaurant-description">
            <div className="restaurant-name"><h1>{details.name}</h1></div>
            <div className="restaurant-type">{details.type}</div><br />
            <div className="restaurant-location">{details.location} | <IconText text='Change Outlet' icon='fa fa-chevron-down' /></div>
            <div className="restaurant-info">
                <div className="restaurant-info-1">
                    <div className="rating"><i className='fa fa-star displaybar-text-color'></i> {details.rating}</div>
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
    );
}

export default DisplayDetails;