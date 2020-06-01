const redux = require("redux");
const createStore = redux.createStore;

const initialState={
    title: [],
    message: []
}
const rootReducer = (state = initialState, action) =>{
    switch(action.type){

        case "ADD_POST": 
        return{
            ...state,
            title: state.title.concat(action.title),
            message: state.message.concat(action.message)
        } 
    }
    return state
} 

const store = createStore(rootReducer);
// console.log(store.getState());
store.subscribe(()=>{
    console.log("Subscription", store.getState());
})

store.dispatch({type: "ADD_POST", title: "HELLO", message: "Hello World"});
store.dispatch({type: "ADD_POST", title: "HELLO", message: "Hello World"});

// console.log(store.getState());