import React, { useState, useEffect } from 'react';
import './Newsroom.css';

const newsData = [
  {
    date: "March 2024",
    category: "Industry News",
    title: "India's Transformer Market to Reach $4.5 Billion by 2025",
    content: "According to recent market research, India's transformer market is projected to reach $4.5 billion by 2025, driven by increasing power demand and renewable energy integration. The growth is particularly strong in smart transformers and digital monitoring systems.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "February 2024",
    category: "EV Infrastructure",
    title: "India's EV Charging Infrastructure Gets Major Boost",
    content: "The Indian government has announced plans to install 6,000 new EV charging stations across major highways. This initiative will require significant transformer upgrades to handle the increased power demand, creating new opportunities for transformer manufacturers.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "January 2024",
    category: "Solar Energy",
    title: "Record-Breaking Solar Power Generation in India",
    content: "India achieved a new milestone with 72 GW of solar power capacity installed. This growth has led to increased demand for specialized transformers capable of handling variable renewable energy inputs and maintaining grid stability.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "December 2023",
    category: "Wind Energy",
    title: "Offshore Wind Projects Drive Transformer Innovation",
    content: "India's first major offshore wind project in Gujarat is driving innovation in transformer technology. New designs are being developed to handle the unique challenges of offshore wind power transmission, including saltwater exposure and variable loads.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "November 2023",
    category: "Technology",
    title: "Smart Transformers Revolutionize Grid Management",
    content: "The adoption of smart transformers in India's power grid has increased by 40% in the last year. These advanced transformers feature real-time monitoring, predictive maintenance, and automated load balancing capabilities.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "October 2023",
    category: "Market Update",
    title: "Transformer Manufacturers Adapt to Green Energy Shift",
    content: "Leading transformer manufacturers are investing heavily in R&D to develop eco-friendly transformers. New designs use biodegradable insulating oils and recyclable materials, reducing environmental impact while maintaining performance.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

function Newsroom() {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="newsroom-container">
      <h1 className="newsroom-title">Newsroom</h1>
      <div className="newsroom-content">
        <div className="news-grid">
          {newsData.map((news, index) => (
            <div key={index} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <span className="news-category">{news.category}</span>
              </div>
              <div className="news-details">
                <span className="news-date">{news.date}</span>
                <h2 className="news-title">{news.title}</h2>
                <p className="news-content">{news.content}</p>
                <button 
                  className="read-more"
                  onClick={() => handleReadMore(news)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNews && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" style={{ left: '20px', right: 'auto' }} onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedNews.image} alt={selectedNews.title} />
              <span className="modal-category">{selectedNews.category}</span>
            </div>
            <div className="modal-details">
              <span className="modal-date">{selectedNews.date}</span>
              <h2 className="modal-title">{selectedNews.title}</h2>
              <p className="modal-text">{selectedNews.content}</p>
              <p className="modal-additional">
                For more information about this development and its impact on the transformer industry, 
                please contact our team. We're here to help you understand how these changes might affect 
                your business and how we can support your needs.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newsroom; 