import React, { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/json-logo.jpg';
import clickSound from '../../assets/sounds/click.mp3';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const audioRef = useRef(new Audio(clickSound));

  const playClickSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(error => {
      console.log("Audio play failed:", error);
    });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    playClickSound();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    playClickSound();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    playClickSound();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about-us');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavLinkClick = () => {
    playClickSound();
  };

  return (
    <nav className='container'>
      {/* Use an anchor tag for the logo, linking to the home page (or a relevant page) */}
      <Link to="/" className="navbar-logo-link" onClick={handleLogoClick}> 
        <img src={logo} alt="JSONS Transformers & Conductors Logo" className='logo' />
      </Link>
      
      {/* Use semantic ul for navigation links */}
      <ul>
        {/* Use anchor tags for navigation items */}
        <li><Link to="/about-us" onClick={handleNavLinkClick}>About Us</Link></li>
        <li><a href="#" onClick={handleProductsClick}>Products</a></li>
        <li><Link to="/services" onClick={handleNavLinkClick}>Services</Link></li>
        <li><Link to="/projects" onClick={handleNavLinkClick}>Projects</Link></li>
        {/* For the contact button, consider if it's a link to a section or a separate page */}
        <li><a href="#" onClick={handleContactClick} className='btn'>Contact Us</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;