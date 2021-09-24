import { 
    CAKE_FETCH_ALL_ERROR, 
    CAKE_FETCH_ALL_REQUEST, 
    CAKE_FETCH_ALL_SUCCESS, 
    CAKE_FETCH_SEARCH_ERROR, 
    CAKE_FETCH_SEARCH_REQUEST, 
    CAKE_FETCH_SEARCH_SUCCESS
 } from "./cakeTypes";

const initialState = {
    loading:false,
    cakes:[],
    error:'',
    pageCount:0
};

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_FETCH_ALL_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case CAKE_FETCH_ALL_SUCCESS:
            return {
                ...state,
                loading:false,
                cakes:action.payload,
                pageCount: Math.ceil(action.payload.length / 10)
            }
        case CAKE_FETCH_ALL_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload,
                pageCount:0
            }
        case CAKE_FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading:true,
                pageCount:0
            }
        case CAKE_FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading:false,
                cakes:action.payload,
                pageCount:Math.ceil(action.payload.length / 10)
            }
        case CAKE_FETCH_SEARCH_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload,
                pageCount:0
            }
        default: return state;
    }
}

export default cakeReducer;