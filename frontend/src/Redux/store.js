<<<<<<< HEAD
import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/auth.reducer";

const reducer = combineReducers({
    authState:authReducer
})

export const store = legacy_createStore(reducer,applyMiddleware(thunk))
=======
import {compose,legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/CartReducer"

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer=combineReducers({
    cartManager:cartReducer
})


export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
>>>>>>> 24cb4d019e3e47799a7eb8f5c7a024f093b663bf
