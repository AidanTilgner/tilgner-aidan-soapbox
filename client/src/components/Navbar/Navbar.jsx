//modules
import React from 'react';
import { Link } from 'react-router-dom';

//files
import './Navbar.scss';

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
                    <Link to="/home" className="navbar__link">Home</Link>
                </li>
                <li className={`navbar__item ${props.active === 'topics' && "active"} tablet`}>
                    <Link to="/topics" className="navbar__link">Topics</Link>
                </li>
                <li className={`navbar__item ${props.active === 'upload' && "active"} tablet`}>
                    <Link to="/upload" className="navbar__link">Upload</Link>
                </li>
                <li className={`navbar__item ${props.active === 'user profile' && "active"} tablet`}>
                    <Link to={`/user/${props.username ? props.username : 'Soapbox'}`} className="navbar__link">
                        <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="navbar__user-profile"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
