
const initialState ={
    counter:0
}
const ProductsReducer = (state=initialState, action) =>{
    switch (action.type){
        case "INCREASE":
            return {...state, counter:state.counter + 1 }
        // case "DECREASE":
        // case "REMOVE":
        // case "ADD_TO_BASKET":
        default:
            return state;
    }
}

export default ProductsReducer;