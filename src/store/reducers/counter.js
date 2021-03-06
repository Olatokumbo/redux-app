import * as  actionTypes from "../actions/actionTypes";
const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_5:
            return {
                ...state,
                counter: state.counter + 5
            }
        case actionTypes.SUB_5:
            return {
                ...state,
                counter: state.counter - 5
            }
        default:
            return state
    }
}

export default counterReducer;