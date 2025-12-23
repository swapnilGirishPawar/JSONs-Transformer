import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="company-info">
        <h2>JSONS Transformers & Conductors</h2>
        <p>Head Office: Plot No N-39, Additional MIDC, Satara-415004</p>
        <p>jsonstransformers@gmail.com | md@jsonstransformers.com</p>
      </div>
      
      <div className="branch-offices">
        <p>Branch Offices: Pune: Venkatesh Viom, B-703, Paud Road, Kothrud, Pune-411038</p>
        <p>Navi Mumbai: Patel Heights, Ghansoli, Navi Mumbai-400701</p>
      </div>
      
      <div className="grey-line"></div>
      
      <div className="contact-numbers">
        <p>Mob No: 9323454648, 9527783759 | Ph No: 02162-240605</p>
      </div>
    </div>
  );
};

export default ContactInfo; 