import { all } from "@redux-saga/core/effects"
import { cakeSaga } from "./cakes/cakeSaga"
import { cartSaga } from "./cart/cartSaga"
import { loginSaga } from "./login/loginSaga"
import { ordersSaga } from "./orders/ordersSaga"
export function* rootSaga() {
    yield all([loginSaga(), cartSaga(),cakeSaga(),ordersSaga()])
}