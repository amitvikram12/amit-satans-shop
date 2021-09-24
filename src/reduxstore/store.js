import { createStore,applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { rootSaga } from "./saga"
import { routerMiddleware,ConnectedRouter } from "react-router-redux"
import history from "./history"

const sagaMiddleware = createSagaMiddleware()
let store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware, routerMiddleware(history)))
sagaMiddleware.run(rootSaga)

export default store;
