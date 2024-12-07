
import React from 'react';

const Specialties = () => {
  const specialties = [
    {
      icon: "/assets/img/about/count_icon1.png",
      title: "Oncología Clínica y Traslacional",
      description:
        "El conocimiento sobre la biología del cáncer en relación con su origen y evolución ha aumentado considerablemente en los últimos años.",
      link: "https://ficmac.org/wp-content/uploads/2022/08/ONCOLOGIA-CLINICA-Y-TRASLACIONAL.pdf",
    },
    {
      icon: "/assets/img/about/count_icon2.png",
      title: "Marcadores Moleculares en Cáncer",
      description:
        "El cáncer es una enfermedad que afecta distintas partes del organismo y consiste en la proliferación excesiva.",
      link: "https://ficmac.org/wp-content/uploads/2022/08/MARCADORES-MOLECULARES-EN-CANCER.pdf",
    },
    {
      icon: "/assets/img/about/count_icon3.png",
      title: "Genómica del Cáncer",
      description:
        "Con la llegada de las ciencias ómicas se ha profundizado en el conocimiento de la biología de las distintas enfermedades.",
      link: "https://ficmac.org/wp-content/uploads/2022/08/GENOMICA-DEL-CANCER.pdf",
    },
  ];

  return (
    <div className="px-8 py-8 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">Nuestras especialidades Líneas de investigación</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {specialties.map((specialty, index) => (
          <div className="bg-white border border-gray-100 rounded-lg shadow-lg w-72 p-6 text-left transition-transform transform hover:translate-y-1 hover:shadow-xl" key={index}>
            <div className="bg-[#F58DAD] p-4 rounded-t-lg flex justify-center items-center mb-4">
              <img src={specialty.icon} alt={specialty.title} className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{specialty.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{specialty.description}</p>
            <a href={specialty.link} className="text-blue-500 text-sm font-semibold hover:underline">
              Ver más.
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
