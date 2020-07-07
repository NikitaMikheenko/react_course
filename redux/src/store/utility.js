export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updateObject
    }
};