import React, { useState } from "react";

const Carrusel = () => {
  const slides = [
    { id: 1, title: "Sostener una Señal proliferativa", content: ["Ciclo celular", "Factores de crecimiento", "Factores de crecimiento"], bgColor: "bg-green-500" },
    { id: 2, title: "Inactivar supresores de tumores", content: ["Proteínas clave", "Vías reguladoras"], bgColor: "bg-blue-500" },
    { id: 3, title: "Habilitar inmortalidad replicativa", content: ["Telomerasa", "Ciclo de vida celular"], bgColor: "bg-purple-500" },
    { id: 4, title: "Sostener angiogénesis", content: ["Factores angiogénicos", "Vascularización"], bgColor: "bg-orange-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mt-8">Comprendiendo la complejidad del cáncer</h1>
      <div className="relative w-full h-80 flex justify-center items-center mt-12 overflow-hidden">
        {slides.map((slide, index) => {
          const position =
            index === currentIndex
              ? "z-30 opacity-100 scale-100 translate-x-0"
              : index === (currentIndex - 1 + slides.length) % slides.length
              ? "z-20 opacity-80 scale-90 -translate-x-1/2"
              : index === (currentIndex + 1) % slides.length
              ? "z-20 opacity-80 scale-90 translate-x-1/2"
              : "z-10 opacity-0 translate-x-full";

          return (
            <div
              key={slide.id}
              className={`absolute w-3/4 max-w-md h-64 rounded-lg shadow-lg p-5 transition-transform duration-500 ${slide.bgColor} ${position}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-lg font-bold text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </h2>
                <h3 className="text-white text-xl">{slide.title}</h3>
              </div>
              <ul className="list-none">
                {slide.content.map((item, i) => (
                  <li key={i} className="text-gray-800 underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="bg-blue-600 text-white text-xl py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-600 text-white text-xl py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          &rarr;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
