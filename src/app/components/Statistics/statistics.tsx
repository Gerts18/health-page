import React from 'react';
import { FaUserMd, FaVials, FaFolderOpen, FaFileAlt, FaTrophy, FaHeartbeat } from 'react-icons/fa';

const Statistics = () => {
  const stats = [
    {
      icon: <FaUserMd className="text-blue-500 text-5xl mb-4" />,
      number: '22,000',
      label: 'Pacientes evaluados',
    },
    {
      icon: <FaVials className="text-blue-500 text-5xl mb-4" />,
      number: '92,000',
      label: 'Pruebas ejecutadas',
    },
    {
      icon: <FaFolderOpen className="text-blue-500 text-5xl mb-4" />,
      number: '9,000',
      label: 'Muestras actuales en la biblioteca',
    },
    {
      icon: <FaFileAlt className="text-blue-500 text-5xl mb-4" />,
      number: '12,000',
      label: 'Muestras actuales en seroteca',
    },
    {
      icon: <FaFileAlt className="text-blue-500 text-5xl mb-4" />,
      number: '154',
      label: 'Artículos publicados en la última década',
    },
    {
      icon: <FaTrophy className="text-blue-500 text-5xl mb-4" />,
      number: '+15',
      label: 'Grants nacionales e internacionales ejecutados',
    },
    {
      icon: <FaHeartbeat className="text-blue-500 text-5xl mb-4" />,
      number: '+98,000',
      label: 'Años de vida ganados gracias al diagnóstico de precisión',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-center text-3xl font-bold text-[#EB356E] mb-8">Cifras hablan por sí solas</h2>
      <p className="text-center text-sm text-black">queda pendiente*</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {stat.icon}
            <h3 className="text-3xl font-bold text-[#EB356E]">{stat.number}</h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
