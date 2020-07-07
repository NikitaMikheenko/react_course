import { ADD, DELETE } from "./actionTypes";

export const onAddPerson = value => ({
    type: ADD,
    payload: {
        person: value
    }
});

export const onDeletePerson = value => ({
    type: DELETE,
    payload: {
        personId: value
    }
});