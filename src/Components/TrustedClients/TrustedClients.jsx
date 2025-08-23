import React from 'react';
import './TrustedClients.css';

// Importing 13 images from assets (adjust path if needed)
import clientx from '../../assets/mahatlogo.png';
import client1 from '../../assets/mahavi.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/tatap.png';
import client4 from '../../assets/client1.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/renew.png';
import client7 from '../../assets/rel.png';
import client8 from '../../assets/set.png';

const TrustedClients = () => {
  const clients = [
    clientx, client1, client2, client3, client4, client5, client6, client7, client8
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
