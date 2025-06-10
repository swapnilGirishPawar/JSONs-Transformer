import React, { useEffect, useState, useCallback } from 'react';
import './Career.css';

// Google Forms entry IDs
const FORM_ENTRY_IDS = {
  name: 'entry.434918507',
  phone: 'entry.529917742',
  email: 'entry.1500510906',
  resume: 'entry.891893625'
};

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfw5GD3LFyUje4F17DyqmAU64nrDqUATXllGLabwcqnTJ28Xw/formResponse';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      if (files[0] && files[0].size > 5 * 1024 * 1024) {
        setStatus('File size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('Name and Phone Number are mandatory');
      return;
    }

    setStatus('Sending...');

    const formBody = new FormData();
    formBody.append(FORM_ENTRY_IDS.name, formData.name);
    formBody.append(FORM_ENTRY_IDS.phone, formData.phone);
    formBody.append(FORM_ENTRY_IDS.email, formData.email);
    if (formData.resume) {
      formBody.append(FORM_ENTRY_IDS.resume, formData.resume);
    }

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      });

      setStatus('Application submitted successfully!');
      setFormData({ name: '', phone: '', email: '', resume: null });

      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to submit application. Please try again.');
    }
  }, [formData]);

  return (
    <div className="career-container">
      <h1 className="career-title">Join Us</h1>
      <div className="career-content">
        <div className="hiring-section">
          <h2>We're Hiring!</h2>
          <p>
            At JSONS Transformers & Conductors, we are actively seeking talented individuals to join our growing team. 
            We are currently hiring for various positions including Electrical Engineers, Junior Engineers, Trainee Engineers, 
            and Interns. Our company offers an exciting opportunity to work on cutting-edge projects in the power sector 
            and grow your career in a dynamic environment.
          </p>
          <p>
            If you are passionate about electrical engineering and looking for a challenging role, we would love to hear from you. 
            Please fill out the application form below, and our recruitment team will review your application and reach out to 
            qualified candidates.
          </p>
        </div>

        <div className="application-form">
          <h2>Application Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume (PDF, max 5MB)</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                accept=".pdf"
              />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Career; 