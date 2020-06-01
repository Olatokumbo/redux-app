const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "INC":
            return{
                ...state,
                counter: state.counter+1
            }
        case "DEC":
            return{
                ...state,
                counter: state.counter-1
            }
        case "ADD_5":
            return{
                ...state,
                counter: state.counter+5
            }
        case "SUB_5":
            return{
                ...state,
                counter: state.counter-5
            }
    }
    return state
}

export default reducer;