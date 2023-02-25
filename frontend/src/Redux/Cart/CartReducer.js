import { ADD_ITEM_TO_CART, DELETE_CART_ITEM, GET_ALL_CART, UPDATE_CART_ITEM } from "./CartActionType"


const initialState={
    cart:[],

}
export const cartReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_ITEM_TO_CART:{
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        case DELETE_CART_ITEM:{
             return {
                ...state,
                cart:state.cart.filter((el)=>el.id!==action.payload.id)
             }
        }
        case UPDATE_CART_ITEM:{
            return {
                ...state,
                cart:state.cart.map((el)=>{
                    if(el.id===action.payload.id){
                        return {
                            ...el,...action.payload
                        }
                    }
                    return el
                })
            }
        }
        case GET_ALL_CART:{
            return {
                ...state,
                cart:action.payload
            }
        }
        default:{
            return initialState
        }
    }
}