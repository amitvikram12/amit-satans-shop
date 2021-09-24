import { takeEvery } from "@redux-saga/core/effects";
import { fetchUserGenerator, loginGenerator } from "./loginGenerator";
export function* loginSaga() {
    yield takeEvery("FETCH_LOGIN",loginGenerator)
    yield takeEvery("FETCH_USER",fetchUserGenerator)
}