import {compose,legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/CartReducer"

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer=combineReducers({
    cartManager:cartReducer
})


export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))