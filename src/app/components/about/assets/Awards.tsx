import React from "react";

const Awards = () => {
const awards =[
  {
    icon: "/assets/img/about/awardImg.png",
    title: "Young investigator scholarship 2019",
    description: "El Programa de Becas e Investigación de Investigaciones de Jóvenes Investigadores de ISAKOS fue desarrollado por el Comité Científico de ISAKOS",
    video: "https://www.youtube.com/watch?v=pFqSnWfhZIM",
    article: "https://www.dof.gob.mx/nota_detalle.php?codigo=5710683&fecha=07/12/2023#gsc.tab=0",
  },
  {
    icon: "/assets/img/about/awardImg2.png",
    title: "Premio a la investigación científica 2019",
    description: "Estudio longitudinal de epidemiología molecular del cáncer de pulmón, colon y melanoma en Colombia.",
    video: "https://www.youtube.com/watch?v=6wcpJHecCb0",
    article: "https://www.gob.mx/sep/documentos/premio-nacional-de-ciencias-2022",
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
    video: "https://www.youtube.com/watch?v=YNZrybhBUQM",
    article: "https://www.researchgate.net/publication/327671475_Productividad_cientifica_y_mortalidad_por_cancer_en_Colombia_de_2000_a_2015",
  },
];

  return (
    <div className="text-center p-8 bg-gray-100">
      {/* Título principal */}
      <h1 className="text-black text-3xl font-bold mb-2">Premios y Reconocimientos</h1>
      {/* Subtítulo */}
      <p className="text-pink-500 text-lg mb-8">
        Obtenga todas las actualizaciones aquí.
      </p>
      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {/* Tarjeta individual */}
        {awards.map((award, index) => (
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:translate-y-[-5px] transition-all max-w-xs mx-auto" key={index}>
            <img
              src={award.icon}
              alt="AACR logo"
              className="w-full h-44 object-contain rounded mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">{award.title}</p>
            <a className="inline-block px-3 py-1 bg-pink-500 text-white rounded-full text-sm mb-2 hover:bg-pink-600 transition" href={award.video}>Ver video</a>
            <a className="inline-block px-3 py-1 bg-pink-500 text-white rounded-full text-sm mb-2 hover:bg-pink-600 transition" href={award.article}>Ver artículo</a>
            <h3 className="text-lg font-bold text-black mb-2">{award.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
