'use client'
import React, { useState } from 'react';
import './MissionVision.css';

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="mission-vision-container">
      <div className="tabs">
        <span
          className={`tab ${activeTab === 'mission' ? 'active blue-line' : ''}`}
          onClick={() => setActiveTab('mission')}
        >
          Misión
        </span>
        <span
          className={`tab ${activeTab === 'vision' ? 'active pink-line' : ''}`}
          onClick={() => setActiveTab('vision')}
        >
          Visión
        </span>
      </div>
      <div className="content">
        <div className="text-section">
          {activeTab === 'mission' && (
            <p>
              Promover, fomentar y desarrollar actividades de investigación traslacional en el campo de la biología
              tumoral, con especial interés en la genotipificación del cáncer en Colombia y en la búsqueda de nuevos
              biomarcadores predictivos de respuesta, con el fin de aumentar y mejorar la calidad de vida de los pacientes.
            </p>
          )}
          {activeTab === 'vision' && (
            <p>
              Aquí puedes incluir el texto para la visión o algún contenido relacionado. Este se mostrará cuando la pestaña
              "Visión" esté activa.
            </p>
          )}
        </div>
        <div className="image-container">
          <img
            src="/assets/img/about/missionVission.png"
            alt="Laboratorio"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
