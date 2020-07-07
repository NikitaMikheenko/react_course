import { ADD, DELETE } from "./actionTypes";

const initialState = {
    persons: []
};

export default (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case ADD:
            return {
                ...state,
                persons: state.persons.concat(payload.person)
            };
        case DELETE:
            return {
                ...state,
                persons: state.persons.filter((p, index) => index !== payload.personId)
            };
        default:
            return state;
    }
};