import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { pages, makeLinks } from './pages-list';
import { FaPhoneVolume } from "react-icons/fa";

import Lnk from "./helpers/nav-link";
import Logo from "../../../../static/images/coding-class/decamp-fantastic-fries-logo-white.png";

export default class Navbar extends Component {
    render() {
        return (
            <div className='navigation-wrapper'>
                <div className="left">
                    <div className="phone-icon">
                        <FaPhoneVolume />
                    </div>

                    <div className="contact-hours-wrapper">
                        <div className="number">555 555 5555</div>

                        <div className="hours">10 AM - MIDNIGHT</div>
                    </div>
                </div>

                <div className="center">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="navbar">

                        {makeLinks()}

                    </div>
                </div>

                <div className="right">
                    <Link to="/coding-class/contact" className='link'>
                        <div className="address-wrapper"> 123 Any Street<br />Scottsdale, AZ, 85251</div>
                        <div className="navigation-icon">
                            <FontAwesomeIcon icon="location-dot"/>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}