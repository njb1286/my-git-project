import React from 'react';

export default function(props) {
    return (
        <div style={{
            marginTop: `${props.amount}${props.unit ? props.unit : "px"}`
        }}></div>
    )
}