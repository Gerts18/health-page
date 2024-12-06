import React, { useState } from "react";

const Carrusel = () => {
  const slides = [
    { id: 1, title: "Sostener una Señal proliferativa", content: ["Ciclo celular", "Factores de crecimiento", "Factores de crecimiento"], bgColor: "bg-green-500", txtColor: "text-green-500" },
    { id: 2, title: "Inactivar supresores de tumores", content: ["Proteínas clave", "Vías reguladoras"], bgColor: "bg-blue-500", txtColor: "text-blue-500" },
    { id: 3, title: "Habilitar inmortalidad replicativa", content: ["Telomerasa", "Ciclo de vida celular"], bgColor: "bg-purple-500", txtColor: "text-purple-500" },
    { id: 4, title: "Sostener angiogénesis", content: ["Factores angiogénicos", "Vascularización"], bgColor: "bg-orange-500", txtColor: "text-orange-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-6xl font-bold text-center mt-12 pt-12 text-blue-600 underline">Comprendiendo la complejidad del cáncer</h1>
      <div className="relative w-full h-80 flex justify-center items-center overflow-hidden">
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
              className={`absolute w-3/4 max-w-md h-64 rounded-2xl shadow-lg p-0 transition-transform duration-500 ${slide.bgColor} ${position}`}
            >
              {/* Encabezado */}
              <div className=" rounded-t-1xl px-5 py-3 flex items-center gap-2">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <span className={`${slide.txtColor} font-bold text-4xl`}>{index + 1}</span>
                </div>
                <h3 className="text-white text-2xl font-bold">
                  {slide.title}
                </h3>
              </div>

              {/* Contenido de la lista */}
              <ul className="bg-white rounded-b-2xl h-[calc(97%-56px)] flex flex-col justify-center">
                {slide.content.map((item, i) => (
                  <li
                    key={i}
                    className="text-blue-600 text-2xl font-medium underline text-center"
                  >
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
