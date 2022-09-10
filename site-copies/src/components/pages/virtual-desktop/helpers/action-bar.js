import React from 'react';

export default function(props) {
    return (
        <div className="action-item" >
            <div className="action-name">{props.title}</div>

            <div className="actions-list">
                {
                    props.actions.map(
                        action => (
                        <div key={props.actions.indexOf(action)} className='action'>{action}</div>
                        )
                    )
                }
            </div>
        </div>
    )
}