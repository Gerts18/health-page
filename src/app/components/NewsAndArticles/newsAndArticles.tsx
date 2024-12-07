import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsAndArticles = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl px-28 pb-4 font-bold">Noticias</h1>
      <h2 className="text-2xl px-28 pb-4 font-bold text-[#EB356E]">
        Obtenga todas las actualizaciones aquí.
      </h2>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-lg p-3">
          <div className="rounded-lg">
            <Image
              src="/assets/Titulo1.jpeg"
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

        <div className="border rounded-lg overflow-hidden shadow-lg p-3">
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
              La medicina gana terreno contra el cáncer
            </h3>
            <p className="text-gray-700 mb-4">
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg p-3">
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

        <div className="border rounded-lg overflow-hidden shadow-lg p-3">
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
              Sí, la medicina está ganando terreno contra el cáncer gracias a
              avances tecnológicos e innovaciones, así como a la medicina de
              precisión
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#547EED] hover:bg-[#3457b8] text-white py-2 px-6 rounded-full text-lg font-semibold h-auto p-1">
          <Link href="/News">Lee nuestras noticias y artículos</Link>
        </button>
      </div>
    </div>
  );
};

export default newsAndArticles;
