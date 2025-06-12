import React, { useEffect, useState, useCallback } from 'react';
import './Career.css';

// Google Forms entry IDs
const FORM_ENTRY_IDS = {
  name: 'entry.1161425511',
  phone: 'entry.1113588831',
  email: 'entry.1355188696',
  resumeLink: 'entry.1463323763'
};

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSef84GWCthpezfzUC3qnTyIvOE0TcEq8myP5-xNv2jM6ofVGQ/formResponse';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resumeLink: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    resumeLink: ''
  });

  const [status, setStatus] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Name is required';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (!/^\d{10}$/.test(value.trim())) {
        error = 'Please enter a valid 10-digit phone number';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        error = 'Please enter a valid email address';
      }
    } else if (name === 'resumeLink') {
      if (!value.trim()) {
        error = 'Resume link is required';
      } else if (!/^https?:\/\/.+/.test(value.trim())) {
        error = 'Please enter a valid URL';
      }
    }
    return error;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    const emailError = validateField('email', formData.email);
    const resumeLinkError = validateField('resumeLink', formData.resumeLink);
    
    setErrors({
      name: nameError,
      phone: phoneError,
      email: emailError,
      resumeLink: resumeLinkError
    });

    if (nameError || phoneError || emailError || resumeLinkError) {
      return;
    }

    setStatus('Sending...');
    setUploading(true);

    try {
      const formBody = new FormData();
      formBody.append(FORM_ENTRY_IDS.name, formData.name);
      formBody.append(FORM_ENTRY_IDS.phone, formData.phone);
      formBody.append(FORM_ENTRY_IDS.email, formData.email);
      formBody.append(FORM_ENTRY_IDS.resumeLink, formData.resumeLink);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      });

      setStatus('Application submitted successfully!');
      setFormData({ name: '', phone: '', email: '', resumeLink: '' });

      setTimeout(() => {
        setStatus('');
        setFormData({ name: '', phone: '', email: '', resumeLink: '' });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to submit application. Please try again.');
      setTimeout(() => {
        setStatus('');
        setFormData({ name: '', phone: '', email: '', resumeLink: '' });
      }, 5000);
    } finally {
      setUploading(false);
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
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="error-message" style={{ color: 'red', marginTop: '2px', fontSize: '0.8em', textAlign: 'left', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="error-message" style={{ color: 'red', marginTop: '2px', fontSize: '0.8em', textAlign: 'left', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID <span style={{ color: 'red' }}>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="error-message" style={{ color: 'red', marginTop: '2px', fontSize: '0.8em', textAlign: 'left', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="resumeLink">Resume Link <span style={{ color: 'red' }}>*</span></label>
              <input
                type="url"
                id="resumeLink"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="Enter your resume link"
              />
              {errors.resumeLink && <p className="error-message" style={{ color: 'red', marginTop: '2px', fontSize: '0.8em', textAlign: 'left', position: 'absolute', bottom: '-20px', left: '0' }}>{errors.resumeLink}</p>}
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={uploading}
            >
              {uploading ? 'Sending...' : 'Submit Application'}
            </button>
          </form>
          {status && (
            <p className={`form-status ${status.includes('Failed') ? 'error' : 'success'}`}>
              {status.includes('Failed') ? '⚠️ ' : '✅ '}
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career; 