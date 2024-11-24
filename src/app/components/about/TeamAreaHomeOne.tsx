import React from "react";
import "./Specialists.css";

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
    <div className="specialists-container">
      <h2 className="specialists-title">Nuestros Especialistas</h2>
      <div className="specialists-grid">
        {specialists.map((specialist, index) => (
          <div className="specialist-card" key={index}>
            <img
              src={specialist.image}
              alt={specialist.name}
              className="specialist-image"
            />
            <h3 className="specialist-name">{specialist.name}</h3>
            <p className="specialist-specialty">{specialist.specialty}</p>
          </div>
        ))}
      </div>
      <button className="load-more-button">Cargar más</button>
    </div>
  );
};

export default Specialists;
