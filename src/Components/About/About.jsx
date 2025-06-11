import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import BgRemovelogo from '../../assets/json-logo-nobg.png';
import TrustedClients from '../TrustedClients/TrustedClients';
import ContactInfo from '../ContactInfo/ContactInfo';

// Google Forms entry IDs - these should ideally be in a config file or environment variables
const FORM_ENTRY_IDS = {
  name: 'entry.434918507',
  phone: 'entry.529917742',
  email: 'entry.1500510906',
  message: 'entry.891893625',
};

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfw5GD3LFyUje4F17DyqmAU64nrDqUATXllGLabwcqnTJ28Xw/formResponse';

const About = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [status, setStatus] = useState('');

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Please enter exactly 10 digits';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Only allow numbers for phone field
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: numericValue
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
    // Clear error when user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setStatus('Sending...');

    const formBody = new FormData();
    formBody.append(FORM_ENTRY_IDS.name, formData.name);
    formBody.append(FORM_ENTRY_IDS.phone, formData.phone);
    formBody.append(FORM_ENTRY_IDS.email, formData.email);
    formBody.append(FORM_ENTRY_IDS.message, formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      });

      setStatus('Response sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({ name: '', phone: '', email: '' });

      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to send response. Please try again.');
    }
  }, [formData]);

  return (
    <footer className="about-footer" id="contact">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={BgRemovelogo} alt="JSONS Transformers & Conductors Logo" />
          <div className="social-icons">
            {/* Consider making these social icons configurable or map over an array */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links">
          {/* Reusable LinkSection component could be created if there are many such sections */}
          <div className="link-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/faq'); }}>FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/downloads'); }}>Downloads</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/coming-soon'); }}>Spare Parts</a></li>
            </ul>
          </div>
          <div className="link-section">
            <h4>JSONS</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/about-us'); }}>About JSONS</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/career'); }}>Careers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/newsroom'); }}>Newsroom</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-enquiry">
          <h4>Enquiry Now</h4>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label="Name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="10"
                aria-label="Phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label="Email address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
              ></textarea>
            </div>
            <button type="submit" className="send-btn">Send</button>
          </form>
          {status && <p className="form-status" aria-live="polite">{status}</p>}
        </div>
      </div>

      <div className="red-line"></div>
      <ContactInfo />

      <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/terms-and-conditions'); }}>Terms and Conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/terms-and-conditions'); }}>Shipping, Returns & Warranty</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/terms-and-conditions'); }}>Trademark and Copyright Guidelines</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/terms-and-conditions'); }}>Business Partner Code of Conduct</a>
        </div>
        <p>&copy; 2025 Copyright</p>
      </div>
    </footer>
  );
};

export default About;