import { 
    ADD_TO_CART_REQUEST, 
    ADD_TO_CART_SUCCESS, 
    ADD_TO_CART_ERROR,  
    FETCH_CART_ERROR, 
    FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS, 
    REMOVE_CART_ERROR, 
    REMOVE_CART_REQUEST, 
    REMOVE_CART_SUCCESS,
    REMOVE_ONE_FROM_CART_REQUEST,
    REMOVE_ONE_FROM_CART_SUCCESS,
    REMOVE_ONE_FROM_CART_ERROR, 
    ADD_CAKE_ORDER_REQUEST,
    ADD_CAKE_ORDER_SUCCESS,
    ADD_CAKE_ORDER_ERROR
} from "./cartTypes"

const initialState = {
    loading:false,
    cart:[],
    error:'',
    cartCount:0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:''
            }
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                cart:action.payload,
                error:'',
                cartCount:getCartCount(action.payload)
            }
        case FETCH_CART_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:''
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                error:'',
                cartCount:state.cartCount + 1
            }
        case ADD_TO_CART_ERROR:
            return {
                ...state,
                loading:false,
                error:''
            }
        case REMOVE_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:''
            }
        case REMOVE_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                cart:state.cart.filter(item => item.cakeid !== action.payload),
                error:'',
                cartCount: removeCartCount(state.cart, state.cartCount, action.payload)
            }
        case REMOVE_CART_ERROR:
            return {
                ...state,
                loading:false,
                error:''
            }
        case ADD_CAKE_ORDER_REQUEST:
            return {
                ...state,
                loading:true,
                error:''
            }
        case ADD_CAKE_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                cart:[],
                error:'',
                cartCount:0
            }
        case ADD_CAKE_ORDER_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case REMOVE_ONE_FROM_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:''
            }
        case REMOVE_ONE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                cart:state.cart.map(item => {
                    if (item.cakeid == action.payload) {
                        item.quantity--
                    }
                    return item
                }),
                error:'',
                cartCount: state.cartCount - 1
            }
        case REMOVE_ONE_FROM_CART_ERROR:
            return {
                ...state,
                loading:false,
                error:''
            }
        default: return state
    }
}

const getCartCount = (cart) => {
    let cartCount = 0;
    cart.forEach(item => {
        cartCount += item.quantity
    })
    return cartCount
}

const removeCartCount = (cart, cartCount, cakeid) => {
    const item = cart.filter(item => item.cakeid === cakeid)
    return cartCount - item[0].quantity
}

export default cartReducer;