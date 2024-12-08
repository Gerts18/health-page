"use client";

import React from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <main className="px-12 text-justify container mx-auto py-10 mt-24">
        <h1 className="text-center text-5xl font-extrabold mb-12 text-blue-600">
          Aviso de Privacidad
        </h1>

          <p className="mb-4">
            <strong className="text-gray-900">
              FUNDACIÓN PARA LA INVESTIGACIÓN CLÍNICA Y MOLECULAR APLICADA DEL
              CÁNCER – FICMAC
            </strong>
            , NIT 900.239.016-1 en cumplimiento de la Ley 1581 de 2012 y demás
            normas concordantes, es responsable del tratamiento de sus datos
            personales.
          </p>
          <p className="mb-4">
            Los datos personales que{" "}
            <strong className="text-gray-900">FICMAC</strong> recolecta, almacena,
            usa, circula, transfiere, transmite o suprime y que en general serán
            objeto de tratamiento serán utilizados para las siguientes
            finalidades respecto a:
          </p>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            <li>Nómina</li>
            <li>Compras y/o proveedores</li>
            <li>Talento Humano</li>
            <li>Pacientes</li>
            <li>Pacientes menores de edad (niños, niñas y adolescentes)</li>
            <li>Médicos</li>
            <li>Clientes</li>
            <li>Videovigilancia</li>
            <li>Visitantes</li>
          </ul>
          <p className="mb-4 text-gray-700">
            Las mismas están descritas y/o desagregadas en la Política de
            Protección de Datos Personales (ADM-PLT-001).
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">FICMAC</strong> pone todos los
            recursos humanos, técnicos y tecnológicos para brindar seguridad y
            confidencialidad a los datos recolectados, asegurando su uso para
            los fines establecidos, contando con mecanismos para evitar la venta
            de datos, la pérdida o el manejo indebido de la información.
          </p>
          <p className="mb-4 text-gray-700">
            Como titular de información tiene derecho a conocer, actualizar y
            rectificar sus datos personales y, sólo en los casos en que sea
            procedente de conformidad con la normatividad vigente aplicable, a
            suprimirlos o revocar la autorización otorgada para su tratamiento.
          </p>
          <p className="mb-4 text-gray-700">
            Si desea conocer el tratamiento de datos, cambios sustanciales y
            demás información detallada consulte la
            <strong className="text-gray-900"> Política de tratamiento de datos personales
            </strong>{" "}
            de <strong className="text-gray-900"> FICMAC</strong>, en nuestra página
            web 
            <a
              href="https://www.ficmac.org"
              target="_blank"
              className="text-blue-600 hover:underline"
            > www.ficmac.org
            </a>
            . Así mismo usted tiene derecho a presentar consultas, solicitudes,
            quejas, peticiones o reclamos, y a obtener respuesta de los mismos.
          </p>
          <p className="mb-4 text-gray-700">
            En caso que requiera ejercer sus derechos como titular, se puede
            comunicar con la Dirección Administrativa de
            <strong className="text-gray-900"> FICMAC</strong> en el correo
            electrónico: 
            <a
              href="mailto:administracion@ficmac.org"
              className="text-blue-600 hover:underline"
            > administracion@ficmac.org
            </a>
            o en el teléfono: <span className="font-semibold">+57(1) 8051809</span>{" "}
            y/o en la Calle 116 # 09 – 72 Consultorios 718 y 719, Bogotá –
            Colombia.
          </p>
          <footer className="text-end mt-6 border-t border-gray-200 pt-4 text-gray-700">
            <p>
              <strong>Código:</strong> ADM-OTD-001
            </p>
            <p>
              <strong>Versión:</strong> 01
            </p>
            <p>
              <strong>Fecha:</strong> 08-10-2021
            </p>
          </footer>
      </main>
      <Footer />
    </>
  );
};

export default page;