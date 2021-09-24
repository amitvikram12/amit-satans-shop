import { put, call } from "@redux-saga/core/effects"
import axios from "axios"
import {
    getOrderListRequest,
    getOrderListSuccess,
    getOrderListError
} from './ordersAction'
export function* ordersGenerator() {
    yield put(getOrderListRequest())
    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/cakeorders`
        const headers = {
            headers:{
                authtoken:localStorage.token
            }
        }
        return axios.post(url, {}, headers).then(
            response => response.data
        ).catch(
            error => {
                throw error
            }
        )
    }

    try {
        const data = yield call(apiCall)
        if (data) {
            console.log(data)
            yield put(getOrderListSuccess(data))
        }
        
    } catch (error) {
        yield put(getOrderListError(error.message))
    }
}
