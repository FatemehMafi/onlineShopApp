import React from "react";
import {connect} from "react-redux";

import {increase} from "../../store/products/productsAction";


const Counter = (props) => {
    return(
        <React.Fragment>
            <h1>Counter - {props.counter}</h1>
            <button onClick={props.increaseBasket}>increase</button>
        </React.Fragment>
    )
}

const mapStateProps = state =>{
    return {
        counter : state.counter.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        increaseBasket : () =>{dispatch(increase())}
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Counter);