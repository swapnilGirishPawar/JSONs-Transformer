import React, { useEffect } from 'react';
import './Downloads.css';

const Downloads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadItems = [
    
  ];

  const handleDownload = () => {
    // Convert the sharing link to a direct download link
    const fileId = '1brfeHXu9mP4_Qsp4AVFCimTQsz0i_c7k';
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(directDownloadUrl, '_blank');
  };

  return (
    <div className="downloads-container">
      <h1 className="downloads-title">Downloads</h1>
      <div className="downloads-content">
        <div className="downloads-grid">
          {downloadItems.map((item, index) => (
            <div key={index} className="download-card">
              <div className="download-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="download-meta">
                  <span className="file-type">{item.fileType}</span>
                  <span className="file-size">{item.size}</span>
                  <span className="file-category">{item.category}</span>
                </div>
              </div>
              <button className="download-button"
              onClick={handleDownload}>
                <i className="fas fa-download"></i> Download
              </button>
            </div>
          ))}
        </div>
        <div className="download-section">
          <h2>Product Catalog</h2>
          <p>Download our latest product catalog to learn more about our offerings.</p>
          <button 
            className="download-button"
            onClick={handleDownload}
          >
            <i className="fas fa-download"></i> Download Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Downloads; 