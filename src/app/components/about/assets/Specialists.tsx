import Image from "next/image";
import React from "react";

//Lista de especialistas
const specialists = [
  {
    name: "Dr. Christopher Roberts",
    specialty: "Orthopedic Surgeon",
    image: "/assets/img/about/docCinco.png",
  },
  {
    name: "Dr. Maya Patel",
    specialty: "Dermatologist",
    image: "/assets/img/about/docCuatro.png",
  },
  {
    name: "Dr. Samuel Wong",
    specialty: "Neurologist",
    image: "/assets/img/about/docUno.png",
  },
  {
    name: "Dr. Olivia Lewis",
    specialty: "Gynecologist",
    image: "/assets/img/about/docDos.png",
  },
  {
    name: "Dr. Ethan Mitchell",
    specialty: "Oncologist",
    image: "/assets/img/about/docTres.png",
  },
];

//Seccion de especialistas
const Specialists = () => {
  return (
    <div className="text-center py-8 bg-pink-100">
      {/* Titulo */}
      <h2 className="text-pink-600 text-2xl font-bold mb-6">Nuestros Especialistas</h2>
      {/* Lista de especialistas */}
      <div className="flex flex-wrap gap-6 justify-center">
        {specialists.map((specialist, index) => (
          <div className="text-center transition-transform transform hover:-translate-y-2" key={index}>
            <Image src={specialist.image} alt={specialist.name} width={200} height={200} className="w-full h-44 object-contain rounded mb-4"/>
            <h3 className="text-lg font-bold text-gray-800 mt-3">{specialist.name}</h3>
            <p className="text-blue-500 text-base mt-1">{specialist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
