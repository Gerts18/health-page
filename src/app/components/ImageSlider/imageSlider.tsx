import React, { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const ImageSlider = () => {
  const slides = [
    {
      url: './assets/slider-main.png',
    },
    {
      url: 'https://via.placeholder.com/600/771796',
    },
    {
      url: 'https://via.placeholder.com/600/24f355',
    },
    {
      url: 'https://via.placeholder.com/600/d32776',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentIndex === slides.length - 1;
    const index = resetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[950px] m-auto py-1 pb-4 relative group">
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {/* Contenedor del texto y botón */}
        <div className="absolute top-1/3 right-56 transform -translate-y-1/2 text-[#6A6A6A] max-w-md">
          <h1 className="text-8xl font-bold mb-4">Conoce nuestro laboratorio</h1>
          <p className="text-2xl mb-6">
            En FICMAC contamos con equipos de última generación y estamos a la
            vanguardia con las nuevas tecnologías de diagnóstico especializado
            en cáncer.
          </p>
          <button className="w-44 shadow-md bg-white text-[#EB356E] hover:text-white border-1 border-[#F58CA2] hover:border-white py-3 px-6 rounded-full hover:bg-[#e56991] transition duration-200">
            Saber más
          </button>
        </div>

        {/* Flecha izquierda */}
        <div className="hidden group-hover:block absolute top-1/2 left-20 transform -translate-y-1/2 bg-[#EB356E] hover:bg-[#e77297] opacity-80 hover:opacity-100 transition duration-200 ease-in-out p-2 rounded-full cursor-pointer">
          <VscChevronLeft onClick={prevSlide} className="h-11 w-11 text-white" />
        </div>

        {/* Flecha derecha */}
        <div className="hidden group-hover:block absolute top-1/2 right-20 transform -translate-y-1/2 bg-[#EB356E] hover:bg-[#e77297] opacity-80 hover:opacity-100 transition duration-200 ease-in-out p-2 rounded-full cursor-pointer">
          <VscChevronRight onClick={nextSlide} className="h-11 w-11 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
