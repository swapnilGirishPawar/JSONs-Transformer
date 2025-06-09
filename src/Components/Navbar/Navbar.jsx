import React from 'react'
import './Navbar.css'
import logo from '../../assets/json-logo.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src = {logo} alt='' className='logo'/>
      <ul>
        <li>About Us</li>
        <li>Products</li>
        <li>Services</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar