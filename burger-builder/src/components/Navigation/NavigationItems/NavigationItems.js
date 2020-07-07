import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact clicked={props.onClicked}>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders" clicked={props.onClicked}>Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth" clicked={props.onClicked}>Authenticate</NavigationItem>
            : <NavigationItem link="/logout" clicked={props.onClicked}>Logout</NavigationItem>
        }
    </ul>
);

export default navigationItems;