import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ChechoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const checkout = props => {
    const checkoutCancelled = () => {
        props.history.goBack();
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data');
    }

    let summary = <Redirect to="/" />;
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    if (props.ingredients) {
        summary = (
            <div>
                {purchasedRedirect}
                <ChechoutSummary
                    ingredients={props.ingredients}
                    checkoutCancelled={checkoutCancelled}
                    checkoutContinued={checkoutContinued}
                />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        );
    }
    return summary;
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(checkout);