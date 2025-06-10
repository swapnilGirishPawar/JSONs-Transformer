import React, { useState, useEffect } from 'react';
import './MainPage.css';
// Import images from assets
import image1 from '../../assets/image_1_1.jpeg';
import image2 from '../../assets/image_4_4.jpeg';
import image3 from '../../assets/image_1_1.jpeg';
import image4 from '../../assets/image_4_4.jpeg';

const MainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of imported images
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page-container">
      <div className="text-content" id="about-us">
        <h1>Advanced Power Solutions by JSONS</h1>
        <h3>Engineers • Manufacturers • Solution Providers</h3>
        <p>
        Established in 2024, JSONS is a rapidly growing name in the power sector, specializing in transformers and conductors. While we're new to the scene, our foundation is built on a commitment to innovation and delivering reliable, high-performance electrical components. At JSONS, we're dedicated to providing cutting-edge transformer and conductor solutions designed to meet the evolving demands of various industries. We're focused on building a reputation for quality, efficiency, and customer satisfaction as we embark on our journey to power progress.
        </p>
      </div>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage; 