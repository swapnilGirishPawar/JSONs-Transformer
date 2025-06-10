import React, { useState, useCallback } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Use useCallback for handleChange to prevent unnecessary re-renders of child components
  // if they were to memoize, though not strictly necessary for simple inputs.
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }, []); // Empty dependency array means it's created once

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus('Sending...'); // Provide immediate feedback to the user

    const formBody = new FormData();
    formBody.append(FORM_ENTRY_IDS.name, formData.name);
    formBody.append(FORM_ENTRY_IDS.phone, formData.phone);
    formBody.append(FORM_ENTRY_IDS.email, formData.email);
    formBody.append(FORM_ENTRY_IDS.message, formData.message);

    try {
      // Using async/await for cleaner asynchronous code
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms submission
        body: formBody
      });

      setStatus('Response sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form

      // Disappear message after 3 seconds
      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Form submission error:', error);
      setStatus('Failed to send response. Please try again.');
    }
  }, [formData]); // Dependency on formData ensures the latest form data is captured

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
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Spare Parts</a></li>
            </ul>
          </div>
          <div className="link-section">
            <h4>JSONS</h4>
            <ul>
              <li><a href="#">About JSONS</a></li>
              <li><a href="#">JSONS Design</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-enquiry">
          <h4>Enquiry Now</h4>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-label="Phone number"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email address"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
            ></textarea>
            <button type="submit" className="send-btn">Send</button>
          </form>
          {status && <p className="form-status" aria-live="polite">{status}</p>}
        </div>
      </div>

      <div className="red-line"></div>
      <ContactInfo />

      <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Shipping, Returns & Warranty</a>
          <a href="#">Trademark and Copyright Guidelines</a>
          <a href="#">Business Partner Code of Conduct</a>
        </div>
        <p>&copy; 2025 Copyright</p>
      </div>
    </footer>
  );
};

export default About;