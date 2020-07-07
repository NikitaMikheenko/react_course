import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } from './actionTypes';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(state.counter)
            };
        case DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result, index) => index !== action.payload.id)
            };
        default:
            return state;
    }
};

export default reducer;