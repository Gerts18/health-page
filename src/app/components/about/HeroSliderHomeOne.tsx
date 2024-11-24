'use client'
import React, { useState } from "react";
import styles from "./Carousel.module.css"; // Archivo CSS importado

const Carousel = () => {
  const slides = [
    {
      title: "Historia ONCOLGROUP",
      description:
        "El grupo se creó en el año 2012 dada la necesidad de promover y fortalecer la investigación básica, clínica y traslacional del cáncer en Colombia teniendo en cuenta la incipiente productividad científica mundial en publicaciones relacionadas con la oncología menor al 1%.",
      buttonLabel: "Saber más",
      image: "/assets/img/about/carrousel.png", // Ruta de la imagen
    },
    {
      title: "Misión del grupo",
      description:
        "Fomentar la investigación en la biología del cáncer para generar avances significativos en el diagnóstico y tratamiento de esta enfermedad.",
      buttonLabel: "Descubre más",
      image: "/assets/images/cancer-research-slide2.jpg", // Ruta de la imagen
    },
    {
      title: "Nuestra visión",
      description:
        "Convertirnos en un referente internacional en la investigación traslacional del cáncer, mejorando la calidad de vida de los pacientes.",
      buttonLabel: "Conócenos",
      image: "/assets/images/cancer-research-slide3.jpg", // Ruta de la imagen
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{slides[currentSlide].title}</h2>
        <p className={styles.description}>{slides[currentSlide].description}</p>
        <button className={styles.button}>
          {slides[currentSlide].buttonLabel}
        </button>
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>
        &#10094;
      </button>
      <button className={styles.nextButton} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
