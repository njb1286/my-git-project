import React from 'react';
import { NavLink } from 'react-router-dom';

export default function(props) {
    return (
        <div className="nav-link">
            <NavLink onClick={() => window.scrollTo(0, 0)} exact={props.exact} to={`/coding-class/${props.to}`} activeClassName="nav-link-active">{props.text}</NavLink>
        </div>
    )
}