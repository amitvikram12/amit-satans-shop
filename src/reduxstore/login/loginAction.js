import axios from "axios";
import { 
    FETCH_LOGIN_REQUEST, 
    FETCH_LOGIN_SUCCESS, 
    FETCH_LOGIN_ERROR, 
    FETCH_USERDATA_REQUEST, 
    FETCH_USERDATA_SUCCESS, 
    FETCH_USERDATA_ERROR,
    FETCH_LOGIN,
    FETCH_USER 
} from "./loginTypes";

export const fetchLoginRequest = () => {
    return {
        type:FETCH_LOGIN_REQUEST,
    }
};

export const fetchLoginSuccess = payload => {
    console.log(payload)
    return {
        type:FETCH_LOGIN_SUCCESS,
        payload:payload
    }
}

export const fetchLoginError = payload => {
    return {
        type:FETCH_LOGIN_ERROR, 
        payload:payload
    }
}

export const fetchUserDataRequest = () => {
    return {
        type:FETCH_USERDATA_REQUEST
    }
}

export const fetchUserDataSuccess = payload => {
    return {
        type:FETCH_USERDATA_SUCCESS,
        payload:payload,
    }
}

export const fetchUserDataError = payload => {
    return {
        type:FETCH_USERDATA_ERROR,
        payload:payload
    }
}

export const fetchLogin = (email, password) => {
    return {
        type:FETCH_LOGIN,
        data:{email, password}
    }
} 

export const fetchUserData = (authToken) => {
   return {
       type:FETCH_USER,
       authToken:authToken
   }
}