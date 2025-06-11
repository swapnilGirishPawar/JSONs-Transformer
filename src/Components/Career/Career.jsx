import React, { useEffect, useState, useCallback } from 'react';
import './Career.css';

// Google Forms entry IDs
const FORM_ENTRY_IDS = {
  name: 'entry.1269536868',
  phone: 'entry.197077678',
  email: 'entry.1103696964',
  resumeLink: 'entry.891893625' // This will store the Drive link
};

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCnzY-gMocqwvidmvJ0C2MKC9Rx1toVfq51tQEXiyEE20ASQ/formResponse';
const DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID'; // Replace with your Google Drive folder ID

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
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
    }
    return error;
  };

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      if (files[0]) {
        if (files[0].size > 5 * 1024 * 1024) {
          setStatus('File size should not exceed 5MB');
          return;
        }
        if (files[0].type !== 'application/pdf') {
          setStatus('Please upload a PDF file');
          return;
        }
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
      }
    } else {
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
    }
  }, []);

  const uploadToDrive = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folderId', DRIVE_FOLDER_ID);

      const response = await fetch('/api/upload-to-drive', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.fileUrl;
    } catch (error) {
      console.error('Drive upload error:', error);
      throw error;
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    const emailError = validateField('email', formData.email);
    
    setErrors({
      name: nameError,
      phone: phoneError,
      email: emailError
    });

    if (nameError || phoneError || emailError) {
      return;
    }

    setStatus('Sending...');
    setUploading(true);

    try {
      let resumeLink = '';
      if (formData.resume) {
        resumeLink = await uploadToDrive(formData.resume);
      }

      const formBody = new FormData();
      formBody.append(FORM_ENTRY_IDS.name, formData.name);
      formBody.append(FORM_ENTRY_IDS.phone, formData.phone);
      formBody.append(FORM_ENTRY_IDS.email, formData.email);
      if (resumeLink) {
        formBody.append(FORM_ENTRY_IDS.resumeLink, resumeLink);
      }

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      });

      setStatus('Application submitted successfully!');
      setFormData({ name: '', phone: '', email: '', resume: null });

      setTimeout(() => {
        setStatus('');
        setFormData({ name: '', phone: '', email: '', resume: null });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to submit application. Please try again.');
      setTimeout(() => {
        setStatus('');
        setFormData({ name: '', phone: '', email: '', resume: null });
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
              <label htmlFor="resume">Resume (PDF, max 5MB)</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                accept=".pdf"
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Submit Application'}
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