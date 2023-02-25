import { GET_ALL_CART,ADD_ITEM_TO_CART, DELETE_CART_ITEM, UPDATE_CART_ITEM } from "./CartActionType"


export const allCartData=(data)=>(dispatch)=>{
    dispatch({type:GET_ALL_CART,payload:data})
}
export const addItemToCart=(data)=>(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART,payload:data})
}
export const deleteItemFromCart=(id)=>(dispatch)=>{
    dispatch({type:DELETE_CART_ITEM,payload:{_id:id}})
}
export const updateItemFromCart=(data)=>(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM,payload:data})
}