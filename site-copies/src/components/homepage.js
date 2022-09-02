import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <div className='homepage'>
            <div className="header">
                <h1 className="title">Homepage</h1>
                <p className="subtitle">Select which page you would like to redirect to...</p>
            </div>

            <div className="nav-links">
                {
                    props.pages.map(
                        page => (
                            <div key={props.pages.indexOf(page)} className="nav-link-wrapper">
                                <Link className='' to={`/${page.path}`}>{page.title}</Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}