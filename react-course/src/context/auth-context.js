import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    logic: () => {}
});

export default authContext;