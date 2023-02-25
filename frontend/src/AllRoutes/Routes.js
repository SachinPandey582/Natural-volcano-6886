import React from 'react'
import {Routes,Route} from "react-router-dom"
import Beauty from '../pages/Beauty'
import Home from '../pages/Home'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Beauty/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes