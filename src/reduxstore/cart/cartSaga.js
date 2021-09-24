import { takeEvery } from "@redux-saga/core/effects";
import { 
    addCakeToCartGenerator, 
    fetchCartGenerator, 
    removeCartGenerator, 
    removeOneFromCartGenerator,
    addCakeOrderGenerator
} from "./cartGenerator";

export function* cartSaga() {
    yield takeEvery('FETCH_CART',fetchCartGenerator)
    yield takeEvery('REMOVE_FROM_CART', removeCartGenerator)
    yield takeEvery('ADD_TO_CART', addCakeToCartGenerator)
    yield takeEvery('REMOVE_ONE_FROM_CART', removeOneFromCartGenerator)
    yield takeEvery('ADD_CAKE_ORDER', addCakeOrderGenerator)
}