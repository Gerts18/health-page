'use client'
import React, { useState } from 'react';

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="flex flex-col items-stretch bg-[#A0B8FFCC] p-12 px-16 font-sans w-full h-auto mx-auto">
      <div className="flex justify-start w-full mb-5 pl-[9.5%]">
      <span
          className={`text-2xl font-bold mx-2 cursor-pointer relative ${
            activeTab === 'mission' ? 'text-white opacity-100' : 'text-white opacity-60'
          }`}
          onClick={() => setActiveTab('mission')}
        >
          Misión
          {activeTab === 'mission' && (
            <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#007bff]" />
          )}
        </span>
        <span
          className={`text-2xl font-bold mx-2 cursor-pointer relative ${
            activeTab === 'vision' ? 'text-white opacity-100' : 'text-white opacity-60'
          }`}
          onClick={() => setActiveTab('vision')}
        >
          Visión
          {activeTab === 'vision' && (
            <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#ff4da6]" />
          )}
        </span>
      </div>
      <div className="flex items-center justify-center gap-1 w-full px-10">
        <div className="flex-1 text-2xl text-white text-justify leading-8">
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
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/img/about/missionVission.png"
            alt="Laboratorio"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
