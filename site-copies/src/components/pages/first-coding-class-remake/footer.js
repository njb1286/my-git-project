import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

import Logo from "../../../../static/images/coding-class/decamp-fantastic-fries-logo-white.png";
import { pages, makeLinks } from './pages-list';

export default function() {
    return (
        <div className='footer'>
            <div className="logo">
                <img src={Logo}/>
            </div>

            <div className="contact-info">
                <span className="phone">555 555 5555</span>
                <span className="hours">10 AM - MIDNIGHT</span>
            </div>

            <div className="navbar footer-navbar">
                {makeLinks()}
            </div>

            <div className="social-links">
                <FaInstagram className='social-link' />
                <FaTwitter className='social-link' />
                <FaFacebookF className='social-link' />
            </div>

            <div className="copyright">
                &copy; 2022 Woody512Woods &#124; All rights reserved {/* &reset color */}
            </div>
        </div>
    )
}