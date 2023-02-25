import * as types from "./actionTypes"
import axios from "axios"
// import { useDispatch } from "react-redux"
// const dispatch=useDispatch()
const getProductsRequest=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getProductsSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
const getProductsError = () => {
    return {
        type: types.GET_PRODUCTS_ERROR
    }
}

const getProducts=()=>(dispatch)=>{
    dispatch(getProductsRequest())
    return axios.get('http://localhost:8080/products?category=Beauty&page=1&limit=10').then(res=>{
        dispatch(getProductsSuccess(res.data))
    }).catch(err=>{
        dispatch(getProductsError(err))
    })
}

export {getProducts}