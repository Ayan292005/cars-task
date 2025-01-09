import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <NavLink to="/" style={{ textDecoration: "none", color: "black", fontSize: "20px", marginRight: "10px" }}>home</NavLink>
      <NavLink to="/cars" style={{ textDecoration: "none", color: "black", fontSize: "20px", marginRight: "10px" }}>Cars</NavLink>
      <NavLink to="/cars/add" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}>Add</NavLink>
    </>
  )
}

export default Navbar