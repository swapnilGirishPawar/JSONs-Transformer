import React, { useState, useEffect } from 'react';
import './MainPage.css';
// Import images from assets
import image1 from '../../assets/windmills.jpeg';
import image2 from '../../assets/transformer.jpeg';
import image3 from '../../assets/solar.jpeg';

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of imported images
  const images = [
    image1,
    image2,
    image3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Increased interval to 3 seconds for better viewing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page-container">
      <div className="text-content" id="about-us">
        <h1>Advanced Power Solutions by JSONS</h1>
        <h3>Engineers • Manufacturers • Solution Providers</h3>
        <p>
          Established in 2006, JSONS is a rapidly growing name in the power sector, specializing in transformers and conductors. While we're new to the scene, our foundation is built on a commitment to innovation and delivering reliable, high-performance electrical components. At JSONS, we're dedicated to providing cutting-edge transformer and conductor solutions designed to meet the evolving demands of various industries. We're focused on building a reputation for quality, efficiency, and customer satisfaction as we embark on our journey to power progress.
        </p>
      </div>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage; 