import { GET_USERDATA_ERROR, GET_USERDATA_LOADING, GET_USERDATA_SUCCESS, POST_USERDATA_ERROR, POST_USERDATA_LOADING, POST_USERDATA_SUCCESS } from "./auth.actionTypes"

const intialState = {
    isAuth:false,
    authData :{},
    error:false,
    loading:false
}

export const authReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_USERDATA_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_USERDATA_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_USERDATA_SUCCESS:{
            return{
                ...state,
                loading:false,
                isAuth:true,
                authData:payload
            }
        }
        case POST_USERDATA_SUCCESS:{
            return{
                ...state,
                loading:false,
                isAuth:true,
                authData:payload
            }
        }
        case POST_USERDATA_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case POST_USERDATA_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        default:{
            return state
        }
    }
}