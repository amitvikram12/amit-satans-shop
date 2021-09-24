import axios from "axios"
import { 
    CAKE_FETCH_SEARCH_REQUEST, 
    CAKE_FETCH_SEARCH_SUCCESS, 
    CAKE_FETCH_SEARCH_ERROR, 
    CAKE_FETCH_ALL_SUCCESS, 
    CAKE_FETCH_ALL_REQUEST, 
    CAKE_FETCH_ALL_ERROR, 
    FETCH_ALL_CAKES,
    FETCH_SEARCH_CAKES
} from "./cakeTypes"

export const fetchAllCakesRequest = () => {
    return {
        type:CAKE_FETCH_ALL_REQUEST
    }
} 

export const fetchAllCakesSuccess = payload =>  {
    return {
        type:CAKE_FETCH_ALL_SUCCESS,
        payload:payload
    }
}

export const fetchAllCakesError = payload => {
    return {
        type:CAKE_FETCH_ALL_ERROR,
        payload:payload
    }
}

export const fetchSearchCakesRequest = () => {
    return {
        type:CAKE_FETCH_SEARCH_REQUEST
    }
}

export const fetchSearchCakesSuccess = payload => {
    return {
        type: CAKE_FETCH_SEARCH_SUCCESS,
        payload:payload
    }
}

export const fetchSearchCakesError = payload => {
    return {
        type: CAKE_FETCH_SEARCH_ERROR,
        payload: payload
    }
}

export const fetchAllCakes = () => {
    return {
        type:FETCH_ALL_CAKES
    }
}

export const fetchSearchCakes = (searchText) => {
    return {
        type:FETCH_SEARCH_CAKES,
        searchText:searchText
    }
}

