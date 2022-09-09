import React from 'react';
import NavBar from '../navbar';

import { FaTruckMonster as Monster, FaWifi as Wifi, FaChartLine as Chart } from "react-icons/fa";

import BackgroundImage from "../../../../../static/images/coding-class/fries-hero-bg.jpg";
import FriesBackground from "../../../../../static/images/coding-class/fries-multiply-bg.jpg";

export default function() {
    return (
        <div>
            <NavBar />

            <div className="hero-section" style={{
                backgroundImage: `url(${BackgroundImage})`
            }}>

                <h1 className="top-heading">HTML Styled Fries</h1>
                <h3 className="bottom-heading">Coding fuel</h3>
            </div>

            <div className="feature-section" style={{
                backgroundImage: `url(${FriesBackground})`
            }}>

                <div className="columns">
                    <div className="column">
                        <div className="icon">
                            <Monster />
                        </div>

                        <p className="title">We Deliver!</p>

                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="column">
                        <div className="icon">
                            <Wifi />
                        </div>

                        <p className="title">You can code from here!</p>

                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="column">
                        <div className="icon">
                            <Chart />
                        </div>

                        <p className="title">100+ types of fries</p>

                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}