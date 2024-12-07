'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const PreguntasFrecuentesD = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const preguntas = [
    "¿En qué consisten estas pruebas?",
    "¿Cómo consultar los resultados de mi examen?",
    "¿Qué debo llevar para mi estudio?",
    "¿Cómo reclamar los bloques de parafina y/o láminas histológicas en FICMAC?",
    "¿Cómo hago para llegar a FICMAC?",
    "¿Ustedes me pueden decir la interpretación de los resultados de mis exámenes?",
    "¿Cómo solicitar mi historia clínica?",
    "¿Cuáles son los horarios de atención para cada trámite?",
    "Derechos de los pacientes", 
    "Derechos de los pacientes"
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-blue-600 mb-4">Preguntas frecuentes</h3>
      <div className="space-y-4">
        {preguntas.map((pregunta, index) => (
          <div
            key={index}
            className={`border rounded-md p-4 transition-colors duration-300 ${
              activeIndex === index ? 'bg-[#A0B8FF]' : 'bg-white'
            } shadow-sm`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left font-medium flex justify-between items-center focus:outline-none"
            >
              <span className={activeIndex === index ? 'text-white' : 'text-gray-700'}>
                {pregunta}
              </span>
              <FaChevronDown 
                className={`transform transition-transform duration-300 text-[#EB356E] ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-white transition-all duration-300 ease-in-out">
                {index === 0 ? (
                  <p>Por medio de biopsias (sólidas o líquidas) se puede obtener ADN, ARN, proteínas u otras moléculas que expresa el tumor, y que le permitirán a su médico tratante establecer con mayor precisión cuál es la mejor terapia para su tipo de cáncer en particular.</p>
                ) : index === 1 ? (
                  <div>
                    <p>Puedes consultar los resultados de exámenes por los siguientes medios:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Correo electrónico registrado en la solicitud.</li>
                      <li>A través de nuestra página Web en Consulta de Resultados (Clic)</li>
                    </ul>
                  </div>
                ) : index === 2 ? (
                  <div>
                    <p>Documentos requeridos para el estudio</p>
                    <ol className="list-decimal pl-6 mt-2">
                      <li>Orden Médica del especialista que solicita el estudio o formato Solicitud de estudios FICMAC</li>
                      <li>Formulario – Datos del Paciente (Link Solicitud de estudios)</li>
                      <li>Fotocopia del documento de identidad</li>
                      <li>Consentimiento Informado de FICMAC (firmado por el paciente, acudiente del  paciente o medico tratante) Descárguelo en la pagina web www.ficmac.org</li>
                      <li>Voucher o Bono si fue emitido por su médico tratante.</li>
                      <li>Resumen de Historia clínica</li>
                      <li>Informe de Patología de la Biopsia de Tejido (Para examen en Biopsia solida)</li>
                    </ol>
                  </div>
                ) : index === 3 ? (
                  <div>
                    <p>Para reclamar los bloques de parafina y/o láminas histológicas en FICMAC, es necesario que el paciente se encuentre en la institución en el momento de la entrega de los mismos.</p>
                    <p className="mt-2">Puede hacer la solicitud por los siguientes medios:</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold">1. Solicitud por correo electrónico:</h4>
                      <p>Para reclamar su material bloques de parafina y/o láminas histológicas debe enviar un correo electrónico a psp@ficmac.org haciendo la solicitud de la devolución y debe enviar la siguiente información:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Nombres y apellidos completos</li>
                        <li>Número del documento de identificación del paciente</li>
                        <li>Ciudad y dirección para enviar el material</li>
                        <li>Persona de contacto</li>
                        <li>Numero de contacto</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold">2. Solicitud presencial:</h4>
                      <p>Si es de manera presencial debe comunicarse un día antes a nuestra línea de atención 312 5425 688 o al teléfono fijo 805 1809, una gestora de atención a pacientes le informará los pasos para reclamar su material (bloques y/o láminas de histológicas).</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold">3. Solicitud página web:</h4>
                      <p>Formulario de solicitud:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Nombres y apellidos completos del paciente</li>
                        <li>Número del documento de identificación del paciente</li>
                        <li>Ciudad y dirección para enviar el material</li>
                        <li>Persona de contacto</li>
                        <li>Número de contacto</li>
                      </ul>
                    </div>
                  </div>
                ) : index === 4 ? (
                  <div>
                    <p>Para llegar a FICMAC, puede utilizar los siguientes medios de transporte:</p>
                    <div className="mt-2">
                      <p className="font-semibold">Dirección:</p>
                      <p>Calle 116 No. 9-72  Consultorio 718-719</p>
                      <p>Edificio Global Medical Center</p>
                      <div className="mt-2">
                        <p className="font-semibold">Contacto:</p>
                        <p>(1) 379 99 60 Ext 1000</p>
                        <p>312 542 56 88</p>
                        <p>Correo: psp@ficmac.org</p>
                      </div>
                    </div>
                  </div>
                ) : index === 5 ? (
                  <div>
                    <p>No. El médico que solicitó los exámenes está facultado legalmente para interpretar los resultados de los exámenes.</p>
                  </div>
                ) : index === 6 ? (
                  <div>
                    <p>Se requieren solamente los siguientes 4 documentos:</p>
                    <ol className="list-decimal pl-6 mt-2">
                      <li>Orden médica</li>
                      <li>Consentimiento informado, firmado por el paciente</li>
                      <li>Informe de patología de las biopsias que se analizarán (o resumen de historia clínica)</li>
                      <li>Copia del documento de identidad del paciente</li>
                    </ol>
                  </div>
                ) : index === 7 ? (
                  <div>
                    <ul className="list-disc pl-6">
                      <li>Si el examen es en biopsia sólida, se requiere el tejido embebido en parafina (se conocen como "bloques de parafina")</li>
                      <li>Si el examen es en biopsia líquida, se requiere una muestra de sangre</li>
                      <li>Si el examen es para análisis masivo de genes, se requiere una muestra de sangre</li>
                    </ul>
                  </div>
                ) : index === 8 ? (
                  <div>
                    <ul className="list-disc pl-6">
                      <li>Recibir un trato digno sin discriminación alguna.</li>
                      <li>Ser orientado de la mejor manera sobre el procedimiento o prueba que se realizará de acuerdo con el tipo de diagnóstico que se requiere.</li>
                      <li>Ser informado sobre los costos de su atención en salud. Revisar y recibir explicaciones acerca de los costos de los servicios.</li>
                      <li>Que se mantenga estricta reserva y confidencialidad sobre su historia clínica y solo con su autorización pueda ser entregada a terceros.</li>
                      <li>Ser incluido en estudios de investigación sobre cáncer, sólo si lo autoriza.</li>
                      <li>Obtener información necesaria, clara y oportuna del procedimiento, técnicas y tiempos de la prueba.</li>
                      <li>Recibir información sobre dónde y cómo puede presentar peticiones, quejas o reclamos sobre la atención o servicio recibido.</li>
                      <li>Expresar su satisfacción o percepción del servicio recibido (A través de SIAU-encuesta de satisfacción).</li>
                      <li>Solicitar explicación o aclaración en los resultados o diagnóstico entregado (En el área de conocimiento de biología molecular).</li>
                      <li>Que su muestra sea procesada en condiciones de higiene y seguridad.</li>
                    </ul>
                  </div>
                ) : index === 9 ? (
                  <div>
                    <ul className="list-disc pl-6">
                      <li>Velar por el cuidado integral de su salud y la comunidad, así como por el cumplimiento de los procesos internos de FICMAC.</li>
                      <li>Cumplir de manera responsable con las recomendaciones para el servicio de los profesionales de salud y gestores de apoyo a pacientes que lo atiendan.</li>
                      <li>Brindar un trato cortés, digno y respetuoso al personal que lo atiende y a los demás usuarios.</li>
                      <li>Cumplir las normas y actuar de buena fe frente a FICMAC.</li>
                      <li>Realizar los pagos respectivos de manera oportuna para asegurar el desarrollo de las pruebas en los tiempos definidos.</li>
                      <li>Suministrar información veraz, clara y completa sobre su estado de salud y otros exámenes relacionados que se le hayan realizado.</li>
                      <li>Brindar la información requerida para la atención médica.</li>
                      <li>Suministrar los datos correctos, actualizados y completos de correo electrónico y número telefónico de contacto para la notificación del resultado.</li>
                      <li>Llevar y entregar copia y original del documento de identificación que lo acrediten como paciente.</li>
                      <li>Enviar o realizar la entrega de muestras de acuerdo a lo solicitado y de manera cumplida.</li>
                      <li>Utilizar los medios de comunicación definidos en FICMAC y la comunicación con el gestor de atención a pacientes para solicitar información, orientación, hacer sugerencias y reclamos.</li>
                      <li>Realizar la firma del consentimiento informado para el procesamiento y análisis de muestras.</li>
                    </ul>
                  </div>
                ) : ""}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
