import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./reducer/rootReducer"
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga/rootSaga'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware ,thunk]

// export const configureStore = () =>{
//     let store = createStore(rootReducer, applyMiddleware(...middlewares))
//     return store;
// }

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

sagaMiddleware.run(rootSaga)

export default store