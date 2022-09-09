import React from 'react';

import SkewedImage from "../../../../../static/images/coding-class/contact.jpg";
import DevcampLogo from "../../../../../static/images/coding-class/decamp-fantastic-fries-logo-dark.png";
import SkewedHeader from '../helpers/skewed-header';

import { 
    FaMapMarkerAlt as Marker, 
    FaPhoneVolume as Phone, 
    FaRegClock as Time 
} from "react-icons/fa";

export default function() {
    return (
        <div className='contact-page'>
            <SkewedHeader header="Contact" image={SkewedImage} />

            <div className="page-container">
                <div className="content">
                    <div className="left-column">
                        <div className="logo-wrapper">
                            <img src={DevcampLogo} />
                        </div>

                        <div className="info-container">
                            <div className="icon">
                                <Marker />
                            </div>

                            <div className="info">123 Any St<br/>Scottsdale, AZ, 85251</div>
                        </div>

                        <div className="info-container">
                            <div className="icon">
                                <Phone />
                            </div>

                            <div className="info">555 555 5555</div>
                        </div>

                        <div className="info-container">
                            <div className="icon">
                                <Time />
                            </div>

                            <div className="info">10 AM - MIDNIGHT</div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="form-group">
                            <input type="text" placeholder='Your name' id='full-name' />
                            <label htmlFor="full-name">Your name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder='Your email' id='email' />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-group">
                            <textarea type="text" placeholder='Message' id='message' />
                            <label htmlFor="message">Message</label>
                        </div>

                        <div className="send-btn-wrapper">
                            <button type='submit'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}