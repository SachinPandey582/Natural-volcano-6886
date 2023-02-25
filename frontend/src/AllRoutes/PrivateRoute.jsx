import React from 'react'
import { useNavigate } from "react-router-dom";
const jswt=require("jsonwebtoken")

const PrivateRoute = ({ children }) => {

    const nav = useNavigate()

    const token = localStorage.getItem("token")
    jswt.verify(token, "hanumat", async (error, decoded) => {
        if (decoded) {
            if (decoded.user.role === "user") {
                alert("Your are Not Authorized For The Role of The Admin")
            } else {
                return nav("/admin")
            }

        }
        if (error) alert("Something went Wrong")

    });



    return (
        <div>
            {/* <Admin Route {children}*/}
        </div>
    )
}

export default PrivateRoute
