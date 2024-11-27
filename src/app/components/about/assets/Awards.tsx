import React from "react";
import "./Awards.css";

const Awards = () => {
const awards =[
  {
    icon: "/assets/img/about/awardImg.png",
    title: "Young investigator scholarship 2019",
    description: "El Programa de Becas e Investigación de Investigaciones de Jóvenes Investigadores de ISAKOS fue desarrollado por el Comité Científico de ISAKOS",
    video: "#",
    article: "#",
  },
  {
    icon: "/assets/img/about/awardImg2.png",
    title: "Premio a la investigación científica 2019",
    description: "Estudio longitudinal de epidemiología molecular del cáncer de pulmón, colon y melanoma en Colombia.",
    video: "https://www.youtube.com/watch?v=6wcpJHecCb0",
    article: "#",
  },
  {
    icon: "/assets/img/about/awardImg3.png",
    title: "Global oncology young investigator award 2018",
    description: "La Fundación para la Investigación Clínica y Molecular Aplicada al Cáncer FICMAC y el Grupo CLICAP obtuvieron el GRANT",
    video: "https://www.youtube.com/watch?v=ILt8njmNru0",
    article: "https://ficmac.org/wp-content/uploads/2022/01/2018-Conquer-Cancer-Foundation-Global-Oncology-Young-Investigator-Award-Recipients.pdf",
  },
  {
    icon: "/assets/img/about/awardImg4.png",
    title: "Concurso de investigación “HERNANDO SARASTI",
    description: "La productividad científica colombiana ha aumentado de manera significativa en los últimos años en lo que respecta al tratamiento del cáncer",
    video: "#",
    article: "https://www.researchgate.net/publication/327671475_Productividad_cientifica_y_mortalidad_por_cancer_en_Colombia_de_2000_a_2015",
  },
];

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
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <img
              src={award.icon}
              alt="AACR logo"
              className="award-image"
            />
            <p className="award-organization">{award.title}</p>
            <button className="award-button" href={award.video}>Ver video</button>
            <button className="award-button" href={award.article}>Ver artículo</button>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-description">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
