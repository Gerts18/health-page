'use client'
import React, { useState } from "react";

//Datos a mostrar en el carrusel
const Carousel = () => {
  const slides = [
    {
      title: "Historia ONCOLGROUP",
      description:
        "El grupo se creó en el año 2012 dada la necesidad de promover y fortalecer la investigación básica, clínica y traslacional del cáncer en Colombia teniendo en cuenta la incipiente productividad científica mundial en publicaciones relacionadas con la oncología menor al 1%.",
      image: "/assets/img/about/carrousel.png", // Ruta de la imagen
    },
    {
      title: "Misión del grupo",
      description:
        "Fomentar la investigación en la biología del cáncer para generar avances significativos en el diagnóstico y tratamiento de esta enfermedad.",
      image: "/assets/img/about/carrousel2.png", // Ruta de la imagen
    },
    {
      title: "Nuestra visión",
      description:
        "Convertirnos en un referente internacional en la investigación traslacional del cáncer, mejorando la calidad de vida de los pacientes.",
      image: "/assets/img/about/carrousel3.png", // Ruta de la imagen
    },
  ];

  //Función de desplazamiento del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  //Seccion del carrusel
  return (
    <div className="relative w-full h-screen overflow-hidden mt-32">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
      {/* Texto frontal */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">{slides[currentSlide].title}</h2>
        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">{slides[currentSlide].description}</p>
      </div>
      {/* flechas de carrusel */}
      <button  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-white hover:text-pink-500 transition z-10" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-white hover:text-pink-500 transition z-10" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
