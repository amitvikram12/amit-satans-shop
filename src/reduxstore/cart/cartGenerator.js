import { put , call } from "@redux-saga/core/effects"
import history from "../history"
import axios from "axios"
import { 
    addCakeOrder,
    addCakeOrderRequest,
    addCakeOrderSuccess,
    addToCartError,
    addToCartRequest,
    addToCartSuccess,
    fetchCartError, 
    fetchCartRequest, 
    fetchCartSuccess, 
    getOrderListError, 
    getOrderListRequest, 
    getOrderListSuccess, 
    removeCartError, 
    removeCartRequest, 
    removeCartSuccess, 
    removeOneFromCartError, 
    removeOneFromCartSuccess
} from "./cartAction"

export function* fetchCartGenerator() {
    yield put(fetchCartRequest())
    const apiCall = () => {
        return axios.post(`${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/cakecart`, {}).then(
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
            yield put(fetchCartSuccess(data.data))
        }
    }
    catch(e) {
        yield put(fetchCartError(e.message))
    }
    
}

export function* removeCartGenerator(action) {
    yield put(removeCartRequest())

    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/removecakefromcart`
        const data = {cakeid:action.cakeid}
        return axios.post(url, data).then(
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
            yield put(removeCartSuccess(action.cakeid))
        }
    }
    catch(e) {
        yield put(removeCartError(e.message))
    }
}

export function* addCakeToCartGenerator(action) {
    yield put(addToCartRequest())

    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/addcaketocart`
        const postData = {
            name:action.payload.name,
            cakeid:action.payload.cakeid,
            price:action.payload.price,
            weight: action.payload.weight,
            image:action.payload.image,
            quantity:1
        }
        return axios.post(url, postData).then(
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
            alert("Product added to cart successfully")
            yield put(addToCartSuccess())
        }
    }
   catch (e) {
       yield put(addToCartError(e.message))
   }
    
}

export function* removeOneFromCartGenerator(action) {
    yield put(removeCartRequest())

    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/removeonecakefromcart`
        const postData = {cakeid:action.payload}

        return axios.post(url, postData).then(
            response => response.data
        ).catch(
            error => {
                throw error
            }
        )
    }

    try{
        const data = yield call(apiCall)
        if (data) {
            yield put(removeOneFromCartSuccess(action.payload))
        }
    }
    catch(e) {
        yield put(removeOneFromCartError(e.message))
    }
}

export function* addCakeOrderGenerator(action) {
    yield put(addCakeOrderRequest())
    const apiCall = () => {
        const url = `${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/addcakeorder`
        const data = action.payload
        const header = {
            headers:{
                authtoken: localStorage.token
            }
        }
        return axios.post(url, data, header).then(
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
            yield put(addCakeOrderSuccess())
            history.push("/orders")
        }
    }
    catch(e) {
        yield put(addToCartError(e.message))
    }

}

