import React from 'react';
import './Products.css';
import transformerImg from '../../assets/image_1_1.jpeg';
import testingImg from '../../assets/image_2_2.jpeg';
import serviceImg from '../../assets/image_2_5.jpeg';
import projectsImg from '../../assets/image_4_4.jpeg';
import qualityImg from '../../assets/iso.png';

const productData = [
  {
    title: "Power & Distribution Transformers",
    image: transformerImg,
    description:
      "Re-manufacturing and repairing of Power Transformers up to 160 MVA, 220 kV class. Includes Distribution, Furnace, Rectifier, and Railway Transformers with advanced features like impedance tuning, loss reduction, and site-fit design.",
  },
  {
    title: "Testing Facilities",
    image: testingImg,
    description:
      "Our advanced facilities include Impulse Generators, SFRA, Partial Discharge Testing, Oil Analysis, Noise Level Measurement, and other precision instruments for transformer diagnostics.",
  },
  {
    title: "Repairing & Servicing",
    image: serviceImg,
    description:
      "On-site and offline transformer servicing, testing, oil filtration, component replacements, and detailed condition monitoring like Tan Delta, Turns Ratio, and Insulation Resistance.",
  },
  {
    title: "Projects & EPC Solutions",
    image: projectsImg,
    description:
      "Turnkey execution of Wind, Solar and Substation projects up to 220kV. Services include design, licensing, civil and electrical infrastructure, and project commissioning.",
  },
  {
    title: "Quality Commitment",
    image: qualityImg,
    description:
      "ISO 9001:2008 certified. 0% winding failure track record. In-house quality control ensures every transformer meets or exceeds specifications.",
  },
];

function Products() {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Offerings</h1>
      <div className="products-scroll-wrapper">
        {productData.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
