import React from "react";
import { connect } from "react-redux";
const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.addBy5}>Add 5</button>
            <button onClick={props.subBy5}>Subtract 5</button>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch({type: "INC"}),
        decrement: () => dispatch({type: "DEC"}),
        addBy5: () => dispatch({type: "ADD_5"}),
        subBy5: () => dispatch({type: "SUB_5"})


    }
 }

export default connect(null, mapDispatchToProps)(Buttons);