import React, { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const ImageSlider = () => {
  const slides = [
    {
      url: './assets/slider-main.png',
      title: 'Conoce nuestro laboratorio',
      description:
        'En FICMAC contamos con equipos de última generación y estamos a la vanguardia con las nuevas tecnologías de diagnóstico especializado en cáncer.',
      buttonText: 'Saber más',
      titlePosition: { top: 'top-1/4', left: 'right-0' },
      descriptionPosition: { top: 'top-1/2', left: 'right-6' },
      titleStyle: 'text-8xl font-bold text-[#6A6A6A] w-1/2',
      descriptionStyle: 'text-2xl text-[#6A6A6A] w-1/2',
      buttonStyle:
        'bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-1 border-[#F58CA2] hover:border-white',
    },
    {
      url: 'assets/cancer4.png',
      title: '¡Detecta PD-L1 por IHQ!',
      description:
        'IMAGINE analiza múltiples tipos de variantes y biomarcadores que abarcan 523 genes ligados al cáncer en el ADN y 55 genes en el ARN, junto con MSI y TMB.',
        buttonText: 'Saber más',
        titlePosition: { top: 'top-1/4', left: 'left-40' },
        descriptionPosition: { top: 'top-1/2', left: 'left-40' },
        titleStyle: 'text-8xl font-bold text-[#6A6A6A] w-1/2',
        descriptionStyle: 'text-2xl text-[#6A6A6A] w-2/5',
        buttonStyle:
          'bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-1 border-[#F58CA2] hover:border-white',
    },
    {
      url: 'assets/cancer2.png',
      title: 'Pruebas con propósito',
      description: 'Desarrollamos ciencia, para dar esperanza a nuestros pacientes.',
      buttonText: 'Saber más',
      titlePosition: { top: 'top-1/4', left: 'left-20' },
      descriptionPosition: { top: 'top-1/2', left: 'left-20' },
      titleStyle: 'text-8xl font-bold text-[#6A6A6A] w-1/2',
      descriptionStyle: 'text-2xl text-[#6A6A6A] w-1/5 font-semibold',
      buttonStyle:
        'bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-1 border-[#F58CA2] hover:border-white',
    },
    {
      url: 'assets/cancer3.png',
      title: 'Sigamos sumando años de vida en la lucha contra el cáncer...',
      description: 'Brindarle calidad de vida a los pacientes es posible gracias al proceso de transformación en la precisión del tratamiento del cáncer',
      buttonText: 'Saber más',
      titlePosition: { top: 'top-1/3', left: 'left-20' },
      descriptionPosition: { top: 'top-1/3', left: 'right-20' },
      titleStyle: 'text-5xl font-bold text-white w-1/4',
      descriptionStyle: 'text-2xl text-white w-1/4',
      buttonStyle:
        'bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-1 border-[#F58CA2] hover:border-white',
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
    <div className="w-full h-[950px] m-auto mt-6 py-1 pb-4 relative group">
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {/* Título */}
        <h1
          className={`absolute ${slides[currentIndex].titlePosition.top} ${slides[currentIndex].titlePosition.left} 
          transform -translate-y-1/2 ${slides[currentIndex].titleStyle}`}
        >
          {slides[currentIndex].title}
        </h1>

        {/* Descripción */}
        <p
          className={`absolute ${slides[currentIndex].descriptionPosition.top} ${slides[currentIndex].descriptionPosition.left} 
          transform -translate-y-1/2 ${slides[currentIndex].descriptionStyle}`}
        >
          {slides[currentIndex].description}
        </p>

        {/* Botón */}
        <div className="absolute top-2/3 left-1/2 transform -translate-y-1/2">
          <button
            className={`w-44 shadow-md py-3 px-6 rounded-full transition duration-200 ${slides[currentIndex].buttonStyle}`}
          >
            {slides[currentIndex].buttonText}
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
