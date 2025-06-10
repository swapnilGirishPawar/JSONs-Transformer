import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/json-logo.jpg';

const Navbar = () => {
  return (
    <nav className='container'>
      {/* Use an anchor tag for the logo, linking to the home page (or a relevant page) */}
      <Link to="/" className="navbar-logo-link"> 
        <img src={logo} alt="JSONS Transformers & Conductors Logo" className='logo' />
      </Link>
      
      {/* Use semantic ul for navigation links */}
      <ul>
        {/* Use anchor tags for navigation items */}
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><Link to="/services">Services</Link></li>
        {/* For the contact button, consider if it's a link to a section or a separate page */}
        <li><a href="#contact" className='btn'>Contact Us</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;