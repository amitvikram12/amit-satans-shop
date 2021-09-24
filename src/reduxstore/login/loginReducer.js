import { 
    FETCH_LOGIN_REQUEST, 
    FETCH_LOGIN_SUCCESS, 
    FETCH_LOGIN_ERROR,
    FETCH_USERDATA_ERROR,
    FETCH_USERDATA_REQUEST,
    FETCH_USERDATA_SUCCESS 
} from "./loginTypes";

const initialLoginState = {
    loading: false,
    isLoggedIn: localStorage.token ? true : false,
    authToken:localStorage.token || null,
    userdata:null,
    error:""
};

const loginReducer = (state = initialLoginState, action) => {
    switch(action.type) {
        case FETCH_LOGIN_REQUEST: {
            return {
                ...state,
                loading:true
            }
        }

        case FETCH_LOGIN_SUCCESS: {
            return {
                ...state,
                loading:false,
                isLoggedIn: true,
                authToken:action.payload,
            }
        }

        case FETCH_LOGIN_ERROR: {
            return {
                ...state,
                loading:false,
                isLoggedIn: false,
                error:action.payload
            }
        }
        case FETCH_USERDATA_REQUEST: {
            return {
                ...state,
                loading:true
            }
        }
        case FETCH_USERDATA_SUCCESS:
            return {
                ...state,
                loading:false,
                userdata:action.payload
            }
        
        case FETCH_USERDATA_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload,
                isLoggedIn:false
            }
        default:return state;
    }
};

export default loginReducer;