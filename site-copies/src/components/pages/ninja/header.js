import React, { Component } from 'react';
import facebook from "../../../../static/images/ninja/social_links/facebook.png";
import instagram from "../../../../static/images/ninja/social_links/instagram.png";

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="left">
                    <div className="title">
                        <div>Ninja Playground</div>
                    </div>
                </div>

                <div className="right">
                    <div className="social-links">
                        <a className="social-link">
                            <img src={facebook} alt="" />
                        </a>

                        <a className="social-link">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}