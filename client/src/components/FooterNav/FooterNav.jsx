//modules
import React from 'react';
import { Link } from 'react-router-dom';

//files
import './FooterNav.scss';

function FooterNav(props) {
    return (
        <div className="footer-nav">
            <ul className="footer-nav__items">
                <li className={`footer-nav__item ${props.active === 'topics' && 'active'}`}>
                    <Link to='/topics' className="footer-nav__link">Topics</Link>
                </li>
                <li className={`footer-nav__item ${props.active === 'home' && 'active'}`}>
                    <Link to='/home' className="footer-nav__link">Home</Link>
                </li>
                <li className={`footer-nav__item ${props.active === 'user-profile' && 'active'}`}>
                    <Link to={`/user/${props.username ? props.username : 'Soapbox'}`} className="footer-nav__link">
                    <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="footer-nav__user-profile"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterNav;
