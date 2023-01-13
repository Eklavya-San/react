import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to="/Home"><h1>Home</h1></Link>
        <Link to="/List"><h1>List</h1></Link>
        <Link to="/Form"><h1>Form</h1></Link>

    </div>
  )
}

export default Navbar