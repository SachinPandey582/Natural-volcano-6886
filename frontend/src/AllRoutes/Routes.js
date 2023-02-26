import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/AdminPage";
import AdminPage1 from "../Pages/AdminPage1";
import AdminPage2 from "../Pages/Adminpage2";
import AdminPage3 from "../Pages/AdminPage3";
import Beauty from "../Pages/BeautyPage";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivateRoute from "./PrivateRoute";
// import AdminLandingPage from '../pages/Check'
const AllRoutes = () => {
  return (
    <div>
<<<<<<< HEAD
      <Routes >
      
        
        <Route path='/admin' element={<AdminPage/>}></Route>
        <Route path='/admin/addtheproduct' element={<AdminPage1/>}></Route>
        <Route path='/admin/checktheusers' element={<AdminPage2/>}></Route>
        <Route path='/admin/seeallthecollections' element={<AdminPage3/>}></Route>
=======
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<PrivateRoute><AdminPage/></PrivateRoute>}></Route>
        <Route path="/admin/addtheproduct" element={<PrivateRoute><AdminPage1/></PrivateRoute>}></Route>
        <Route path="/admin/checktheusers" element={<PrivateRoute><AdminPage2/></PrivateRoute>}></Route>
        <Route
          path="/admin/seeallthecollections"
          element={<PrivateRoute><AdminPage3/></PrivateRoute>}
        ></Route>
        
        <Route path="/products" element={<Beauty />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:id" element={<SingleProductPage/>} />
>>>>>>> 24cb4d019e3e47799a7eb8f5c7a024f093b663bf
      </Routes>
    </div>
  );
};

export default AllRoutes;
