import React, { useState } from 'react';
import './About.css';
import BgRemovelogo from '../../assets/json-logo-nobg.png';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfw5GD3LFyUje4F17DyqmAU64nrDqUATXllGLabwcqnTJ28Xw/formResponse';
  
    const formBody = new FormData();
    formBody.append('entry.434918507', formData.name);
    formBody.append('entry.529917742', formData.phone);
    formBody.append('entry.1500510906', formData.email);
    formBody.append('entry.891893625', formData.message);
  
    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody
    })
      .then(() => {
        setStatus('Response sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
  
        // Disappear message after 3 seconds
        setTimeout(() => {
          setStatus('');
        }, 3000);
      })
      .catch(() => setStatus('Failed to send response. Please try again.'));
  };

  return (
    <footer className="about-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={BgRemovelogo} alt="JSONS Transformers & Conductors Logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links">
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
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="send-btn">Send</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>

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

export default About