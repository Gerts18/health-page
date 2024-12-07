"use client";

import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-center text-3xl font-bold mb-8">
          Política de Tratamiento de Datos Personales FICMAC
        </h1>

        {/* Sección 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            1. Responsable del Tratamiento de Datos
          </h2>
          <table className="table-auto w-full border border-gray-200 text-left">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold p-2">Nombre o Razón Social</td>
                <td className="p-2">
                  FUNDACIÓN PARA LA INVESTIGACIÓN CLÍNICA Y MOLECULAR APLICADA
                  DEL CÁNCER – FICMAC
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">NIT</td>
                <td className="p-2">900.239.016-1</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Dirección</td>
                <td className="p-2">
                  Calle 116 # 09 – 72 Consultorio: 718 – 719, Bogotá – Colombia
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Teléfonos</td>
                <td className="p-2">+57 (1) 805 1809</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Página Web</td>
                <td className="p-2">
                  <a
                    href="https://www.ficmac.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    www.ficmac.org
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Sección 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Objeto de la Política</h2>
          <p className="text-gray-700">
            El presente Política tiene por objeto proteger el Derecho
            Constitucional que tienen todas las personas a conocer, actualizar y
            rectificar las informaciones que se hayan recogido sobre ellas en
            las bases de datos o archivos de propiedad de FUNDACIÓN PARA LA
            INVESTIGACIÓN CLÍNICA Y MOLECULAR APLICADA DEL CÁNCER – FICMAC – (en
            adelante FICMAC) o cuyo tratamiento ha sido encargado a FICMAC y los
            demás derechos, libertades y garantías constitucionales a que se
            refieren los artículos 15 (derecho a la intimidad) y 20 (derecho a
            la información) de la Constitución Política de Colombia.
          </p>
        </section>

        {/* Sección 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            3. Ámbito de Aplicación / Alcance
          </h2>
          <p className="text-gray-700">
            Conforme a lo dispuesto en la Ley 1581 de 2012 y sus decretos
            reglamentarios, compilatorios y modificatorios, principalmente el
            Decreto 1074 de 2015, la presente Política será aplicable a los
            datos de personas registradas en todas las bases de datos de
            propiedad de FICMAC o cuyo tratamiento ha sido encargado a FICMAC.
          </p>
          <p className="text-gray-700">
            La presente Política y la Ley 1581 de 2012 aplicará al tratamiento
            de datos personales efectuado en territorio colombiano o cuando al
            Responsable o Encargado del Tratamiento no establecido en territorio
            nacional le sea aplicable la legislación colombiana en virtud de
            normas y tratados internacionales.
          </p>
          <p className="text-gray-700">
            De conformidad con lo dispuesto en el artículo 2° de la Ley 1581 de
            2012 y el Decreto 1074 de 2015 se exceptúan del presente tratamiento
            los datos que reposen en:
          </p>
          <ol className="list-[lower-alpha] pl-5 text-gray-700 mt-4">
            <li>
              Las bases de datos o archivos mantenidos en un ámbito
              exclusivamente personal o doméstico. Cuando estas bases de datos o
              archivos vayan a ser suministrados a terceros se deberá, de manera
              previa, informar al Titular y solicitar su autorización. En este
              caso los Responsables y Encargados de las bases de datos y
              archivos quedarán sujetos a las disposiciones contenidas en la
              presente ley.
            </li>
            <li>
              Las bases de datos y archivos que tengan por finalidad la
              seguridad y defensa nacional, así como la prevención, detección,
              monitoreo y control del lavado de activos y el financiamiento del
              terrorismo.
            </li>
            <li>
              Las Bases de datos que tengan como fin y contengan información de
              inteligencia y contrainteligencia.
            </li>
            <li>
              Las bases de datos y archivos de información periodística y otros
              contenidos editoriales.
            </li>
            <li>
              Las bases de datos y archivos regulados por la Ley 1266 de 2008.
            </li>
            <li>
              Las bases de datos y archivos regulados por la Ley 79 de 1993.
            </li>
          </ol>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Definiciones</h2>
          <ol className="list-[lower-alpha]  list-disc pl-5 text-gray-700">
            <li>
              <strong>Autorización:</strong> Consentimiento previo, expreso e
              informado del Titular para el tratamiento de datos.
            </li>
            <li>
              <strong>Base de Datos:</strong> Conjunto organizado de datos
              personales objeto de tratamiento.
            </li>
            <li>
              <strong>Dato Sensible:</strong> Datos que afectan la intimidad del
              titular o cuyo uso indebido puede generar discriminación.
            </li>
            <li>
              <strong>Responsable del Tratamiento:</strong> Persona o entidad
              que decide sobre la base de datos y su tratamiento.
            </li>
          </ol>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Principios</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Legalidad:</strong> El tratamiento de datos debe cumplir
              con la ley vigente.
            </li>
            <li>
              <strong>Finalidad:</strong> Los datos deben ser utilizados para
              propósitos legítimos e informados al titular.
            </li>
            <li>
              <strong>Libertad:</strong> El tratamiento solo puede realizarse
              con el consentimiento expreso del titular.
            </li>
            <li>
              <strong>Confidencialidad:</strong> La información no debe
              divulgarse sin autorización, salvo excepciones legales.
            </li>
            <li>
              <strong>Seguridad:</strong> Los datos deben protegerse con medidas
              técnicas, humanas y administrativas adecuadas.
            </li>
          </ul>
        </section>

        {/* Derechos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            9. Derechos de los Titulares
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Acceso gratuito a los datos personales.</li>
            <li>
              Actualización y rectificación de datos incorrectos o incompletos.
            </li>
            <li>
              Revocación de la autorización y supresión de datos cuando aplique.
            </li>
            <li>Conocer el uso dado a los datos personales.</li>
            <li>
              Presentar quejas ante la Superintendencia de Industria y Comercio.
            </li>
          </ul>
        </section>

        {/* Procedimientos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Procedimientos</h2>
          <p className="text-gray-700">
            Los titulares podrán ejercer sus derechos mediante consultas,
            peticiones o reclamos, los cuales serán atendidos por FICMAC en un
            término máximo de 10 días hábiles. Si la solicitud está incompleta,
            se requerirá al solicitante para completar la información en un
            plazo de 5 días hábiles.
          </p>
        </section>

        {/* Medidas de Seguridad */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Medidas de Seguridad</h2>
          <p className="text-gray-700">
            FICMAC adopta medidas técnicas, humanas y administrativas para
            garantizar la seguridad y confidencialidad de los datos personales,
            evitando adulteración, pérdida, acceso no autorizado o fraude.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
