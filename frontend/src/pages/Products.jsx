import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <h1>Products</h1>
    <Link to={`product/:${1}`}><h1>product1</h1></Link>
    </>
  )
}

export default Products