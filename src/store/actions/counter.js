import * as actionTypes from "./actionTypes";
export const increment = () => {
    return {
        type: actionTypes.INC
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DEC
    }
};



export const addBy5 = () => {
    return {
        type: actionTypes.ADD_5
    }
};

export const subBy5 = () => {
    return {
        type: actionTypes.SUB_5
    }
};