import {
  GET_USERDATA_ERROR,
  GET_USERDATA_LOADING,
  GET_USERDATA_SUCCESS,
  LOGOUT_USERDATA_SUCCESS,
  POST_USERDATA_ERROR,
  POST_USERDATA_LOADING,
  POST_USERDATA_SUCCESS,
} from "./auth.actionTypes";
import { getUserData, postUserData } from "./auth.api";



export const handleUserLogin = (userDataLogin) => async (dispatch) => {
  dispatch({ type: GET_USERDATA_LOADING });
  try {
    let res = await getUserData(userDataLogin);
    // console.log(res);
    dispatch({ type: GET_USERDATA_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: GET_USERDATA_ERROR });
  }
};

export const handleUserPost = (userData) => async (dispatch) => {
    
  dispatch({ type: POST_USERDATA_LOADING });
  try {
    let res = await postUserData(userData);
    localStorage.setItem("token", res.data.token);
    // console.log(res.data);
    
    // console.log("hiii");
    dispatch({ type: POST_USERDATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_USERDATA_ERROR });
  }
};


export const userLogout = () => (dispatch) =>{
    dispatch({type:LOGOUT_USERDATA_SUCCESS})
}
