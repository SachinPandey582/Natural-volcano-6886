import React, { useEffect, useState } from "react";
// import AdminSam from '../components/AdminThings/Card1'
import NavbarOfAdmin from "../components/AdminThings/Navbaradmin";
import ADcss from "./AdminPage.module.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import NumberGraph from "../components/AdminThings/Graph";

const AdminPage = () => {
  console.log(process.env.REACTAPI)
  const [data, setdata] = useState([]);
  const [data1,setdata1]=useState([])
  const [data2,setdata2]=useState([])
  const [data3,setdata3]=useState([])
  //here i am getting  all the data

  
  //here i am setting the page of the data

  const navigate = useNavigate();

  const getData = async () => {
    // let res=  await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/users?role=admin&pass=8765`)
    let res = await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/products`);
    setdata(res.data);
    return res;
  };

  const getData1 = async () => {
    // let res=  await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/users?role=admin&pass=8765`)
    let res = await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/products?category=Home`);
    setdata1(res.data);
    return res;
  };
  const getData2 = async () => {
    // let res=  await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/users?role=admin&pass=8765`)
    let res = await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/products?category=Beauty`);
    setdata2(res.data);
    return res;
  };const getData3 = async () => {
    // let res=  await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/users?role=admin&pass=8765`)
    let res = await axios.get(`https://cute-tan-magpie-kilt.cyclic.app/products?category=Fashion`);
    setdata3(res.data);
    return res;
  };
  console.log(data);
  useEffect(() => {
    getData();
    getData1()
    getData2()
    getData3()
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
          <div onClick={() => navigate("/admin")}>DASHBOARD</div>
        </div>
        <div className={ADcss.Sidebarsecondsection}>
          <div onClick={() => navigate("/admin/addtheproduct")}>
            Add the Products
          </div>
        </div>
        <div className={ADcss.Sidebarsecondsection}>
          <div onClick={() => navigate("/admin/checktheusers")}>
            Check All The Users
          </div>
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
        <br/>
       
        <div className={ADcss.product_counter} style={{ margin:"auto",width:"100%" }}>
  <span className={ADcss.count}>{data.length}</span>
  <span className={ADcss.label}>Total Number of Products</span>
</div>
<br/>
<br/>

<div className={ADcss.product_counter1} style={{ margin:"auto",width:"100%" }}>
  <span className={ADcss.count}>{data1.length}</span>
  <span className={ADcss.label}>Total Number of Home Products</span>
</div>
<br/>
<br/>

<div className={ADcss.product_counter2} style={{ margin:"auto",width:"100%" }}>
  <span className={ADcss.count}>{data2.length}</span>
  <span className={ADcss.label}>Total Number of Beauty Products</span>
</div>
<br/>
<br/>

<div className={ADcss.product_counter3} style={{ margin:"auto",width:"100%" }}>
  <span className={ADcss.count}>{data3.length}</span>
  <span className={ADcss.label}>Total Number of Fashion Products</span>
</div>
<br/>
<br/>
<div style={{display:"flex"}}>

<div>
<NumberGraph num1={data1.length} num2={data2.length} num3={data3.length}/> 

</div>

</div>

        <br />
      </div>
    </div>
  );
};

export default AdminPage;

// {
//   /* <ProductAddToCart    id={el._id}  imageURL={el.img} name={el.title} price={el.price} /> */
// }
