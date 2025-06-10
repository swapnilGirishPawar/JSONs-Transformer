import React from 'react';
import './TrustedClients.css';

// Importing 13 images from assets (adjust path if needed)
import client1 from '../../assets/mahavi.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/tatap.png';
import client4 from '../../assets/client1.png';
import client5 from '../../assets/client5.png';

const TrustedClients = () => {
  const clients = [
    client1, client2, client3, client4, client5
  ];

  return (
    <section className="trusted-clients">
      <h2>Our Trusted Clients</h2>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <img key={index} src={client} alt={`Client ${index + 1}`} className="client-logo" />
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
