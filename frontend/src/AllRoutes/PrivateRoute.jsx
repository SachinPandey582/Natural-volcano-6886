import React from 'react'
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

   

    const token = localStorage.getItem("token")

   
    let decode=jwt_decode(token)
    if(decode.user.role==="user"){
       return <Navigate to="/" />
    }

   return <>
   {children}
   </>
    
       
    



    
    
}


export default PrivateRoute
