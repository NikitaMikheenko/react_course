import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'].join(' ');

    return (
        <div className={cssClasses}></div>
    );
};

export default backdrop;