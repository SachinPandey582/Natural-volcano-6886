import { ADD_ITEM_TO_CART, DELETE_CART_ITEM, GET_ALL_CART, TOTAL_PRICE, UPDATE_CART_ITEM } from "./CartActionType"


const initialState={
    cart:[],
    totalPrice:0

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
                cart:state.cart.filter((el)=>el._id!==action.payload._id)
             }
        }
        case UPDATE_CART_ITEM:{
            return {
                ...state,
                cart:state.cart.map((el)=>{
                    if(el._id===action.payload._id){
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
        case TOTAL_PRICE:{
            return {
                ...state,
                totalPrice:action.payload
            }
        }
        default:{
            return initialState
        }
    }
}