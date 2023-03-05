import {
  GET_USERDATA_ERROR,
  GET_USERDATA_LOADING,
  GET_USERDATA_SUCCESS,
  LOGOUT_USERDATA_SUCCESS,
  POST_USERDATA_ERROR,
  POST_USERDATA_LOADING,
  POST_USERDATA_SUCCESS,
} from "./auth.actionTypes";

const intialState = {
  isAuth: localStorage.getItem("token")?true:false,
  authData: {},
  error: false,
  loading: false,
  isAuthLogin: false,
  isAuthSignup: false,
  isExist:false
};

export const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_USERDATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USERDATA_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case GET_USERDATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        authData: payload,
        isAuthLogin:true,
        isAuthSignup:false
      };
    }
    case POST_USERDATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        authData: payload,
        isAuthSignup: true,
        isAuthLogin:false,
        isExist:true
      };
    }
    case POST_USERDATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POST_USERDATA_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    case LOGOUT_USERDATA_SUCCESS: {
        return{
            ...state,
            isAuth:false,
            authData:{}
        }
    }
    default: {
      return state;
    }
  }
};
