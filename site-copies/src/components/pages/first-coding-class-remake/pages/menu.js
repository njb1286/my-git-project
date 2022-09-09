import React from 'react';

import SkewedImage from "../../../../../static/images/coding-class/menu.jpg";
import SkewedHeader from '../helpers/skewed-header';
import Fries1 from "../../../../../static/images/coding-class/fries-sq-1.jpg";
import Fries2 from "../../../../../static/images/coding-class/fries-sq-2.jpg";

import { FaLink } from "react-icons/fa";


export default function() {
    return (
        <div className='menu-page'>
            <SkewedHeader header="Menu" image={SkewedImage} />

            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="square-image-wrapper">
                            <img src={Fries1} alt="" />
                        </div>

                        <div className="square-content">
                            <h1 className="title">Spicy <FaLink /></h1>
                            <ul className='description'>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                                <li>Cupiditate facilis tempora mollitia, nulla perspiciatis corporis quisquam!</li>
                                <li>Quis repellat iusto distinctio quas iure eaque aut?</li>
                                <li>Explicabo in omnis quam aliquid molestias optio cumque?</li>
                            </ul>
                        </div>
                    </div>

                    <div className="square reversed">
                        <div className="square-content">
                            <h1 className="title">Medium <FaLink /></h1>
                            <ol className='description'>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                                <li>Cupiditate facilis tempora mollitia, nulla perspiciatis corporis quisquam!</li>
                                <li>Quis repellat iusto distinctio quas iure eaque aut?</li>
                                <li>Explicabo in omnis quam aliquid molestias optio cumque?</li>
                            </ol>
                        </div>

                        <div className="square-image-wrapper">
                            <img src={Fries2} alt="" />
                        </div>
                    </div>

                    <div className="square">
                        <div className="square-image-wrapper">
                            <img src={Fries1} alt="" />
                        </div>

                        <div className="square-content">
                            <h1 className="title">Mild <FaLink /></h1>
                            <ul className='description'>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                                <li>Cupiditate facilis tempora mollitia, nulla perspiciatis corporis quisquam!</li>
                                <li>Quis repellat iusto distinctio quas iure eaque aut?</li>
                                <li>Explicabo in omnis quam aliquid molestias optio cumque?</li>
                            </ul>
                        </div>
                    </div>

                    <div className="square reversed">
                        <div className="square-content">
                            <h1 className="title">No Flavor <FaLink /></h1>
                                <ul className='description'>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                                    <li>Cupiditate facilis tempora mollitia, nulla perspiciatis corporis quisquam!</li>
                                    <li>Quis repellat iusto distinctio quas iure eaque aut?</li>
                                    <li>Explicabo in omnis quam aliquid molestias optio cumque?</li>
                                </ul>
                            </div>

                        <div className="square-image-wrapper">
                            <img src={Fries2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}