import React from "react";
import {connect} from "react-redux";
const Counter = (props) =>{
    return(
        <div>
        Current Counter: {props.counter}
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        counter: state.counter
    }
};
export default connect(mapStateToProps)(Counter);