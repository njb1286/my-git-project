import React from 'react';

import { makeLinks } from '../pages-list';

export default function(props) {
    return (
        <div className="skewed-header">
            <div className="image" style={{
                backgroundImage: `url(${props.image})`
            }}></div>

            <div className="header-content-wrapper">
                <div className="header-content">
                    <div className="heading-wrapper">
                        <h1>{props.header}</h1>
                    </div>

                    <div className="navbar">
                        {makeLinks()}
                    </div>
                </div>
            </div>
        </div>
    )
}