import {
    PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_INIT,
    FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL
} from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });
        case PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
};