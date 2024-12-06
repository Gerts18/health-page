import React from "react";
//import P4 from "@/app/public/assets/adn.png";

const FICMACSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#547EED] to-[#304887]">
      <div className="bg-adn bg-repeat-x  bg-[length:550px_800px] flex items-center justify-center text-left shadow-lg gap-8 mt-6 p-10 rounded-lg">
        <div className="flex-shrink-0 opacity-100">
          <iframe
            src="https://www.youtube.com/embed/OrhhcTHXQi0"
            title="Video FICMAC"
            allowFullScreen
            className="w-[600px] h-[337px] rounded-lg border-none"
          ></iframe>
        </div>
        <div className="max-w-sm">
          <h2 className="text-5xl font-bold text-white mb-3">
            Somos FICMAC | Laboratorio Colombiano
          </h2>
          <p className="text-gray-50 text-lg leading-relaxed">
            ¡Descubre la medicina de precisión contra el cáncer con FICMAC!
            Somos pioneros en investigación en Biología Molecular. Únete a este
            emocionante viaje hacia la esperanza en la lucha contra el cáncer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FICMACSection;
