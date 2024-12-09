import React from 'react';
import { FaUserMd, FaHeartbeat } from 'react-icons/fa';
import { RiMicroscopeFill } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";
import { FaFileMedical } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";

const Statistics = () => {
  // Arreglo de objetos que define cada estadística: ícono, número y etiqueta descriptiva
  const stats = [
    {
      icon: <FaUserMd className="text-blue-500 text-5xl" />,
      number: '22,000',
      label: 'Pacientes evaluados',
    },
    {
      icon: <RiMicroscopeFill className="text-blue-500 text-6xl" />,
      number: '92,000',
      label: 'Pruebas ejecutadas',
    },
    {
      icon: <FaFolderPlus className="text-blue-500 text-5xl" />,
      number: '9,000',
      label: 'Muestras actuales en la biblioteca',
    },
    {
      icon: <FaFileMedical className="text-blue-500 text-5xl" />,
      number: '12,000',
      label: 'Muestras actuales en seroteca',
    },
    {
      icon: <GrArticle className="text-blue-500 text-6xl" />,
      number: '154',
      label: 'Artículos publicados en la última década',
    },
    {
      icon: <IoMdTrophy className="text-blue-500 text-6xl" />,
      number: '+15',
      label: 'Grants nacionales e internacionales ejecutados',
    },
    {
      icon: <FaHeartbeat className="text-blue-500 text-5xl" />,
      number: '+98,000',
      label: 'Años de vida ganados gracias al diagnóstico de precisión',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-32">
      {/* Título principal de la sección */}
      <h2 className="text-center text-3xl font-bold text-[#EB356E] mb-8">
        Cifras hablan por sí solas
      </h2>
      
      {/* Contenedor con diseño de cuadrícula para distribuir las estadísticas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index} // Asigna una clave única a cada elemento en el arreglo
            className={`flex items-center p-6 ${
              index === stats.length - 1 ? "flex justify-center" : ""
            }`}
          >
            {/* Ícono de la estadística */}
            <div className="text-blue-500 text-5xl mr-4">{stat.icon}</div>

            {/* Contenido: número y etiqueta descriptiva */}
            <div>
              <h3 className="text-3xl font-bold text-[#EB356E]">{stat.number}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
