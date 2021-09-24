import axios from "axios"
import { 
    CHECKOUT_CART_ERROR, 
    CHECKOUT_CART_REQUEST, 
    CHECKOUT_CART_SUCCESS, 
    FETCH_CART_ERROR, FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS, 
    REMOVE_CART_ERROR, 
    REMOVE_CART_REQUEST, 
    REMOVE_CART_SUCCESS,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERROR, 
    REMOVE_ONE_FROM_CART_REQUEST,
    REMOVE_ONE_FROM_CART_SUCCESS,
    REMOVE_ONE_FROM_CART_ERROR,
    REMOVE_FROM_CART,
    ADD_TO_CART,
    REMOVE_ONE_FROM_CART,
    ADD_CAKE_ORDER,
    ADD_CAKE_ORDER_REQUEST,
    ADD_CAKE_ORDER_SUCCESS,
    ADD_CAKE_ORDER_ERROR,
    LIST_ORDER,
    LIST_ORDER_REQUEST,
    LIST_ORDER_SUCCESS,
    LIST_ORDER_ERROR,
} from "./cartTypes"

export const fetchCartRequest = () => {
    return {
        type:FETCH_CART_REQUEST
    }
}

export const fetchCartSuccess = payload => {
    return {
        type:FETCH_CART_SUCCESS,
        payload:payload
    }
}

export const fetchCartError = payload => {
    return {
        type:FETCH_CART_ERROR,
        payload:payload
    }
}

export const removeCartRequest = () => {
    return {
        type:REMOVE_CART_REQUEST
    }
}

export const removeCartSuccess = (payload) => {
    return {
        type: REMOVE_CART_SUCCESS,
        payload:payload
    }
}

export const removeCartError = payload => {
    return {
        type:REMOVE_CART_ERROR,
        payload:payload
    }
}

export const checkOutCartRequest = () => {
    return {
        type:CHECKOUT_CART_REQUEST,
    }
}

export const checkOutCartSuccess = () => {
    return {
        type:CHECKOUT_CART_SUCCESS,
    }
}

export const checkOutCartError = payload => {
    return {
        type:CHECKOUT_CART_ERROR,
        payload:payload
    }
}

export const addToCartRequest = () => {
    return {
        type:ADD_TO_CART_REQUEST,
    }
}

export const addToCartSuccess = () => {
    return {
        type:ADD_TO_CART_SUCCESS,
    }
}

export const addToCartError = payload => {
    return {
        type:ADD_TO_CART_ERROR,
        payload:payload
    }
}

export const removeOneFromCartRequest = () => {
    return {
        type:REMOVE_ONE_FROM_CART_REQUEST
    }
}

export const removeOneFromCartSuccess = (payload) => {
    return {
        type: REMOVE_ONE_FROM_CART_SUCCESS,
        payload:payload
    }
}

export const removeOneFromCartError = payload => {
    return {
        type:REMOVE_ONE_FROM_CART_ERROR,
        payload:payload
    }
}

export const fetchCart = () => {
    return {
        type:"FETCH_CART",
    }
}

export const removeFromCart = (cakeid) => {
    return {
        type:REMOVE_FROM_CART,
        payload:cakeid
    }
}

export const checkoutCart = () => {
    return (dispatch) => {
        dispatch(checkOutCartRequest());
        axios.post(`${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/checkout`, {}).then(
            response => dispatch(checkOutCartSuccess(response.data.data))
        ).catch(
            error => dispatch(checkOutCartError(error.message))
        )
    }
}

export const addCakeOrderRequest = () => {
    return {
        type:ADD_CAKE_ORDER_REQUEST
    }
}

export const addCakeOrderSuccess = () => {
    return {
        type: ADD_CAKE_ORDER_SUCCESS
    }
}

export const addCakeOrderError = error => {
    return {
        type:ADD_CAKE_ORDER_ERROR,
        payload:error
    }
}

export const addToCart = (data) => {
    return {
        type:ADD_TO_CART,
        payload:data
    }
}

export const removeOneFromCart = (data) => {
    return {
        type:REMOVE_ONE_FROM_CART,
        payload:data
    }
}

export const addCakeOrder = (data) => {
    return {
        type:ADD_CAKE_ORDER,
        payload:data
    }
}

