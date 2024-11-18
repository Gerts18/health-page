import React from "react";

const bannerPrecisionMedicine = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 items-center">
      {/* Columna de texto */}
      <div>
        <h2 className="text-4xl font-bold mb-6">Medicina de Precisión</h2>
        <p className="mb-6 text-lg">
          La medicina de precisión ha tenido un impacto significativo en la práctica clínica de oncología, brindando diversos aportes que han mejorado la atención a los pacientes con cáncer.
        </p>
        <p className="mb-6 text-lg">
          En FICMAC, ofrecemos un enfoque eficiente y efectivo para el cuidado de la salud, con beneficios significativos tanto para los pacientes como para la comunidad médica y científica:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Diagnóstico más preciso</li>
          <li>Terapias dirigidas</li>
          <li>Selección de tratamientos personalizados</li>
          <li>Monitorización del progreso del tratamiento</li>
          <li>Pronóstico y prevención</li>
          <li>Investigación y desarrollo de nuevos tratamientos</li>
        </ul>
      </div>

      {/* Columna de video o imagen */}
      <div className="relative">
      <iframe
          width="640"
          height="400"
          src="https://www.youtube.com/embed/tLh1j-bKn-s?si=ECcwgVQdPKExm7wa"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default bannerPrecisionMedicine;
