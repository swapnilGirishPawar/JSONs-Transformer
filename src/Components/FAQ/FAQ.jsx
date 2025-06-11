import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does JSONS Transformers & Conductors offer?",
      answer: "JSONS Transformers & Conductors specializes in manufacturing and supplying high-quality transformers and conductors. Our services include custom transformer design, manufacturing, testing, installation, and maintenance services for various industrial applications."
    },
    {
      question: "What are the different types of transformers you manufacture?",
      answer: "We manufacture a wide range of transformers including power transformers, distribution transformers, dry-type transformers, oil-immersed transformers, and special-purpose transformers for specific industrial applications."
    },
    {
      question: "What is your quality assurance process?",
      answer: "Our quality assurance process includes rigorous testing at multiple stages, compliance with international standards (IEC, IEEE, IS), comprehensive documentation, and third-party certification. Each transformer undergoes electrical, mechanical, and thermal testing before delivery."
    },
    {
      question: "Do you provide after-sales support?",
      answer: "Yes, we provide comprehensive after-sales support including installation assistance, maintenance services, technical support, and spare parts availability. Our service team is available 24/7 for emergency support."
    },
    {
      question: "What is your delivery timeline?",
      answer: "Delivery timelines vary based on the type and size of the transformer. Standard transformers typically have a delivery time of 4-6 weeks, while custom-designed transformers may take 8-12 weeks. We provide specific timelines during the quotation process."
    },
    {
      question: "Do you offer custom transformer solutions?",
      answer: "Yes, we specialize in custom transformer solutions. Our engineering team works closely with clients to understand their specific requirements and design transformers that meet their exact needs, including special voltage ratings, environmental conditions, or space constraints."
    },
    {
      question: "What maintenance is required for transformers?",
      answer: "Regular maintenance includes oil testing, insulation testing, visual inspections, and thermal imaging. We recommend annual maintenance checks for optimal performance and longevity. Our team can provide detailed maintenance schedules and services."
    },
    {
      question: "What safety standards do your products comply with?",
      answer: "Our products comply with international safety standards including IEC, IEEE, and IS standards. We also adhere to local safety regulations and can provide detailed compliance documentation for each product."
    },
    {
      question: "What warranty do you provide for your transformers?",
      answer: "We provide a standard warranty of 2 years from the date of commissioning for all our transformers. Extended warranty options are available for specific applications. Our warranty covers manufacturing defects and includes free replacement of defective parts and labor costs."
    },
    {
      question: "How do you handle emergency situations or breakdowns?",
      answer: "We have a dedicated emergency response team available 24/7. In case of breakdowns, we provide immediate technical support over the phone and can dispatch our service team within 24 hours. We also maintain a stock of critical spare parts for quick replacement."
    },
    {
      question: "What is your payment and financing policy?",
      answer: "We offer flexible payment terms including advance payment, letter of credit, and bank guarantee options. For large projects, we can arrange financing through our banking partners. We also provide detailed payment schedules and documentation for all transactions."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 