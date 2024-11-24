
import React from 'react';
import styles from "./Specialties.module.css"; // Archivo CSS importado

const Specialties = () => {
  const specialties = [
    {
      icon: "/assets/img/about/count_icon1.png", // Reemplaza con tu ruta de ícono
      title: "Oncología Clínica y Traslacional",
      description:
        "El conocimiento sobre la biología del cáncer en relación con su origen y evolución ha aumentado considerablemente en los últimos años.",
      link: "#",
    },
    {
      icon: "/assets/img/about/count_icon2.png", // Reemplaza con tu ruta de ícono
      title: "Marcadores Moleculares en Cáncer",
      description:
        "El cáncer es una enfermedad que afecta distintas partes del organismo y consiste en la proliferación excesiva.",
      link: "#",
    },
    {
      icon: "/assets/img/about/count_icon3.png", // Reemplaza con tu ruta de ícono
      title: "Genómica del Cáncer",
      description:
        "Con la llegada de las ciencias ómicas se ha profundizado en el conocimiento de la biología de las distintas enfermedades.",
      link: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nuestras especialidades Líneas de investigación</h2>
      <div className={styles.cardContainer}>
        {specialties.map((specialty, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconContainer}>
              <img src={specialty.icon} alt={specialty.title} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{specialty.title}</h3>
            <p className={styles.cardDescription}>{specialty.description}</p>
            <a href={specialty.link} className={styles.link}>
              Ver más.
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
