import * as types from "./actionTypes"

const initialState={
    products:[],
    isLoading:false,
    isError:false
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return {...oldState,isLoading:true}
        case types.GET_PRODUCTS_SUCCESS:
            return {...oldState,isLoading:false,products:payload}
        case types.GET_PRODUCTS_ERROR:
            return {...oldState,isLoading:false,isError:true}
            default:
                return oldState;
    }
}

export {reducer}