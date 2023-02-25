import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AdminPage1 from '../pages/AdminPage1'
import AdminPage2 from '../pages/Adminpage2'
import AdminPage3 from '../pages/AdminPage3'
// import AdminLandingPage from '../pages/Check'
const AllRoutes = () => {
  return (
    <div>
      <Routes >
{/* <Route path='/' element={<AdminLandingPage/>}></Route> */}
<Route path='/admin' element={<AdminPage/>}></Route>
<Route path='/admin/addtheproduct' element={<AdminPage1/>}></Route>
<Route path='/admin/checktheusers' element={<AdminPage2/>}></Route>
<Route path='/admin/seeallthecollections' element={<AdminPage3/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes