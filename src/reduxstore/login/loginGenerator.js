import { put, call } from "@redux-saga/core/effects"
import axios from "axios"
import { fetchLoginError, fetchLoginSuccess, fetchLoginRequest, fetchUserDataRequest, fetchUserDataSuccess, fetchUserDataError} from "./loginAction"
export function* loginGenerator(action) {
   yield put(fetchLoginRequest())
   const apiCall = () => {
       return axios.post(`${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/login`,action.data).then(
            response => {
                localStorage.setItem("token",response.data.token)
                return response.data
        }
       ).catch(
           error =>{
            throw error
        })
   }

   try{
       const data = yield call(apiCall)
       if (data) {
        yield put(fetchLoginSuccess(data.token))
       }
   }
   catch(e) {
       yield put(fetchLoginError(e.message))
   }
}

export function* fetchUserGenerator(action) {
    yield put(fetchUserDataRequest())

    const apiCall = () => {
        const header = {
            headers: {
                authtoken:action.authToken
            }
        }
        return axios.get(`${process.env.REACT_APP_CAKE_WEBSITE_API_URL}/getuserdetails`, header).then(
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
            yield put(fetchUserDataSuccess(data.data))
        }
    }
    catch(e) {
        yield put(fetchUserDataError(e.message))
    }
}