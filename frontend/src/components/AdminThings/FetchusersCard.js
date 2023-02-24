import axios from "axios"
import { useEffect, useState } from "react"
const getData1=async()=>{
let res=await axios.get(`http://localhost:8080/users?role=admin&pass=8765`)
return res
}
const UsersData = () => {
    const [users,setusers]=useState([])

    let fetchusers=async()=>{
        let data1=await getData1()
        console.log("data1",data1)
        setusers(data1.data)

    }
console.log(users,"there are the users")
useEffect(()=>{
    fetchusers()
},[])
    return ( 
<div>
    <h1>there are the users</h1>
    {
    users.map((el)=>(
     <li> Name-{el.name} , Email-{el.email}, Role-{el.role}</li>
    ))
}
</div>
        
    )

}
export default UsersData