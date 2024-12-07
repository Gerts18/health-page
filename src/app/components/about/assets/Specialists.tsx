import React from "react";

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

const Specialists = () => {
  return (
    <div className="text-center py-8 bg-pink-100">
      <h2 className="text-pink-600 text-2xl font-bold mb-6">Nuestros Especialistas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((specialist, index) => (
          <div className="text-center transition-transform transform hover:-translate-y-2" key={index}>
            <img
              src={specialist.image}
              alt={specialist.name}
              className="w-full max-w-xs mx-auto rounded-xl"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-3">{specialist.name}</h3>
            <p className="text-blue-500 text-base mt-1">{specialist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
