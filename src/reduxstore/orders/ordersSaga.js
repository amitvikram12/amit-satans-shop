import { takeEvery } from "@redux-saga/core/effects";
import { ordersGenerator } from "./ordersGenerator";

export function* ordersSaga() {
    yield takeEvery('LIST_ORDER', ordersGenerator);
}
