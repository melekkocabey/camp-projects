import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer.js";


//tüm sateleri topladığım yer
const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;