import React, { useEffect } from 'react';
import './AboutUs.css';
import founderImage from '../../assets/founder.png';
import ceoImage from '../../assets/ceo.png';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">Who Are We</h1>
      <div className="aboutus-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            JSONS Transformers & Conductors is a leading manufacturer and supplier of high-quality electrical equipment, 
            specializing in power transformers, distribution transformers, and electrical conductors. With years of 
            experience in the power sector, we have established ourselves as a trusted name in the industry, serving 
            both domestic and international markets.
          </p>
        </section>

        <section className="about-section leadership-section">
          <h2>Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leadership-item">
              <div className="leadership-image">
                <img src={founderImage} alt="Company Founder" />
              </div>
              <h3>Akshay Yewale</h3>
              <p className="designation">Founder and CEO</p>
              <p className="leadership-description">
                With 15+ years of experience in the power sector, Akshay founded JSONS with a vision to revolutionize 
                the electrical equipment industry. His expertise in transformer technology and market understanding 
                has been key to establishing JSONS as a trusted name in both domestic and international markets.
              </p>
            </div>
            <div className="leadership-item">
              <div className="leadership-image">
                <img src={ceoImage} alt="Company CTO" />
              </div>
              <h3>Sharvari Yewale</h3>
              <p className="designation">CTO</p>
              <p className="leadership-description">
                With 4 years of experience in electrical technology and having worked with leading MNCs, Sharvari 
                brings technical expertise and innovation to JSONS. As CTO, she leads our R&D initiatives and ensures 
                cutting-edge solutions in transformer technology and power systems.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to delivering innovative and reliable electrical solutions that power progress. Our mission 
            is to provide high-quality, energy-efficient products that meet the evolving needs of the power sector while 
            maintaining the highest standards of safety and environmental responsibility.
          </p>
        </section>

        <section className="about-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality Excellence</h3>
              <p>We maintain the highest standards in manufacturing and quality control, ensuring that every product meets international standards and customer expectations.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We continuously invest in research and development to bring cutting-edge solutions to the power sector.</p>
            </div>
            <div className="value-item">
              <h3>Customer Focus</h3>
              <p>We prioritize customer satisfaction through responsive service, technical support, and customized solutions.</p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible manufacturing practices and energy-efficient products.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>Power Transformers</h3>
              <p>Manufacturing high-capacity power transformers for utility and industrial applications, ensuring reliable power transmission and distribution.</p>
            </div>
            <div className="expertise-item">
              <h3>Distribution Transformers</h3>
              <p>Producing efficient distribution transformers that meet various voltage requirements for commercial and residential applications.</p>
            </div>
            <div className="expertise-item">
              <h3>Electrical Conductors</h3>
              <p>Supplying high-quality conductors for power transmission and distribution networks, meeting international standards.</p>
            </div>
            <div className="expertise-item">
              <h3>Custom Solutions</h3>
              <p>Developing tailored electrical solutions to meet specific customer requirements and project specifications.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes and adherence to international standards ensure reliable products.</p>
            </div>
            <div className="feature-item">
              <h3>Technical Expertise</h3>
              <p>Highly skilled team of engineers and technicians with extensive industry experience.</p>
            </div>
            <div className="feature-item">
              <h3>Customer Support</h3>
              <p>Comprehensive after-sales service and technical support for all our products.</p>
            </div>
            <div className="feature-item">
              <h3>Global Reach</h3>
              <p>Established presence in both domestic and international markets with a strong distribution network.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            At JSONS Transformers & Conductors, we are dedicated to powering the future through innovation, 
            quality, and sustainability. Our commitment to excellence drives us to continuously improve our 
            products and services, ensuring that we remain at the forefront of the electrical equipment industry. 
            We take pride in our role in powering communities and industries, and we look forward to continuing 
            to serve our customers with the highest standards of quality and reliability.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs; 