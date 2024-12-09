import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsAndArticles = () => {
  return (
    <div className="py-10">
      {/* Títulos principales de la sección */}
      <h1 className="text-4xl px-14 pb-4 font-bold">Noticias</h1>
      <h2 className="text-2xl px-14 pb-4 font-bold text-[#EB356E]">
        Obtenga todas las actualizaciones aquí.
      </h2>

      {/* Contenedor de las tarjetas de noticias */}
      <div className="mt-10 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Tarjeta 1 */}
        <div className="transition ease-in-out delay-75 hover:scale-105 border rounded-lg overflow-hidden shadow-lg p-3">
          <a
            href={
              "https://www.nationalgeographic.com.es/ciencia/recomendaciones-clave-para-prevenir-cancer-segun-ciencia_21235"
            }
          >
            <div className="rounded-lg">
              {/* Imagen de la noticia */}
              <Image
                src="/assets/Titulo1.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg w-full h-48 px-4 pt-4"
              />
            </div>
            <div className="p-4">
              {/* Etiqueta de categoría */}
              <div className="text-white bg-[#EB356E] w-24 rounded-3xl font-medium text-center">
                Noticias
              </div>
              {/* Título y descripción de la noticia */}
              <h3 className="text-xl font-bold mb-2">
                Revísate, contra el cáncer
              </h3>
              <p className="text-gray-700 mb-4">
                &quot;Conoce como revisarte tu mismo contra el cáncer&quot;
              </p>
            </div>
          </a>
        </div>

        {/* Tarjeta 2 */}
        <div className="transition ease-in-out delay-75 hover:scale-105 border rounded-lg overflow-hidden shadow-lg p-3">
          <a
            href={"https://www.who.int/es/news-room/fact-sheets/detail/cancer"}
          >
            <div className="rounded-lg">
              <Image
                src="/assets/Titulo2.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg w-full h-48 px-4 pt-4"
              />
            </div>
            <div className="p-4">
              <div className="text-white bg-[#EB356E] w-24 rounded-3xl font-medium text-center">
                Noticias
              </div>
              <h3 className="text-xl font-bold mb-2">
                El crecimiento del cáncer en el mundo
              </h3>
              <p className="text-gray-700 mb-4">
                &quot;El cáncer ha crecido últimamente.&quot;
              </p>
            </div>
          </a>
        </div>

        {/* Tarjeta 3 */}
        <div className="transition ease-in-out delay-75 hover:scale-105 border rounded-lg overflow-hidden shadow-lg p-3">
          <a href="">
            <div className="rounded-lg">
              <Image
                src="/assets/Titulo4.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg w-full h-48 px-4 pt-4"
              />
            </div>
            <div className="p-4">
              <div className="text-white bg-[#EB356E] w-24 rounded-3xl font-medium text-center">
                Noticias
              </div>
              <h3 className="text-xl font-bold mb-2">
                La medicina gana terreno contra el cáncer
              </h3>
              <p className="text-gray-700 mb-4">
                &quot;Sí, la medicina está ganando terreno contra el cáncer
                gracias a avances tecnológicos e innovaciones, así como a la
                medicina de precisión.&quot;
              </p>
            </div>
          </a>
        </div>

        {/* Tarjeta 4 */}
        <div className="transition ease-in-out delay-75 hover:scale-105 border rounded-lg overflow-hidden shadow-lg p-3">
          <a href="">
            <div className="rounded-lg">
              <Image
                src="/assets/Titulo3.jpeg"
                alt=""
                width={400}
                height={400}
                className="rounded-lg w-full h-48 px-4 pt-4"
              />
            </div>
            <div className="p-4">
              <div className="text-white bg-[#EB356E] w-24 rounded-3xl font-medium text-center">
                Noticias
              </div>
              <h3 className="text-xl font-bold mb-2">¿Qué es el cáncer?</h3>
              <p className="text-gray-700 mb-4">
                &quot;Los carcinomas son el tipo más común de cáncer. Consisten
                de células epiteliales, que son las células que recubren las
                partes internas y externas del cuerpo. Hay muchos tipos de
                células epiteliales. Cuando se observan al microscopio, parecen
                pequeñas columnas.&quot;
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Botón para ver más noticias */}
      <div className="flex justify-center items-center mt-8">
        <button className="bg-[#547EED] hover:bg-[#3457b8] transition duration-100 text-white py-2 px-6 rounded-full text-lg font-semibold h-auto p-1">
          <Link href="/News">Lee nuestras noticias y artículos</Link>
        </button>
      </div>
    </div>
  );
};

export default newsAndArticles;
