// import {compose,legacy_createStore,applyMiddleware,combineReducers} from "redux"
// import thunk from "redux-thunk"
// import { cartReducer } from "./Cart/CartReducer"

// const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

// const rootReducer=combineReducers({
//     cartManager:cartReducer
// })


// export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))


// import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk"
// import { authReducer } from "./Auth/auth.reducer";

// const reducer = combineReducers({
//     authState:authReducer
// })

// export const store = legacy_createStore(reducer,applyMiddleware(thunk))

import {compose,legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/CartReducer"
import { authReducer } from "./Auth/auth.reducer";

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer=combineReducers({
    cartManager:cartReducer,
    authState:authReducer
})


export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
