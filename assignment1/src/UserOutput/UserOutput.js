import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const style = {
        color: "green",
        fontSize: "24px"
    }

    return (
        <div className="UserOutput">
            <p style={style}>Hello world!</p>
            <p>{props.username}</p>
        </div>
    );
}

export default userOutput;