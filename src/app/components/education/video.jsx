import React from 'react';
import './index.css';

const FICMACSection = () => {
  return (
    <section className="ficmac-section">
      <div className="ficmac-video">
        <iframe
          src="https://www.youtube.com/embed/OrhhcTHXQi0" // Reemplaza "tuVideoID" con el ID del video real
          title="Video FICMAC"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ficmac-info">
        <h2>Somos FICMAC | Laboratorio Colombiano</h2>
        <p>
          ¡Descubre la medicina de precisión contra el cáncer con FICMAC! Somos pioneros en investigación en Biología Molecular. Únete a este emocionante viaje hacia la esperanza en la lucha contra el cáncer.
        </p>
      </div>
    </section>
  );
};

export default FICMACSection;
