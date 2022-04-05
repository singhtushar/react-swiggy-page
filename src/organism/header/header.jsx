import React from 'react';
import IconText from '../../molecule/iconText';
import logo from '../../images/swiggy-1.svg';
import './header.css'

const Header = (props) => {
    const { navContents, address } = props
    return (
        <React.Fragment>
            <div className="nav-container">
                <ul className="left-wrapper">
                    <li className="left-nav-element"><img src={logo} style={{ height: 50, width: 50 }} alt="" /></li>
                    {navContents.leftNavElements.map((eachElement, index) => {
                        return (
                            <li key={index} className='left-nav-element'><IconText icon={eachElement.icon} text={eachElement.text} /></li>
                        );
                    })}
                </ul>
                <ul className="right-wrapper">
                    {navContents.rightNavElements.map((eachElement, index) => {
                        return (
                            <li key={index} className='right-nav-element'><IconText icon={eachElement.icon} text={eachElement.text} /></li>
                        );
                    })}
                </ul>
            </div>
            <div className='restaurant-address'>
                {address}
            </div>
        </React.Fragment>
    );
}

export default Header;