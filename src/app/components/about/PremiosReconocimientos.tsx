import React from "react";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards-container">
      {/* Título principal */}
      <h1 className="awards-title">Premios y Reconocimientos</h1>
      {/* Subtítulo */}
      <p className="awards-subtitle">
        Obtenga todas las actualizaciones aquí.
      </p>

      {/* Contenedor de tarjetas */}
      <div className="awards-grid">
        {/* Tarjeta individual */}
        {Array(4).fill(null).map((_, index) => (
          <div className="award-card" key={index}>
            <img
              src="/assets/img/about/awardImg.png" // Imagen de ejemplo
              alt="AACR logo"
              className="award-image"
            />
            <p className="award-organization">American Association for Cancer Research</p>
            <button className="award-button">Ver video</button>
            <h3 className="award-title">Young investigator scholarship 2019.</h3>
            <p className="award-description">
              El Programa de Becas e Investigación de Investigadores de Jóvenes
              de ISAKOS fue desarrollado por el Comité Científico de ISAKOS.
            </p>
          </div>
        ))}
      </div>

      {/* Botón Leer Más */}
      <button className="load-more-button">Leer más</button>
    </div>
  );
};

export default Awards;
