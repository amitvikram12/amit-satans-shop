import { combineReducers } from "redux"
import loginReducer from "./login/loginReducer"
import cakeReducer from "./cakes/cakeReducer"
import cartReducer from "./cart/cartReducer"
import { routerReducer } from "react-router-redux"
import ordersReducer from "./orders/ordersReducer"

const rootReducer = combineReducers({
    login:loginReducer,
    cake:cakeReducer,
    cart:cartReducer,
    orders:ordersReducer,
    routing:routerReducer
});

export default rootReducer