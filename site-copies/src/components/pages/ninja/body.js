import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopImage from "../../../../static/images/ninja/top-image.jpg";
import DisplayImage from "../../../../static/images/ninja/display.png";
import GymPreview from "../../../../static/images/ninja/gym-preview.jpg";

import Link from "./nav-link";
import Spacer from "./helpers/spacer";
import { Title, Description } from './helpers/basic_font';

export default class Body extends Component {
    render() {
        return (
            <div className='main-body'>
                <div className="container">
                    <div className="top-image">
                        <img src={TopImage} alt="" />
                    </div>

                    <div className="nav-links">
                        <Link title="Home" />
                        <Link title="Waiver" />
                        <Link title="Classes" />
                        <Link title="Hours/Schedule" />
                        <Link title="Pricing" />
                        <Link title="Competitions" />
                        <Link title="Youth Groups / YSA" />
                        <Link title="Birthdays" />
                        <Link title="Gallery" />
                        <Link title="Home School" />
                        <Link title="About" />
                        <Link title="Contact" />
                        <Link title="Ninja Swag" />
                        <Link title="Summer Camp" />
                    </div>

                    <Spacer amount="20" />

                    <div className="reassurance-text">
                        (No appointment necessary. No masks required) 
                    </div>

                    <Spacer amount="40" />

                    <div className="open-hours-title">Open Gym Hours</div>

                    <Spacer amount="40" />

                    <div className="labor-day-hours">
                        September 5th Labor day hours 12:00-9:00pm
                    </div>
                    
                    <div className="open-hours-wrapper">
                        <div className="open-hours">
                            <div className="left">
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Friday</div>
                                <div>Saturday</div>
                            </div>

                            <div className="right">
                                <div>7:00pm - 9:00pm</div>
                                <div>7:00pm - 9:00pm</div>
                                <div>7:00pm - 9:00pm</div>
                                <div>7:00pm - 9:00pm</div>
                                <div>7:00pm - 9:00pm</div>
                                <div>2:00pm - 7:00pm</div>
                            </div>
                        </div>
                    </div>

                    <Spacer amount="40" />

                    <div className="quote-text">"Other than Disneyland, The Ninja Playground is my favorite place in the world" - Jackson, 10 yrs</div>

                    <Spacer amount="30" />

                    <Description text="The Ninja Playground is an obstacle gym modeled after the hit TV show American Ninja Warrior. We take pride in having a wide variety of obstacles built to the most professional quality level. We have fun things for all ages and all abilities and ALL of our coaches have competed on American Ninja Warrior." />

                    <Spacer amount="30" />

                    <div className="small-description-text">
                        Our objective is to have fun, build strength, gain confidence and be a part of the very accepting Ninja culture. Find a sense of belonging and become part of this family like Ninja Culture.
                    </div>

                    <Spacer amount="20" />

                    <div className="display-image">
                        <img src={DisplayImage} alt="" />
                    </div>

                    <Spacer amount="40" />

                    <Title text="Check Out Our Latest Video" />

                    <Description text="We love what we do and we try to help everyone to it as well as they can. Check out this tutorial on the Warped Wall. This video will help you conquer the obstacle, and prevent injuries along the way." />

                    <Spacer amount="50" />

                    <YouTube videoId='YcPaGw0h_3s' />
                    
                    <Spacer amount="50" />

                    <Title text="Read Our Latest Article" />

                    <Spacer amount="40" />

                    <Description text="Learn what open gym means and what you can do during open gym hours:" />

                    <div className="open-gym-wrapper">
                        <div className="open-gym-section">
                            <div className="top">
                                <img src={GymPreview} alt="" />
                            </div>

                            <div className="bottom">
                                <div className="bottom-container">
                                    <div className="user-profile">
                                        <div className="left user-icon-wrapper">
                                            <FontAwesomeIcon className='user-icon' icon={"circle-user"} />
                                        </div>

                                        <div className="middle">
                                            <div className='user-name link'>Justin Lewis</div>
                                            <div>Aug 5, 2019</div>
                                        </div>

                                        <div className="right">
                                            <div></div>
                                            <div className="text">• 2 min</div>
                                        </div>
                                    </div>

                                    <Spacer amount="40" />

                                    <div className="faq link">
                                        <div className="title">FAQ: Open Gym</div>
                                        <div className="description">What does open gym mean? What can you do during open gym? Read the full article to find out.</div>
                                    </div>

                                    <Spacer amount="60" />

                                    <hr  style={{
                                        opacity: "0.5"
                                    }}/>

                                    <div className="link" style={{
                                        fontSize: "12px"
                                    }}>
                                        4 comments
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}