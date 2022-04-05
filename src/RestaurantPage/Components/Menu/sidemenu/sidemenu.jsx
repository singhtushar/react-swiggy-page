import React from 'react';
import './sidemenu.css';


const Sidemenu = (props) => {
    const { sidemenu } = props;
    return (
        <div className="sidebar-container">
            {sidemenu.map(item => {
                return (
                    <div key={item} className="sidebar-element">{item}</div>
                );
            })}
        </div>
    );
}

export default Sidemenu;
