import { combineReducers } from "redux";
import ProductsReducer from "./products/productsReducer"

const rootReducer = combineReducers({
        counter : ProductsReducer,
    })

export default rootReducer;