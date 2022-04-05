import React, { useState } from 'react';

const Offer = (props) => {
    const { details } = props;
    return (
        <div className="offer">
            <div className="offer-text">
                Offer
            </div>
            <div className="off">
                {details.offers.map((offer) => {
                    return (
                        <div key={offer} className="offer-name"><i className=''></i>{offer}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default Offer;