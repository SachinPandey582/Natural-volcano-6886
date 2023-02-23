import React, { useEffect, useState } from 'react'
import AdminSam from '../components/AdminThings/Card1'
import NavbarOfAdmin from '../components/AdminThings/Navbaradmin'
import ADcss from "./AdminPage.module.css"
import axios from "axios"



const AdminPage = () => {
const [data,setdata]=useState([])
//here i am getting  all the data 

const [currpage,setcurrpage]=useState(1)
//here i am setting the page of the data 

const [totalpage,settotalpage ]=useState(0)
//here i am setting the total no of pages of the data 

const [searchTerm,setSearchTerm]=useState("")
//here this is going to use by me for search functionality

const [loading ,setloading]=useState(false)
//here this is the loading part to solve the loading indicator here 


const getData=async()=>{
    // let res=  await axios.get(`http://localhost:8080/users?role=admin&pass=8765`)
    let res=  await axios.get(`http://localhost:8080/products`)
    setdata(res.data)
        return res

}
   console.log(data)
    useEffect(()=>{
  getData()

    },[])
    return (
        <div className={ADcss.mainContainer}>

            <div className={ADcss.firstContainer}>

                <div className={ADcss.logoofmypage}>
                    <img src='/spritsvilla logo.jpg' alt='logod' />
                </div>
                <div >
                    <img className={ADcss.center} src='https://avatars.githubusercontent.com/u/105917658?v=4' alt='Avatar' />
                </div>
                <div className={ADcss.Nameofperson}>Sachin Pandey</div>
                <p className={ADcss.position} >Deputy manager</p>
                <br/>
                <div className={ADcss.Sidebarfirstsection}>
                    <div>
                        DASHBOARD
                    </div>
                </div>
                <div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Edit the Products
                    </div>

                </div>
                <div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Shipped
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Todays Order
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Collections
                    </div>

                </div>
                <div className={ADcss.logoutcombo}> <div>
                    <img src='/icons8-logout-rounded-100.png' alt='logoutavatar' /></div>

                    <div>
                        Logout
                    </div>
                </div>
            </div>
            <div className={ADcss.secondContainer}>
               <NavbarOfAdmin/>
            <div>
                Total No of Products
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}

export default AdminPage