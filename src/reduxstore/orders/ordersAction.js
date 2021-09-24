import {
    LIST_ORDER_REQUEST,
    LIST_ORDER_SUCCESS,
    LIST_ORDER_ERROR,
    LIST_ORDER
} from './orderTypes'

export const getOrderListRequest = () => {
    return {
        type:LIST_ORDER_REQUEST
    }
}

export const getOrderListSuccess = (data) => {
    return {
        type:LIST_ORDER_SUCCESS,
        payload:data.cakeorders
    }
}

export const getOrderListError = (error) => {
    return {
        type:LIST_ORDER_ERROR,
        payload:error
    }
}



export const getOrderList = () => {
    return {
        type:LIST_ORDER
    }
}