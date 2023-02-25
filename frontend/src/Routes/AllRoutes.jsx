import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'

import CartPage from '../pages/CartPage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
