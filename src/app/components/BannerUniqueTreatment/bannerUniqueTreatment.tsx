import Image from "next/image";
import React from "react";

const BannerUniqueTreatment: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white text-white h-[500px] my-2">
      {/* Imagen */}
      <div className="flex-1 absolute px-40">
        <Image
          src={"/assets/cancerHug.jpeg"} width={550} height={550}
          alt="Paciente y médico"
          className="object-cover w-auto h-auto"
        />
      </div>

      <div className="bg-[#EB356E] w-1/4 h-full">
        <div className="h-96 w-1/4"></div>
      </div>
      <div className="bg-white w-1/4">
        <div className="h-96 w-1/4"></div>
      </div>

      {/* Texto */}
      <div className="flex-1 p-6 px-24 text-center md:text-left bg-white text-gray-900 items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          ¡Cada persona es única como cada tratamiento es único!
        </h1>
        <p className="text-lg mb-6">
          La medicina de precisión es el camino del futuro en el cuidado de la salud.
          Descubre más sobre este emocionante enfoque visitando nuestro canal de YouTube.
        </p>
        <button className="px-6 py-3 w-48 bg-[#EB356E] text-white rounded-3xl font-semibold hover:bg-pink-600 transition">
          Saber más
        </button>
      </div>
    </div>
  );
};

export default BannerUniqueTreatment;
