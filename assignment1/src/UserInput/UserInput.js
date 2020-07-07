import React from 'react';

const userInput = (props) => {
    return <input onChange={props.change} value={props.value}/>;
}

export default userInput;