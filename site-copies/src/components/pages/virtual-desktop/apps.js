import React from 'react';

export default function(props) {
    const apps = (
        props.apps.map(app => (
            <div key={props.apps.indexOf(app)} className="app-wrapper" onClick={() => props.openApp(app)}>
                <img src={app.icon} />
    
                <h2>{app.name}</h2>
            </div>
        ))
    )

    return apps;
}