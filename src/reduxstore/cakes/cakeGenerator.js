import { call, put } from "@redux-saga/core/effects"
import axios from "axios"
import { 
    fetchAllCakesError, 
    fetchAllCakesRequest, 
    fetchAllCakesSuccess, 
    fetchSearchCakesError, 
    fetchSearchCakesRequest, 
    fetchSearchCakesSuccess 
} from "./cakeActions"

export function* fetchAllCakesGenerator() {
    yield put(fetchAllCakesRequest())
    const apiCall = () => {
       const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/allcakes`
       return axios.get(url).then(
           response => response.data
       ).catch(
           error => {
               throw error
           }
       ) 
    }

    try{
        const data = yield call(apiCall)
        if (data.data) {
            yield put(fetchAllCakesSuccess(data.data))
        }
    }
    catch(e) {
        yield put(fetchAllCakesError(e.message))
    }
}

export function* fetchSearchCakeGenerator(action) {
    yield put(fetchSearchCakesRequest())
    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/searchcakes?q=${action.searchText}`
        return axios.get(url).then(
            response => response.data
        ).catch(
            error => {
                throw error
            }
        )
    }

    try {
        const data = yield call(apiCall)
        if (data.data) {
            yield put(fetchSearchCakesSuccess(data.data))
        }
    }
    catch(e) {
        yield put(fetchSearchCakesError(e.message))
    }
}