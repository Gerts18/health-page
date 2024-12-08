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
          <br />
          <p className="text-gray-700">
            La presente Política y la Ley 1581 de 2012 aplicará al tratamiento
            de datos personales efectuado en territorio colombiano o cuando al
            Responsable o Encargado del Tratamiento no establecido en territorio
            nacional le sea aplicable la legislación colombiana en virtud de
            normas y tratados internacionales.
          </p>
          <br />
          <p className="text-gray-700">
            De conformidad con lo dispuesto en el artículo 2° de la Ley 1581 de
            2012 y el Decreto 1074 de 2015 se exceptúan del presente tratamiento
            los datos que reposen en:
          </p>
          <br />
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
            <br />
            <li>
              Las bases de datos y archivos que tengan por finalidad la
              seguridad y defensa nacional, así como la prevención, detección,
              monitoreo y control del lavado de activos y el financiamiento del
              terrorismo.
            </li>
            <br />
            <li>
              Las Bases de datos que tengan como fin y contengan información de
              inteligencia y contrainteligencia.
            </li>
            <br />
            <li>
              Las bases de datos y archivos de información periodística y otros
              contenidos editoriales.
            </li>
            <br />
            <li>
              Las bases de datos y archivos regulados por la Ley 1266 de 2008.
            </li>
            <br />
            <li>
              Las bases de datos y archivos regulados por la Ley 79 de 1993.
            </li>
            <br />
          </ol>
        </section>

        {/* Sección 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Definiciones</h2>
          <ol className=" list-[lower-alpha]  pl-5 text-gray-700">
            <li>
              <strong>Autorización:</strong> Consentimiento previo, expreso e
              informado del Titular para llevar a cabo el Tratamiento de datos
              personales.
            </li>
            <br />
            <li>
              <strong>Aviso de Privacidad:</strong> Comunicación verbal o
              escrita generada por el Responsable, dirigida al Titular para el
              Tratamiento de sus datos personales, mediante la cual se le
              informa acerca de la existencia de las políticas de Tratamiento de
              información que le serán aplicables, la forma de acceder a las
              mismas y las finalidades del Tratamiento que se pretende dar a los
              datos personales.
            </li>
            <br />
            <li>
              <strong>Base de Datos:</strong> Conjunto organizado de datos
              personales que sea objeto de Tratamiento.
            </li>
            <br />
            <li>
              <strong>Causahabiente:</strong> Es el que sucede al causante en
              algo. Normalmente se entiende como el causahabiente como el
              heredero, que sustituye al causante (persona fallecida) como
              titular de derechos u obligaciones.
            </li>
            <br />
            <li>
              <strong>Dato Personal:</strong> Cualquier información vinculada o
              que pueda asociarse a una o varias personas naturales determinadas
              o determinables.
            </li>
            <br />
            <li>
              <strong>Dato Público:</strong> Es el dato que no sea semiprivado,
              privado o sensible. Son considerados datos públicos, entre otros,
              los datos relativos al estado civil de las personas, a su
              profesión u oficio y a su calidad de comerciante o de servidor
              público. Por su naturaleza, los datos públicos pueden estar
              contenidos, entre otros, en registros públicos, documentos
              públicos, gacetas y boletines oficiales y sentencias judiciales
              debidamente ejecutoriadas que no estén sometidas a reserva.
            </li>
            <br />
            <li>
              <strong>Dato privado:</strong> Es el dato que por su naturaleza
              íntima o reservada sólo es relevante para el titular.
            </li>
            <br />
            <li>
              <strong>Dato Semiprivado:</strong> Es semiprivado el dato que no
              tiene naturaleza íntima, reservada, ni pública y cuyo conocimiento
              o divulgación puede interesar no sólo a su titular sino a cierto
              sector o grupo de personas o a la sociedad en general, como el
              dato financiero y crediticio de actividad comercial o de servicios
              a que se refiere el Título IV de la ley 1266 de 2008.
            </li>
            <br />
            <li>
              <strong>Datos Sensibles:</strong> Se entiende por datos sensibles
              aquellos que afectan la intimidad del Titular o cuyo uso indebido
              puede generar su discriminación, tales como aquellos que revelen
              el origen racial o étnico, la orientación política, las
              convicciones religiosas o filosóficas, la pertenencia a
              sindicatos, organizaciones sociales, de derechos humanos o que
              promueva intereses de cualquier partido político o que garanticen
              los derechos y garantías de partidos políticos de oposición, así
              como los datos relativos a la salud, a la vida sexual, y los datos
              biométricos.
            </li>
            <br />
            <li>
              <strong>Encargado del Tratamiento:</strong> Persona natural o
              jurídica, pública o privada, que por sí misma o en asocio con
              otros, realice el Tratamiento de datos personales por cuenta del
              Responsable del Tratamiento.
            </li>
            <br />
            <li>
              <strong>Responsable del Tratamiento:</strong> Persona natural o
              jurídica, pública o privada, que por sí misma o en asocio con
              otros, decida sobre la base de datos y/o el Tratamiento de los
              datos.
            </li>
            <br />
            <li>
              <strong>Titular:</strong> Persona natural cuyos datos personales
              sean objeto de Tratamiento.
            </li>
            <br />
            <li>
              <strong>Tratamiento:</strong> Cualquier operación o conjunto de
              operaciones sobre datos personales, tales como la recolección,
              almacenamiento, uso, circulación o supresión.
            </li>
            <br />
            <li>
              <strong>Tratamiento de imágenes:</strong> Corresponde a
              operaciones como la captación, grabación, transmisión,
              almacenamiento, conservación, o reproducción en tiempo real o
              posterior, entre otras, de las imágenes de personas determinadas o
              determinables, y en consecuencia, se encuentran sujetas al Régimen
              General de Protección de Datos Personales.
            </li>
            <br />
            <li>
              <strong>Transferencia:</strong> La transferencia de datos tiene
              lugar cuando el Responsable y/o Encargado del Tratamiento de datos
              personales, ubicado en Colombia, envía la información o los datos
              personales a un receptor, que a su vez es Responsable del
              Tratamiento y se encuentra dentro o fuera del país.
            </li>
            <br />
            <li>
              <strong>Transmisión:</strong> Tratamiento de datos personales que
              implica la comunicación de los mismos dentro o fuera del
              territorio de la República de Colombia cuando tenga por objeto la
              realización de un Tratamiento por el Encargado por cuenta del
              Responsable.
            </li>
            <br />
          </ol>
        </section>

        {/* Sección 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Principios</h2>
          <p>
            Para efectos de garantizar la protección de datos personales,
            <strong>FICMAC</strong> aplicará de manera armónica e integral los
            siguientes principios, a la luz de los cuales se deberá realizar el
            tratamiento, transferencia y transmisión de datos personales:
          </p>
          <br />
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>
                Principio de Legalidad en Materia de Tratamiento de Datos:
              </strong>{" "}
              El tratamiento de datos es una actividad reglada, la cual deberá
              estar sujeta a las disposiciones legales vigentes y aplicables que
              rigen la materia.
            </li>
            <br />
            <li>
              <strong>Principio de Finalidad:</strong> La actividad del
              tratamiento de datos personales que realice{" "}
              <strong>FICMAC</strong> o a la cual tuviere acceso, obedecerán a
              una finalidad legítima en consonancia con la Constitución Política
              de Colombia y la ley, la cual deberá ser informada al respectivo
              titular de los datos personales.
            </li>
            <br />
            <li>
              <strong>Principio de Libertad:</strong> El tratamiento de los
              datos personales sólo puede realizarse con el consentimiento,
              previo, expreso e informado del Titular. Los datos personales no
              podrán ser obtenidos o divulgados sin previa autorización, o en
              ausencia de mandato legal, estatutario, o judicial que releve el
              consentimiento.
            </li>
            <br />
            <li>
              <strong>Principio de Veracidad o Calidad:</strong> La información
              sujeta a Tratamiento debe ser veraz, completa, exacta,
              actualizada, comprobable y comprensible. Se prohíbe el Tratamiento
              de datos parciales, incompletos, fraccionados o que induzcan a
              error.
            </li>
            <br />
            <li>
              <strong>Principio de Transparencia:</strong> En el tratamiento de
              datos personales, <strong>FICMAC</strong> garantizará al Titular
              su derecho de obtener en cualquier momento y sin restricciones,
              información acerca de la existencia de cualquier tipo de
              información o dato personal que sea de su interés o titularidad.
            </li>
            <br />
            <li>
              <strong>Principio de Acceso y Circulación Restringida:</strong> El
              tratamiento de datos personales se sujeta a los límites que se
              derivan de la naturaleza de éstos, de las disposiciones de la ley
              y la Constitución. En consecuencia, el tratamiento sólo podrá
              hacerse por personas autorizadas por el titular y/o por las
              personas previstas en la ley. Los datos personales, salvo la
              información pública, no podrán estar disponibles en internet u
              otros medios de divulgación o comunicación masiva, salvo que el
              acceso sea técnicamente controlable para brindar un conocimiento
              restringido sólo a los titulares o terceros autorizados conforme a
              la ley. Para estos propósitos la obligación de{" "}
              <strong>FICMAC</strong> será de medio.
            </li>
            <br />
            <li>
              <strong>Principio de Seguridad:</strong> La información sujeta a
              tratamiento por <strong>FICMAC</strong> se deberá manejar con las
              medidas técnicas, humanas y administrativas que sean necesarias
              para otorgar seguridad a los registros evitando su adulteración,
              pérdida, consulta, uso o acceso no autorizado o fraudulento.
            </li>
            <br />
            <li>
              <strong>Principio de Confidencialidad:</strong> Todas las personas
              que en <strong>FICMAC</strong> administren, manejen, actualicen o
              tengan acceso a informaciones de cualquier tipo que se encuentre
              en Bases de Datos, están obligadas a garantizar la reserva de la
              información, por lo que se comprometen a conservar y mantener de
              manera estrictamente confidencial y no revelar a terceros, toda la
              información que llegaren a conocer en la ejecución y ejercicio de
              sus funciones; salvo cuando se trate de actividades autorizadas
              expresamente por la ley de protección de datos. Esta obligación
              persiste y se mantendrá inclusive después de finalizada su
              relación con alguna de las labores que comprende el Tratamiento.
            </li>
            <br />
          </ul>
        </section>

        {/* Derechos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            9. Derechos de los Titulares
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Acceso gratuito a los datos personales.</li>
            <br />
            <li>
              Actualización y rectificación de datos incorrectos o incompletos.
            </li>
            <br />
            <li>
              Revocación de la autorización y supresión de datos cuando aplique.
            </li>
            <br />
            <li>Conocer el uso dado a los datos personales.</li>
            <br />
            <li>
              Presentar quejas ante la Superintendencia de Industria y Comercio.
            </li>
            <br />
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
