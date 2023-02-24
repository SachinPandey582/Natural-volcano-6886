import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
// import AdminLandingPage from '../pages/Check'
const AllRoutes = () => {
  return (
    <div>
      <Routes >
{/* <Route path='/' element={<AdminLandingPage/>}></Route> */}
<Route path='/admin' element={<AdminPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes