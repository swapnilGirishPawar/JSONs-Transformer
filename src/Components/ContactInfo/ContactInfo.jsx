import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="company-info">
        <h2>JSONS Transformers & Conductors</h2>
        <p>Head Office: Plot No N-39, Additional MIDC, Satara-415004</p>
        <p>sales@jsonstransformers.com | md@jsonstransformers.com</p>
      </div>
      
      <div className="red-line"></div>
      
      <div className="branch-offices">
        <p>Branch Offices: Pune: Sr No. 402, Shyamvihar, Gokulnagar, Katraj kondhwa Road, Katraj Pune: 411046</p>
        <p>Mumbai: Plot No: B-8, Best Staff quarter, Deonor, Govandi Station Road Mumbai- 400088</p>
      </div>
      
      <div className="grey-line"></div>
      
      <div className="contact-numbers">
        <p>Mob No: 9527783759 | Ph No: 02162-240605</p>
      </div>
    </div>
  );
};

export default ContactInfo; 