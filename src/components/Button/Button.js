import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.addBy5}>Add 5</button>
            <button onClick={props.subBy5}>Subtract 5</button>
            <button onClick={()=> props.addResults(props.counter)}>Store</button>
            <div>
            <ul>
            {props.results.map((data)=><li key={Math.random()}>{data.value}</li> )}          
            </ul>  
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.ctr.counter,
        results: state.res.results
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch(actionCreators.increment()),
        decrement: () => dispatch(actionCreators.decrement()),
        addBy5: () => dispatch(actionCreators.addBy5()),
        subBy5: () => dispatch(actionCreators.subBy5()),
        addResults: (result) => dispatch(actionCreators.storeResult(result))

    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);