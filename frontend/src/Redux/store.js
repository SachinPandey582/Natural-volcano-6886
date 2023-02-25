import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/auth.reducer";

const reducer = combineReducers({
    authState:authReducer
})

export const store = legacy_createStore(reducer,applyMiddleware(thunk))