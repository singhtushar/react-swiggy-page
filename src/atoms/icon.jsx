import React from 'react';

const Icon = (props) => {
    const { icon } = props;
    return ( 
        <i className={icon} style={{paddingRight: 3}}></i>
     );
}
 
export default Icon;