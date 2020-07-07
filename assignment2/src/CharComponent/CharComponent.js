import React from 'react';

const charComponent = (props) => {
    const pStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
        cursor: "pointer"
    };

    return <p style={pStyle} onClick={props.click}>{props.character}</p>
}

export default charComponent;