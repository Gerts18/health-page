import React from "react";

const FICMACSection = () => {
  return (
    <section className="flex items-center justify-center text-left bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg gap-8 mt-6 bg-gradient-to-t from-blue-400 to-#4e7ac7">
      <div className="flex-shrink-0">
        <iframe
          src="https://www.youtube.com/embed/OrhhcTHXQi0" // Reemplaza "tuVideoID" con el ID del video real
          title="Video FICMAC"
          allowFullScreen
          className="w-[400px] h-[225px] rounded-lg border-none"
        ></iframe>
      </div>
      <div className="max-w-sm">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Somos FICMAC | Laboratorio Colombiano
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          ¡Descubre la medicina de precisión contra el cáncer con FICMAC! Somos pioneros en investigación en Biología Molecular. Únete a este emocionante viaje hacia la esperanza en la lucha contra el cáncer.
        </p>
      </div>
    </section>
  );
};

export default FICMACSection;
