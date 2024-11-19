'use client'

import Header from '../components/Header/Index'
import Footer from '../components/Footer/'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const questions = [
    {
      question: '¿En qué consisten estas pruebas?',
      answer: 'Por medio de biopsias (sólidas o líquidas) se puede obtener ADN, ARN, proteínas u otras moléculas que expresa el tumor, y que le permitirán a su médico tratante establecer con mayor precisión cuál es la mejor terapia para su tipo de cáncer en particular.'
    },
    {
      question: '¿Cómo consultar los resultados de mi examen?',
      answer: 'Puede consultar los resultados de su examen en línea a través de nuestro portal de pacientes o visitando nuestra oficina con su identificación.'
    },
    {
      question: '¿Qué debo llevar para mi estudio?',
      answer: 'Debe llevar su identificación, tarjeta de seguro (si aplica), y cualquier documentación médica relevante. Si su examen requiere preparación especial, se le informará con anticipación.'
    },
    {
      question: '¿Cómo reclamar los bloques de parafina y/o láminas histológicas en FICMAC?',
      answer: 'Para reclamar los bloques de parafina y/o láminas histológicas, debe presentarse en nuestra oficina con su identificación y el comprobante de solicitud. El proceso generalmente toma entre 24 a 48 horas hábiles.'
    },
    {
      question: '¿Cómo hago para llegar a FICMAC?',
      answer: 'Nuestra sede principal está ubicada en [dirección exacta]. Puede llegar en transporte público tomando las rutas [X, Y, Z] o en automóvil siguiendo [instrucciones específicas]. También ofrecemos un servicio de mapas interactivo en nuestra página web.'
    },
    {
      question: '¿Ustedes me pueden decir la interpretación de los resultados de mis exámenes?',
      answer: 'Por razones éticas y profesionales, la interpretación de los resultados debe ser realizada por su médico tratante. Nosotros proporcionamos los resultados técnicos, pero su médico es quien tiene el contexto completo de su historial médico para interpretarlos adecuadamente.'
    },
    {
      question: '¿Qué documentos debo entregar para que me realicen el examen que solicitó mi médico?',
      answer: 'Necesita traer la orden médica original, su identificación oficial y documentos del seguro si aplica. En algunos casos, puede ser necesario traer exámenes previos relacionados.'
    },
    {
      question: '¿Qué muestras debo llevar para hacer los exámenes que pidió mi médico?',
      answer: 'Las muestras requeridas dependerán del tipo de examen solicitado. Su médico o nuestro personal le informarán sobre las muestras específicas necesarias y cómo recolectarlas adecuadamente. En algunos casos, la toma de muestras se realiza en nuestras instalaciones.'
    },
    {
      question: '¿Cuánto demoran los resultados de mis exámenes?',
      answer: 'El tiempo de entrega varía según el tipo de examen. Generalmente, los resultados están disponibles entre 24 a 72 horas para exámenes de rutina. Exámenes más especializados pueden tomar hasta 2 semanas. Le informaremos el tiempo estimado al momento de realizar el examen.'
    },
    {
      question: '¿Dónde reclamo los resultados de mis exámenes?',
      answer: 'Puede reclamar sus resultados en nuestra oficina principal presentando su identificación. También ofrecemos la opción de acceder a sus resultados en línea a través de nuestro portal seguro de pacientes.'
    },
    {
      question: '¿Ustedes me pueden decir cómo salieron mis exámenes?',
      answer: 'Por política de privacidad y ética médica, los resultados detallados solo se entregan al paciente o a quien este autorice por escrito. Sin embargo, nuestro personal puede orientarle sobre el proceso de obtención e interpretación de sus resultados.'
    },
    {
      question: '¿Cómo solicitar mi historia clínica?',
      answer: 'Puede solicitar su historia clínica personalmente en nuestra oficina principal, presentando su identificación oficial. Por razones de seguridad, este trámite debe realizarse de manera presencial. El tiempo de entrega es generalmente de 3 a 5 días hábiles.'
    },
    {
      question: '¿Cuáles son los horarios de atención para cada trámite?',
      answer: 'Nuestros horarios varían según el trámite. Generalmente, atendemos de lunes a viernes de 7:00 AM a 5:00 PM, y sábados de 8:00 AM a 12:00 PM. Para trámites específicos, le recomendamos consultar en nuestra recepción o en nuestra página web para obtener información actualizada.'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="relative w-full h-screen mt-[76px]">
        <Image
          src="/assets/PreguntasFrecuentes.jpg"
          alt="Preguntas Frecuentes"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center text-right pr-8">
          <h1 className="text-9xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-gray-900">
            <span className="block">Preguntas</span>
            <span className="block">frecuentes</span>
          </h1>
        </div>
      </div>
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="group">
              <button
                className={`w-full text-left py-3 px-4 flex items-center justify-between transition-colors rounded-md ${
                  openQuestion === index ? 'bg-[#4169E1] text-white' : 'hover:text-[#4169E1]'
                }`}
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">●</span>
                  <span className="text-lg">{item.question}</span>
                </div>
                <span className="text-pink-500">
                  {openQuestion === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openQuestion === index && (
                <div className="mt-1 py-4 px-6 bg-[#E6E9F5] rounded-md">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#4169E1] pb-2">
              Derechos y deberes de pacientes
            </h2>
            <div className="space-y-2">
              <div className="group">
                <button 
                  className={`w-full text-left py-3 px-4 flex items-center justify-between rounded-md ${
                    openQuestion === 13 ? 'bg-[#4169E1] text-white' : 'hover:text-[#4169E1]'
                  }`}
                  onClick={() => setOpenQuestion(openQuestion === 13 ? null : 13)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">●</span>
                    <span className="text-lg">Derechos de los pacientes</span>
                  </div>
                  <span className="text-pink-500">
                    {openQuestion === 13 ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openQuestion === 13 && (
                  <div className="mt-1 py-4 px-6 bg-[#E6E9F5] rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Recibir atención médica de calidad</li>
                      <li>Ser tratado con respeto y dignidad</li>
                      <li>Confidencialidad de su información médica</li>
                      <li>Recibir información clara sobre su diagnóstico y tratamiento</li>
                      <li>Tomar decisiones informadas sobre su atención médica</li>
                      <li>Acceso a su historial médico</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="group">
                <button 
                  className={`w-full text-left py-3 px-4 flex items-center justify-between rounded-md ${
                    openQuestion === 14 ? 'bg-[#4169E1] text-white' : 'hover:text-[#4169E1]'
                  }`}
                  onClick={() => setOpenQuestion(openQuestion === 14 ? null : 14)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">●</span>
                    <span className="text-lg">Deberes de los pacientes</span>
                  </div>
                  <span className="text-pink-500">
                    {openQuestion === 14 ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openQuestion === 14 && (
                  <div className="mt-1 py-4 px-6 bg-[#E6E9F5] rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Proporcionar información precisa sobre su salud</li>
                      <li>Seguir el plan de tratamiento acordado</li>
                      <li>Respetar al personal médico y a otros pacientes</li>
                      <li>Cumplir con las políticas y procedimientos de la institución</li>
                      <li>Informar sobre cambios en su condición de salud</li>
                      <li>Asumir responsabilidad financiera por los servicios recibidos</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4169E1] pb-2">
              Derechos y deberes de médicos
            </h2>
            <div className="space-y-2">
              <div className="group">
                <button 
                  className={`w-full text-left py-3 px-4 flex items-center justify-between rounded-md ${
                    openQuestion === 15 ? 'bg-[#4169E1] text-white' : 'hover:text-[#4169E1]'
                  }`}
                  onClick={() => setOpenQuestion(openQuestion === 15 ? null : 15)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">●</span>
                    <span className="text-lg">Derechos de los médicos</span>
                  </div>
                  <span className="text-pink-500">
                    {openQuestion === 15 ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openQuestion === 15 && (
                  <div className="mt-1 py-4 px-6 bg-[#E6E9F5] rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Ejercer su profesión con autonomía</li>
                      <li>Recibir un trato respetuoso de pacientes y colegas</li>
                      <li>Acceso a recursos necesarios para brindar atención de calidad</li>
                      <li>Continuar su formación profesional</li>
                      <li>Negarse a realizar procedimientos que vayan en contra de su ética profesional</li>
                      <li>Protección legal en el ejercicio de su profesión</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="group">
                <button 
                  className={`w-full text-left py-3 px-4 flex items-center justify-between rounded-md ${
                    openQuestion === 16 ? 'bg-[#4169E1] text-white' : 'hover:text-[#4169E1]'
                  }`}
                  onClick={() => setOpenQuestion(openQuestion === 16 ? null : 16)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">●</span>
                    <span className="text-lg">Deberes de los médicos</span>
                  </div>
                  <span className="text-pink-500">
                    {openQuestion === 16 ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openQuestion === 16 && (
                  <div className="mt-1 py-4 px-6 bg-[#E6E9F5] rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Proporcionar atención médica de alta calidad</li>
                      <li>Mantener la confidencialidad del paciente</li>
                      <li>Actualizar constantemente sus conocimientos médicos</li>
                      <li>Respetar los derechos de los pacientes</li>
                      <li>Informar adecuadamente a los pacientes sobre su condición y opciones de tratamiento</li>
                      <li>Colaborar con otros profesionales de la salud cuando sea necesario</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}