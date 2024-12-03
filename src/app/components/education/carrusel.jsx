import React, { useState } from "react";
import "./index.css";

const Carrusel = () => {
  const slides = [
    { id: 1, title: "Sostener una Señal proliferativa", content: ["Ciclo celular", "Factores de crecimiento", "Factores de crecimiento"], bgColor: "#2ecc71" },
    { id: 2, title: "Inactivar supresores de tumores", content: ["Proteínas clave", "Vías reguladoras"], bgColor: "#3498db" },
    { id: 3, title: "Habilitar inmortalidad replicativa", content: ["Telomerasa", "Ciclo de vida celular"], bgColor: "#9b59b6" },
    { id: 4, title: "Sostener angiogénesis", content: ["Factores angiogénicos", "Vascularización"], bgColor: "#e67e22" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carrusel-container">
      <h1 className="carrusel-title">Comprendiendo la complejidad del cáncer</h1>
      <div className="carrusel-slider">
        {slides.map((slide, index) => {
          const position =
            index === currentIndex
              ? "active"
              : index === (currentIndex - 1 + slides.length) % slides.length
              ? "previous"
              : index === (currentIndex + 1) % slides.length
              ? "next"
              : "hidden";

          return (
            <div
              key={slide.id}
              className={`slide ${position}`}
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="slide-header">
                <h2>{index + 1}</h2>
                <h3>{slide.title}</h3>
              </div>
              <ul>
                {slide.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>&larr;</button>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
      <div className="progress-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
