import React, { useState } from 'react';
import { connect } from "react-redux";

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

    const sideDrawerToggleHandler = () => {
        setIsSideDrawerVisible(!isSideDrawerVisible);
    };

    const sideDrawerClosedHandler = () => {
        setIsSideDrawerVisible(false);
    };

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={isSideDrawerVisible}
                closed={sideDrawerClosedHandler}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);