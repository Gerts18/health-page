import React from "react";
import Image from "next/image";

const newsAndArticles = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl px-28 pb-4 font-bold">Noticias y artículos</h1>
      <h2 className="text-2xl px-28 pb-4 font-bold text-[#EB356E]">
        Obtenga todas las actualizaciones aquí.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 pb-8">
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="rounded-lg">
            <Image
              src="/assets/luchaCancer.png"
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
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="rounded-lg">
            <Image
              src="/assets/luchaCancer.png"
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
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="rounded-lg">
            <Image
              src="/assets/luchaCancer.png"
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
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="rounded-lg">
            <Image
              src="/assets/luchaCancer.png"
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
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#547EED] text-white w-1/6 rounded-full text-lg h-auto p-1">
          Lee nuestras noticias y artículos
        </button>
      </div>
    </div>
  );
};

export default newsAndArticles;
