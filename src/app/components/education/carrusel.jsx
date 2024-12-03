import React, { useState } from "react";
import "./index.css";

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sostener una Señal proliferativa",
      items: ["Ciclo celular", "Factores de crecimiento", "Factores de crecimiento"],
      color: "#28C76F",
      icon: "⚙️",
    },
    {
      id: 2,
      title: "Invasión y metástasis",
      items: ["Migración celular", "Invasión tisular", "Metástasis"],
      color: "#7367F0",
      icon: "🧬",
    },
    {
      id: 3,
      title: "Resistencia a la muerte celular",
      items: ["Evitar apoptosis", "Resistencia a fármacos"],
      color: "#D65DB1",
      icon: "🔒",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrusel">
      <h1>Comprendiendo la complejidad del cáncer</h1>
      <div className="carrusel-slider">
        <div
          className="carrusel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className={`slide ${
                index === currentIndex
                  ? "active"
                  : index < currentIndex
                  ? "previous"
                  : "next"
              }`}
              key={slide.id}
            >
              <div
                className="slide-header"
                style={{ backgroundColor: slide.color }}
              >
                <span className="icon">{slide.icon}</span>
                <span className="header-title">{slide.title}</span>
              </div>
              <div className="slide-content">
                <ul>
                  {slide.items.map((item, i) => (
                    <li key={i}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&#8592;</button>
        <button onClick={handleNext}>&#8594;</button>
      </div>
      <div className="progress-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
