import { INCREMENT, DECREMENT, ADD, SUBTRACT } from './actionTypes';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        payload:
        {
            value: value
        }
    };
};

export const subtrack = (value) => {
    return {
        type: SUBTRACT,
        payload:
        {
            value: value
        }
    };
};