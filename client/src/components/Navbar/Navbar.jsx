import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
        <div className="navbar">
            <h3 className="navbar__logo">SOAPBOX</h3>
            <ul className="navbar__items">
                <li className="navbar__item">
                    Search
                </li>
                <li 
                    className={`navbar__item ${props.active === 'home' && "active"} tablet`}
                >
                    <Link to="/Home" className="navbar__link"/>Home<Link/>
                </li>
                <li className={`navbar__item ${props.active === 'topics' && "active"} tablet`}>
                    <Link to="/Topics" className="navbar__link">Topics</Link>
                </li>
                <li className={`navbar__item ${props.active === 'upload' && "active"} tablet`}>
                    <Link to="/Upload" className="navbar__link">Upload</Link>
                </li>
                <li className={`navbar__item ${props.active === 'user profile' && "active"} tablet`}>
                    <Link to={`/User/${props.username ? props.username : 'Soapbox'}`} className="navbar__link">User Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
