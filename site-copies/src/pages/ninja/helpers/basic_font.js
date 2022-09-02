import React from 'react';

export function Title(props) {
    return (
        <div style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "35px"
        }}>
            {props.text}
        </div>
    )
}

export function Description(props) {
    return (
        <div style={{
            color: "white",
            fontSize: "35px",
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{
                width: "85%"
            }}>
                {props.text}
            </div>
        </div>
    )
}