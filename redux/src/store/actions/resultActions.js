import { STORE_RESULT, DELETE_RESULT } from './actionTypes';

export const saveResult = (result) => {
    // const updatedResult = res * 2;
    return {
        type: STORE_RESULT,
        payload: {
            result: result
        }
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().counter.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        payload: {
            id: id
        }
    };
};