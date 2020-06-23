import * as actionTypes from "./actionTypes";
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    }
};

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 1000);
    }
};