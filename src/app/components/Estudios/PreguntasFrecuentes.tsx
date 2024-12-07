'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const preguntas = [
    "1.¿En qué consisten estas pruebas?",
    "2.¿Cómo consultar los resultados de mi examen?",
    "3.¿Qué debo llevar para mi estudio?",
    "4.¿Cómo reclamar los bloques de parafina y/o láminas histológicas en FICMAC?",
    "5.¿Cómo hago para llegar a FICMAC?",
    "6.¿Ustedes me pueden decir la interpretación de los resultados de mis exámenes?",
    "7.¿Qué documentos debo entregar para que me realicen el examen que solicitó mi médico?",
    "8.¿Qué muestras debo llevar para hacer los exámenes que pidió mi médico?",
    "9.¿Cuánto demoran los resultados de mis exámenes?",
    "10.¿Dónde reclamo los resultados de mis exámenes?",
    "11.¿Ustedes me pueden decir cómo salieron mis exámenes?",
    "12.¿Cómo solicitar mi historia clínica?",
    "13.¿Cuáles son los horarios de atención para cada trámite?",
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
                      <li>Si el examen es en biopsia sólida, se requiere el tejido embebido en parafina (se conocen como bloques de parafina)</li>
                      <li>Si el examen es en biopsia líquida, se requiere una muestra de sangre</li>
                      <li>Si el examen es para análisis masivo de genes, se requiere una muestra de sangre</li>
                    </ul>
                  </div>
                ) : index === 8 ? (
                  <div>
                    <p>Dependiendo del examen solicitado, los tiempos de reporte oscilan en promedio entre 3 días hábiles a 12 días hábiles, contados a partir del día siguiente a la recepción de la muestra.</p>
                  </div>
                ) : index === 9 ? (
                  <div>
                    <p>Los resultados de los exámenes pueden ser obtenidos en los siguientes puntos de atención:</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold">Solicitud Virtual</h4>
                      <p>Correos electrónicos laboratorio@ficmac.org o psp@ficmac.org, con el número de cédula del paciente.</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold">Solicitud Presencial</h4>
                      <p>Comunicarse directamente con el laboratorio FICMAC con antelación para confirmar si el reporte ya está listo.</p>
                    </div>
                  </div>
                ) : index === 10 ? (
                  <div>
                    <p>No. El médico que solicitó los exámenes está facultado legalmente para emitir un concepto o interpretar los resultados de los exámenes.</p>
                  </div>
                ) : index === 11 ? (
                  <div>
                    <p>Para solicitar copia de la Historia Clínica diligenciar el siguiente formulario:</p>
                    
                    <a href="https://mt1a.jktic.com/ficmac/system/custom/jk/jkondor/jkd_documents/createrg?iContent=false&id=2280f101-0d81-bcef-ef39-618c101cd266&defaults={%22DEFAULTS%22:%22def%22}" 
                       className="text-blue-500 hover:text-blue-700 underline block mt-2 mb-4">
                      Formulario de solicitud
                    </a>

                    <p className="font-semibold mt-4">Donde se debe adjuntar:</p>
                    
                    <div className="mt-2">
                      <p className="font-semibold">Si la solicitud la realiza el paciente:</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Copia de Documento de Identificación del paciente.</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <p className="font-semibold">Si la solicitud la realiza Familiar, Tutor legal y/o Cuidador:</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li>Autorización emitida por escrito por el usuario o certificado médico que evidencie el estado de salud físico o mental del paciente (Aplica para pacientes mayores de edad).</li>
                        <li>Copia de Documento de Identificación del paciente.</li>
                        <li>Copia de Documento de Identificación del tercero.</li>
                      </ul>
                    </div>

                    <p className="mt-4">Todas las solicitudes se verifican con el paciente, el tiempo de respuesta a estas solicitudes son de 2 a 5 días hábiles previo cumplimiento de requisitos.</p>
                  </div>
                ) : index === 12 ? (
                  <div>
                    <p className="font-semibold">Horario de atención al público</p>
                    <p className="mt-2">Lunes a Viernes 7:30am a 4:30 pm</p>
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

export default PreguntasFrecuentes;
