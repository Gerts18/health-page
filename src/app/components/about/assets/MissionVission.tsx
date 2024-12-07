"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react";

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 w-full min-h-screen font-sans px-4 py-2 md:px-16 md:py-12">
      <div className="w-full mb-5">
        <div className="w-full py-6 md:py-8 bg-[rgba(160,184,255,0.3)] rounded-lg">
          <div
            className="flex justify-start w-full mb-5 px-4 md:px-10"
            role="tablist"
          >
            <button
              className={`relative font-bold mx-2 cursor-pointer bg-transparent border-none transition-colors text-2xl md:text-4xl ${
                activeTab === "mission"
                  ? "text-white opacity-100"
                  : "text-white opacity-60"
              }`}
              onClick={() => setActiveTab("mission")}
              role="tab"
              aria-selected={activeTab === "mission"}
            >
              Misión
              {activeTab === "mission" && (
                <span className="absolute bottom-[-6px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-blue-200" />
              )}
            </button>
            <button
              className={`relative font-bold mx-2 cursor-pointer bg-transparent border-none transition-colors text-2xl md:text-4xl ${
                activeTab === "vision"
                  ? "text-white opacity-100"
                  : "text-white opacity-60"
              }`}
              onClick={() => setActiveTab("vision")}
              role="tab"
              aria-selected={activeTab === "vision"}
            >
              Visión
              {activeTab === "vision" && (
                <span className="absolute bottom-[-6px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-[#ff4da6]" />
              )}
            </button>
          </div>

          <div className="px-4 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-justify leading-relaxed space-y-4 pr-0 md:pr-8 text-lg md:text-2xl">
              {activeTab === "mission" && (
                <p>
                  Promover, fomentar y desarrollar actividades de investigación
                  traslacional en el campo de la biología tumoral, con especial
                  interés en la genotipificación del cáncer en Colombia y en la
                  búsqueda de nuevos biomarcadores predictivos de respuesta, con
                  el fin de aumentar y mejorar la calidad de vida de los
                  pacientes.
                </p>
              )}
              {activeTab === "vision" && (
                <p>
                  Aquí puedes incluir el texto para la visión o algún contenido
                  relacionado. Este se mostrará cuando la pestaña &quot;Visión&quot; esté
                  activa.
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <Image
                isBlurred
                isZoomed
                src="/assets/img/about/missionVission.png"
                alt="Vista del laboratorio y su entorno"
                width={700}
                className="max-w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
