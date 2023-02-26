import React from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const nav = useNavigate()

    const token = localStorage.getItem("token")

   
    if (token!=="1234") {
        let decode=jwt_decode(token)
        if(decode.user.role==="admin"){
           return nav("/admin")
        }else{
          return nav("/")
        }
    }
       
   



    return (
        <div>
            {/* <Admin Route {children}*/}
        </div>
    )
}


export default PrivateRoute
