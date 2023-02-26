import React, { useEffect, useState } from "react";
// import AdminSam from '../components/AdminThings/Card1'
import NavbarOfAdmin from "../components/AdminThings/Navbaradmin";
import ADcss from "./AdminPage.module.css";
import axios from "axios";
// import ProductAddToCart from '../components/AdminThings/ProductCard'
import { Button, Center, Grid, Heading, Input, list } from "@chakra-ui/react";
import AD1css from "./AdminPage.module.css";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/AdminThings/AddTheData";
// import UsersData from '../components/AdminThings/FetchusersCard'

const AdminPage1 = () => {
  const [data, setdata] = useState([]);
  //here i am getting  all the data

  const [currpage, setcurrpage] = useState(1);
  
const navigate=useNavigate()
  const getData = async () => {
    // let res=  await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/users?role=admin&pass=8765`)
    let res = await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/products`);
    setdata(res.data);
    return res;
  };
 

  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={ADcss.mainContainer}>
      <div className={ADcss.firstContainer}>
        <div className={ADcss.logoofmypage}>
          <img src="/spritsvilla logo.jpg" alt="logod" />
        </div>
        <div>
          <img
            className={ADcss.center}
            src="https://avatars.githubusercontent.com/u/105917658?v=4"
            alt="Avatar"
          />
        </div>
        <div className={ADcss.Nameofperson}>Sachin Pandey</div>
        <p className={ADcss.position}>Deputy manager</p>
        <br />
        <div className={ADcss.Sidebarfirstsection}>
        <div onClick={()=>navigate("/admin")} >
                        DASHBOARD
                    </div>
        </div>
        {/* /admin/checktheusers */}
        <div className={ADcss.Sidebarsecondsection}>
        <div onClick={() => navigate("/admin/addtheproduct")}>
            Add the Products
          </div>
        </div>
        <div className={ADcss.Sidebarsecondsection}>
          <div onClick={()=>navigate("/admin/checktheusers")}>Check All The Users</div>
        </div>
        <div className={ADcss.Sidebarsecondsection}>
          <div>Todays Order</div>
        </div>
        <div className={ADcss.Sidebarsecondsection}>
        <div onClick={()=>navigate("/admin/seeallthecollections")}>Collections</div>
        </div>
        <div className={ADcss.logoutcombo}>
          {" "}
          <div>
            <img src="/icons8-logout-rounded-100.png" alt="logoutavatar" />
          </div>
          <div>Logout</div>
        </div>
      </div>
      {/* //second container is present here  */}
      <div className={ADcss.secondContainer}>
        <NavbarOfAdmin />

        <div >
        <br/>
        <br/>

          <Center>
          <Heading>Add the NewProducts</Heading>
          </Center>
          <br/>
         <div style={{margin:'auto',width:"50%"}} >
     
         <ProductForm/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage1;
