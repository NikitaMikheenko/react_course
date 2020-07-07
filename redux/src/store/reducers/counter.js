import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, state.counter + 1);
        case DECREMENT:
            return updateObject(state, state.counter - 1);
        case ADD:
            return updateObject(state, state.counter + action.payload.value);
        case SUBTRACT:
            return updateObject(state, state.counter - action.payload.value);
        default:
            return state;
    }
};

export default reducer;