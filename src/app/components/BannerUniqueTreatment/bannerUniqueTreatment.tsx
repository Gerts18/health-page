import Image from "next/image";
import React from "react";

const BannerUniqueTreatment: React.FC = () => {
  return (
    <section className="flex flex-col  md:flex-row items-center bg-rose bg-white text-white h-[700px]">
      {/* Imagen */}
      <div className="flex absolute px-40">
        <Image
          src={"/assets/cancerHug.jpeg"}
          width={700}
          height={700}
          alt="Paciente y médico"
          className="object-cover w-[700px] h-auto"
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
          La medicina de precisión es el camino del futuro en el cuidado de la
          salud. Descubre más sobre este emocionante enfoque visitando nuestro
          canal de YouTube.
        </p>
        <button className="px-6 py-3 w-48 bg-[#EB356E] text-white rounded-3xl font-semibold hover:bg-pink-600 transition">
          <a href="https://www.youtube.com/@fundacionficmac">Saber más</a>
        </button>
      </div>
    </section>
  );
};

export default BannerUniqueTreatment;
