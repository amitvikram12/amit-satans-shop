import { LIST_ORDER_ERROR, LIST_ORDER_REQUEST, LIST_ORDER_SUCCESS } from "./orderTypes"

const initialState = {
    loading:false,
    orders:[],
    error:''
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ORDER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case LIST_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                orders:action.payload,
                errors:''
            }
        case LIST_ORDER_ERROR: 
            return {
                ...state,
                loading:false,
                orders:[],
                errors:action.payload
            }
        default: return state
    }
}

export default ordersReducer