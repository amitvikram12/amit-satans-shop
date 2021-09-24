import { takeEvery } from "@redux-saga/core/effects"
import { 
    fetchAllCakesGenerator, 
    fetchSearchCakeGenerator 
} from "./cakeGenerator"

export function* cakeSaga() {
    yield takeEvery('FETCH_ALL_CAKES',fetchAllCakesGenerator)
    yield takeEvery('FETCH_SEARCH_CAKES',fetchSearchCakeGenerator)
}