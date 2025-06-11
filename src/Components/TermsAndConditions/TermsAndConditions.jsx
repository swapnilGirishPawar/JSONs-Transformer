import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to JSONs Transformers & Conductors. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
        </section>

        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>All content, including but not limited to text, graphics, logos, images, and software, is the property of JSONs Transformers & Conductors and is protected by international copyright laws.</p>
        </section>

        <section>
          <h2>3. User Obligations</h2>
          <p>Users agree to use our services only for lawful purposes and in accordance with these terms. Users must not:</p>
          <ul>
            <li>Use our services in any way that violates any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any portion of our services</li>
            <li>Interfere with the proper working of our services</li>
          </ul>
        </section>

        <section>
          <h2>4. Privacy Policy</h2>
          <p>Your use of our services is also governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>JSONs Transformers & Conductors shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date at the top of this page.</p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <p>Email: info@jsons.com</p>
          <p>Phone: [Your Contact Number]</p>
        </section>

        <section>
          <h2>8. Shipping, Returns & Warranty</h2>
          <h3>Shipping Policy</h3>
          <p>We strive to process and ship all orders within 2-3 business days. Shipping times may vary depending on your location and the selected shipping method. International shipping may take 7-14 business days.</p>
          
          <h3>Returns Policy</h3>
          <p>We accept returns within 30 days of delivery. Products must be in their original condition with all packaging and documentation. To initiate a return, please contact our customer service team.</p>
          
          <h3>Warranty Coverage</h3>
          <p>Our products come with a standard 12-month warranty from the date of purchase. The warranty covers manufacturing defects and workmanship issues. Normal wear and tear, misuse, or unauthorized modifications are not covered under warranty.</p>
        </section>

        <section>
          <h2>9. Trademark and Copyright Guidelines</h2>
          <p>All trademarks, service marks, trade names, and logos displayed on our website are the property of JSONs Transformers & Conductors or their respective owners. These marks are protected by applicable trademark laws.</p>
          
          <h3>Usage Guidelines</h3>
          <ul>
            <li>Our trademarks may not be used without prior written permission</li>
            <li>Any use of our trademarks must be in accordance with our brand guidelines</li>
            <li>Unauthorized use of our trademarks may result in legal action</li>
          </ul>
          
          <h3>Copyright Protection</h3>
          <p>All content on our website, including text, graphics, logos, images, and software, is protected by copyright laws. Reproduction, distribution, or modification of any content without permission is strictly prohibited.</p>
        </section>

        <section>
          <h2>10. Business Partner Code of Conduct</h2>
          <p>As a business partner of JSONs Transformers & Conductors, you are expected to adhere to the following principles:</p>
          
          <h3>Ethical Business Practices</h3>
          <ul>
            <li>Maintain high standards of business ethics and integrity</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect human rights and labor standards</li>
            <li>Maintain fair and transparent business relationships</li>
          </ul>
          
          <h3>Environmental Responsibility</h3>
          <p>Business partners are expected to:</p>
          <ul>
            <li>Implement environmentally sustainable practices</li>
            <li>Comply with environmental regulations</li>
            <li>Strive to reduce environmental impact</li>
          </ul>
          
          <h3>Quality Standards</h3>
          <p>Partners must maintain high quality standards in their products and services, ensuring they meet or exceed industry standards and customer expectations.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions; 