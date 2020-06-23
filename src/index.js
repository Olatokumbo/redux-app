import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/result";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
}
);

const logger  = store =>{
    return next =>{
        return action =>{
            console.log("Middleware is Dispatching", action);
            let result = next(action);
            console.log("Middleware next State", store.getState());
            return result
        }
    }
}
const store=createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById("root"));
