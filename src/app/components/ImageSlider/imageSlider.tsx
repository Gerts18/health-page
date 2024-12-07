import Link from "next/link";
import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ImageSlider = () => {
  const slides = [
    {
      url: "./assets/slider-main.png",
      title: "Conoce nuestro laboratorio",
      description:
        "En FICMAC contamos con equipos de última generación y estamos a la vanguardia con las nuevas tecnologías de diagnóstico especializado en cáncer.",
      buttonText: "Saber más",
      link: "/Servicios",
      titleStyle: "text-5xl font-bold text-[#5A5A5A]  px-6",
      descriptionStyle: "text-lg text-[#5A5A5A]  px-6 mt-4",
      buttonStyle:
        "bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-2 border-[#F58CA2] hover:border-white px-6 py-2 rounded-full transition",
    },
    {
      url: "assets/cancer4.png",
      title: "¡Detecta PD-L1 por IHQ!",
      description:
        "IMAGINE analiza múltiples tipos de variantes y biomarcadores que abarcan 523 genes ligados al cáncer en el ADN y 55 genes en el ARN, junto con MSI y TMB.",
      buttonText: "Saber más",
      link: "/Servicios",
      titleStyle: "text-5xl font-bold text-[#5A5A5A]  px-6",
      descriptionStyle: "text-lg text-[#5A5A5A] md:w-1/2 px-6 mt-4",
      buttonStyle:
        "bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-2 border-[#F58CA2] hover:border-white px-6 py-2 rounded-full transition",
    },
    {
      url: "assets/cancer2.png",
      title: "Pruebas con propósito",
      description:
        "Desarrollamos ciencia, para dar esperanza a nuestros pacientes.",
      buttonText: "Enteráte de nuestros artículos",
      link: "/News",
      titleStyle: "text-5xl font-bold text-[#5A5A5A]  px-6",
      descriptionStyle: "text-lg text-[#5A5A5A] md:w-1/2 px-6 mt-4",
      buttonStyle:
        "bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-2 border-[#F58CA2] hover:border-white px-6 py-2 rounded-full transition",
    },
    {
      url: "assets/cancer3.png",
      title: "Sigamos sumando años de vida en la lucha contra el cáncer...",
      description:
        "Brindarle calidad de vida a los pacientes es posible gracias al proceso de transformación en la precisión del tratamiento del cáncer.",
      buttonText: "Apóyalos con una donación",
      link: "/donations",
      titleStyle: "text-5xl font-bold text-[#5A5A5A]  w-3/5  px-6",
      descriptionStyle: "text-lg text-[#5A5A5A] w-1/2 px-6 mt-4",
      buttonStyle:
        "bg-white hover:bg-[#EB356E] text-[#EB356E] hover:text-white border-2 border-[#F58CA2] hover:border-white px-6 py-2 rounded-full transition",
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
    <div className="w-full h-[950px] relative group bg-gray-100 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {/* Contenedor del texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <div className="bg-white/75 flex flex-col items-center text-center rounded-3xl w-2/3 p-10">
            {/* Título */}
            <h1 className={slides[currentIndex].titleStyle}>
              {slides[currentIndex].title}
            </h1>

            {/* Descripción */}
            <p className={slides[currentIndex].descriptionStyle}>
              {slides[currentIndex].description}
            </p>

            {/* Botón */}
            <div className="mt-6 font-semibold">
              <Link href={slides[currentIndex].link}>
                <button className={slides[currentIndex].buttonStyle}>
                  {slides[currentIndex].buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha izquierda */}
      <div
        className="hidden group-hover:flex absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#EB356E] hover:bg-[#e77297] opacity-80 hover:opacity-100 transition duration-200 ease-in-out p-3 rounded-full cursor-pointer"
        onClick={prevSlide}
      >
        <VscChevronLeft className="h-6 w-6 text-white" />
      </div>

      {/* Flecha derecha */}
      <div
        className="hidden group-hover:flex absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#EB356E] hover:bg-[#e77297] opacity-80 hover:opacity-100 transition duration-200 ease-in-out p-3 rounded-full cursor-pointer"
        onClick={nextSlide}
      >
        <VscChevronRight className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default ImageSlider;
