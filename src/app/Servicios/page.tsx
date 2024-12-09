// Este archivo contiene la implementación de la página de servicios médicos.

'use client'
import Footer from "../components/Footer/Footer" // Importa el componente de pie de página.
import Header from "../components/Header/Index" // Importa el componente de encabezado.
import Image from "next/image"; // Importa el componente de imagen de Next.js.
import { motion } from "framer-motion"; // Importa la biblioteca de animaciones Framer Motion.
import { useState } from "react"; // Importa el hook useState de React.

// Define la interfaz para los servicios médicos.
interface Service {
  title: string; // Título del servicio.
  resumen: string; // Resumen del servicio.
  description: string; // Descripción detallada del servicio.
  images: string[]; // Array de imágenes relacionadas con el servicio.
  icon: string; // Icono del servicio.
  tratamientos?: string[]; // Opcional: tratamientos disponibles.
  contraindicaciones?: string; // Opcional: contraindicaciones del servicio.
  testimonios?: Array<{ autor: string, texto: string }>; // Opcional: testimonios de pacientes.
}

// Array de servicios médicos disponibles.
const services: Service[] = [
  { 
    title: 'Cáncer de cabeza y cuello',
    resumen: 'Grupo de cánceres que afecta diversas partes de la cabeza y el cuello',
    description: 'El cáncer de cabeza y cuello incluye tumores que se desarrollan en áreas como la boca, garganta, nariz y glándulas salivales. Estos cánceres suelen estar relacionados con el consumo de tabaco, alcohol y la infección por el virus del papiloma humano (VPH). El tratamiento incluye cirugía, radioterapia y quimioterapia, dependiendo de la localización y el estadio del cáncer.\n\nMedicamentos:\nLos medicamentos para el cáncer de cabeza y cuello incluyen quimioterapias como bleomicina, docetaxel y metotrexato, que frenan el crecimiento de las células cancerosas. Las inmunoterapias como nivolumab, pembrolizumab y toripalimab ayudan al sistema inmunológico a atacar el cáncer. Cetuximab, una terapia dirigida, bloquea señales que hacen crecer el tumor. Hidroxiurea puede reducir el tamaño del tumor y mejorar otros tratamientos.',
    images: ['/assets/cuello2.jpg','/assets/cabezaMP.png','/assets/cabezaA.jpg'],
    icon: '/assets/icons/Icon-1.png'
  },
  { title: 'Germinal', 
    resumen: 'Cáncer que se desarrolla a partir de células germinales.', 
    description: 'El cáncer germinal se origina en las células que forman los óvulos en mujeres o los espermatozoides en hombres. Se presenta comúnmente en los testículos o los ovarios, aunque también puede ocurrir en otras partes del cuerpo. Los tratamientos incluyen quimioterapia, radioterapia y cirugía, con altas tasas de éxito en estadios iniciales.\n\nMedicamentos:\nLos medicamentos para el cáncer germinal incluyen quimioterapias como el cisplatino, etopósido y bleomicina, que ayudan a eliminar las células cancerígenas. Otros medicamentos como la vinblastina y la ifosfamida también se utilizan para detener el crecimiento de los tumores. Además, se puede emplear la cirugía y la radioterapia como parte del tratamiento para eliminar o reducir los tumores.', 
    images: ['/assets/germinal2.jpg','/assets/germinalMP.jpg','/assets/germinalA.jpg'],
    icon: '/assets/icons/Icon-2.png'
  },
  { title: 'Cáncer de colon', 
    resumen: 'Cáncer que afecta el colon o el recto del sistema digestivo', 
    description: 'El cáncer de colon es una enfermedad en la que las células malignas se desarrollan en el revestimiento del colon o el recto. Los síntomas incluyen cambios en los hábitos intestinales, sangrado rectal y pérdida de peso inexplicada. Las pruebas de detección, como la colonoscopía, son esenciales para el diagnóstico temprano. El tratamiento incluye cirugía, quimioterapia y en algunos casos, terapia dirigida.\n\nMedicamentos:\nLos medicamentos para el cáncer de colon incluyen quimioterapias como fluorouracilo, capecitabina y oxaliplatino, que frenan el crecimiento del cáncer. Terapias dirigidas como bevacizumab, cetuximab y panitumumab bloquean señales o vasos sanguíneos que ayudan al tumor a crecer. Inmunoterapias como pembrolizumab y nivolumab fortalecen el sistema inmunológico para combatir el cáncer.', 
    images: ['/assets/colon1.jpg','/assets/colonMP.jpg','/assets/colon2.jpg'],
    icon: '/assets/icons/Icon-3.png'
  },
  { title: 'Cáncer de ovario', 
    resumen: 'Cáncer que afecta los ovarios en el sistema reproductivo femenino', 
    description: 'El cáncer de ovario es una de las principales causas de muerte por cáncer en mujeres debido a que se detecta a menudo en etapas avanzadas. Los síntomas incluyen hinchazón abdominal, dolor pélvico y dificultad para comer. Los tratamientos incluyen cirugía para extirpar los ovarios afectados y quimioterapia para reducir el tamaño del tumor.\n\nMedicamentos:\nLos medicamentos para el cáncer de ovario incluyen quimioterapias como carboplatino, cisplatino, paclitaxel y doxorrubicina, que destruyen las células cancerosas o frenan su crecimiento. Bevacizumab es una terapia dirigida que bloquea la formación de vasos sanguíneos que alimentan al tumor. Los inhibidores de PARP como olaparib, niraparib y rucaparib ayudan a reparar el daño en el ADN de las células cancerosas, lo que lleva a su destrucción.', 
    images: ['/assets/ovario2.png','/assets/ovarioMP.jpg', '/assets/ovarioA.jpg'],
    icon: '/assets/icons/Icon-4.png'
  },
  { title: 'Cáncer de pulmón', 
    resumen: 'Cáncer que afecta los pulmones, a menudo relacionado con el tabaquismo', 
    description: 'El cáncer de pulmón es una de las principales causas de muerte por cáncer en todo el mundo. Se clasifica en dos tipos principales: cáncer de pulmón de células pequeñas y de células no pequeñas. Los síntomas incluyen tos persistente, dificultad para respirar y dolor torácico. El tratamiento puede incluir cirugía, quimioterapia, radioterapia y terapias dirigidas.\n\nMedicamentos:\nLos medicamentos para el cáncer de pulmón incluyen quimioterapias como paclitaxel y gemcitabina, que detienen el crecimiento del cáncer. Las terapias dirigidas como osimertinib y gefitinib bloquean proteínas que ayudan al tumor a crecer. Las inmunoterapias como pembrolizumab y nivolumab refuerzan el sistema inmunológico para atacar el cáncer. Bevacizumab impide que el tumor forme nuevos vasos sanguíneos para alimentarse.', 
    images: ['/assets/pulmon1.png','/assets/pulmonMP.jpg','/assets/pulmonA.jpg'],
    icon: '/assets/icons/Icon-5.png'
  },
  { title: 'Melanoma', 
    resumen: 'El tipo más agresivo de cáncer de piel', 
    description: 'El melanoma se desarrolla en los melanocitos, las células que producen pigmento en la piel. Es causado principalmente por la exposición excesiva a los rayos UV del sol o camas de bronceado. Puede propagarse rápidamente a otras partes del cuerpo si no se detecta temprano. Los tratamientos incluyen cirugía, inmunoterapia y terapias dirigidas.\n\nMedicamentos:\nLos medicamentos para el melanoma incluyen tratamientos como pembrolizumab y nivolumab, que ayudan al cuerpo a combatir el cáncer. Otros, como dabrafenib y vemurafenib, bloquean el crecimiento del melanoma. También se usan medicamentos como aldesleukin para activar el sistema inmunológico. Algunos tratamientos usan virus para atacar el cáncer, y otros detienen la división de las células cancerosas.', 
    images: ['/assets/melanoma1.png','/assets/melanomaMP.jpg','/assets/melanomaA.jpg'],
    icon: '/assets/icons/Icon-6.png'
  },
  { title: 'Tumores de sistema gastrointestinal', 
    resumen: 'Tumores que afectan órganos del sistema digestivo', 
    description: 'Los tumores del sistema gastrointestinal incluyen cánceres que afectan el estómago, el hígado, el páncreas, el esófago y los intestinos. Los síntomas varían según el órgano afectado, pero pueden incluir dolor abdominal, pérdida de peso y dificultad para tragar. El tratamiento suele implicar una combinación de cirugía, quimioterapia y radioterapia.\n\nMedicamentos:\nLos medicamentos para los tumores de estroma gastrointestinal incluyen imatinib y avapritinib, que bloquean el crecimiento de las células tumorales. Otros medicamentos, como ripretinib y regorafenib, ayudan a frenar el crecimiento de los tumores. También se usa sunitinib para atacar las células tumorales y reducir su crecimiento.', 
    images: ['/assets/gastro1.jpg', '/assets/gastroMP.jpg','/assets/gastroA.jpg'],
    icon: '/assets/icons/Icon-7.png'
  },
  { title: 'Cáncer de Seno', 
    resumen: 'Cáncer que se desarrolla en las células del tejido mamario', 
    description: 'El cáncer de seno es el tipo de cáncer más común en mujeres a nivel mundial. Puede presentarse como un bulto en el seno, cambios en la forma o tamaño del seno o secreción anormal del pezón. El tratamiento incluye cirugía, quimioterapia, radioterapia y terapias hormonales dependiendo del tipo y estadio del cáncer.\n\nMedicamentos:\nLos medicamentos para el cáncer de seno incluyen quimioterapias como paclitaxel y capecitabina, que eliminan las células cancerosas. Algunos medicamentos como trastuzumab y pertuzumab atacan proteínas en el tumor. Otros, como tamoxifeno y letrozol, reducen las hormonas que alimentan el cáncer. Además, tratamientos como olaparib y pembrolizumab ayudan al sistema inmunológico a luchar contra el cáncer.', 
    images: ['/assets/seno1.png','/assets/senoMP.jpeg','/assets/senoA.jpg'],
    icon: '/assets/icons/Icon-8.png'
  },
  { title: 'Parálisis NGS', 
    resumen: 'Una condición que afecta el movimiento voluntario de ciertas áreas del cuerpo', 
    description: 'La parálisis NGS (nombre genérico supuesto) describe una condición donde los músculos pierden su capacidad de movimiento debido a un daño en los nervios o el cerebro. Puede ser causada por traumas, infecciones o enfermedades neurodegenerativas. El tratamiento se enfoca en la rehabilitación y, en algunos casos, intervenciones quirúrgicas.\n\nMedicamentos:\nPara la parálisis del nervio facial (o parálisis de Bell), los tratamientos incluyen medicamentos como los corticosteroides, como la prednisona, que ayudan a reducir la inflamación y mejorar la función del nervio. En algunos casos, se pueden usar analgésicos para aliviar el dolor, así como medicamentos antivirales si se sospecha de una infección viral. La fisioterapia facial también es útil para recuperar el movimiento de los músculos faciales.', 
    images: ['/assets/paralisis1.jpg','/assets/ngsMP.jpg','/assets/ngsA.jpeg'],
    icon: '/assets/icons/Icon-9.png'
  },
  { title: 'Tumores del sistema nervioso central', 
    resumen: 'Tumores que se desarrollan en el cerebro o la médula espinal', 
    description: 'Estos tumores pueden ser benignos o malignos y afectan funciones esenciales como el pensamiento, la memoria y el movimiento. Los síntomas dependen de la ubicación del tumor e incluyen dolores de cabeza persistentes, convulsiones y problemas de equilibrio. Los tratamientos incluyen cirugía, radioterapia y quimioterapia.\n\nMedicamentos:\nLos medicamentos para los tumores del sistema nervioso central incluyen quimioterapia como la temozolomida, que destruye las células tumorales. El bevacizumab bloquea el crecimiento de nuevos vasos sanguíneos que alimentan al tumor. Otros medicamentos, como el everolimus, detienen el crecimiento de las células tumorales. Los corticosteroides, como la dexametasona, ayudan a reducir la inflamación y aliviar los síntomas.', 
    images: ['/assets/nervioso1.jpg','/assets/sncMP.jpg','/assets/sncA.jpg'],
    icon: '/assets/icons/Icon-10.png'
  },
];

// Componente modal para mostrar detalles del servicio seleccionado.
function ServiceModal({ service, isOpen, onClose }: { 
  service: Service | null, // Servicio seleccionado o null.
  isOpen: boolean, // Estado de apertura del modal.
  onClose: () => void // Función para cerrar el modal.
}) {
  // Si el modal no está abierto o no hay servicio, no renderiza nada.
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} // Animación inicial.
        animate={{ opacity: 1, scale: 1 }} // Animación al abrir.
        exit={{ opacity: 0, scale: 0.8 }} // Animación al cerrar.
        className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pt-2 pb-4 border-b">
          <h3 className="text-2xl font-bold text-[#547EED]">{service.title}</h3> {/*Título del servicio.*/}
          <button 
            onClick={onClose} // Cierra el modal al hacer clic.
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-center pb-4 overflow-x-auto snap-x snap-mandatory">
            <Image
              src={service.images[0]} // Muestra la primera imagen del servicio.
              alt={`${service.title} imagen 1`}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-[#547EED] mb-2">Resumen</h4>
            <p className="text-gray-700">{service.resumen}</p> {/* Muestra el resumen del servicio. */}
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#547EED]">Descripción detallada</h4>
            <div className="text-gray-600 text-justify whitespace-pre-line">
              {service.description} {/* // Muestra la descripción detallada del servicio. */}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-[#547EED] mb-4">Medicamentos relacionados</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={service.images[1]} // Muestra la segunda imagen del servicio.
                      alt={`${service.title} imagen 2`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-[#EB356E] mb-2">Medicamento Principal</h5>
                  <p className="text-sm text-gray-600">
                    Tratamiento primario recomendado para esta condición.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={service.images[2]} // Muestra la tercera imagen del servicio.
                      alt={`${service.title} imagen 3`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h5 className="font-semibold text-[#EB356E] mb-2">Tratamiento</h5>
                  <p className="text-sm text-gray-600">
                    Tratamiento de apoyo para mejorar la eficacia del tratamiento principal.
                  </p>
                </div>
              </div>
            </div>

            {service.tratamientos && ( // Si hay tratamientos disponibles, los muestra.
              <div className="mt-6">
                <h4 className="font-bold text-lg text-[#547EED] mb-2">Tratamientos disponibles</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {service.tratamientos.map((tratamiento, index) => (
                    <li key={index} className="text-gray-600">{tratamiento}</li> // Muestra cada tratamiento.
                  ))}
                </ul>
              </div>
            )}

            {service.contraindicaciones && ( // Si hay contraindicaciones, las muestra.
              <div className="bg-red-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-lg text-red-600 mb-2">Contraindicaciones</h4>
                <p className="text-gray-700">{service.contraindicaciones}</p>
              </div>
            )}

            {service.testimonios && service.testimonios.length > 0 && ( // Si hay testimonios, los muestra.
              <div className="mt-6">
                <h4 className="font-bold text-lg text-[#547EED] mb-4">Testimonios</h4>
                <div className="space-y-4">
                  {service.testimonios.map((testimonio, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 italic">&quot;{testimonio.texto}&quot;</p>
                      <p className="text-gray-500 mt-2">- {testimonio.autor}</p> {/* // Muestra el autor del testimonio. */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg text-[#EB356E] mb-2">Información adicional</h4>
            <p className="text-gray-700">
              Para más información sobre este tratamiento o para agendar una cita, 
              por favor contacte a nuestro equipo médico.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Componente principal que renderiza los servicios médicos.
export default function MedicalServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Estado para el servicio seleccionado.

  return (
    <>
    <Header /> {/* // Renderiza el encabezado. */}
    <div className="max-w-7xl mx-auto px-4 mt-16">
      {/* Sección Hero */}
      <motion.section 
        initial={{ opacity: 0 }} // Animación inicial.
        animate={{ opacity: 1 }} // Animación al abrir.
        transition={{ duration: 1 }} // Duración de la animación.
        className="relative h-[400px] mb-16"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/Nuestros-S.png" // Imagen de fondo.
            alt="Servicios médicos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(229, 241, 248, 0.8)' }} />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Nuestro Servicios
          </h1>
        </div>
      </motion.section>
  
      {/* Sección de Preguntas */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }} // Animación inicial.
        whileInView={{ y: 0, opacity: 1 }} // Animación al entrar en vista.
        viewport={{ once: true }} // Solo se ejecuta una vez.
        transition={{ duration: 0.8 }} // Duración de la animación.
        className="mb-24"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-[#547EED] leading-tight text-center md:text-left">
              ¿Preferirías quedarte en casa que ir a un centro de atención médica?
            </h2>
          </div>
          <div>
            <p className="text-[#EB356E] text-lg">
              Cada día, miles de personas luchan contra el cáncer, un reto que requiere no solo tratamientos médicos, sino también apoyo, esperanza y solidaridad. La detección temprana, el acceso a tratamientos y el acompañamiento emocional son vitales en esta batalla. Juntos, podemos crear conciencia, promover la prevención y brindar el respaldo que cada persona merece en su camino hacia la recuperación. Que esta lucha nos inspire a construir un futuro con más salud, más ciencia y más esperanza para vencer al cáncer
            </p>
          </div>
        </div>
      </motion.section>
  
      {/* Sección de Servicios */}
      <motion.section className="mb-24">
        <motion.div 
          initial={{ y: 30, opacity: 0 }} // Animación inicial.
          whileInView={{ y: 0, opacity: 1 }} // Animación al entrar en vista.
          viewport={{ once: true }} // Solo se ejecuta una vez.
          className="text-center mb-16"
        >
          <h3 className="text-xl font-bold text-[#EB356E] mb-4">Patologías</h3>
          <h2 className="text-4xl font-bold text-[#547EED]">
            Nuestros servicios de salud
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.slice(0, 8).map((service, index) => ( // Muestra los primeros 8 servicios.
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }} // Animación inicial.
              whileInView={{ opacity: 1, scale: 1 }} // Animación al entrar en vista.
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} // Efecto al pasar el mouse.
              viewport={{ once: true }} // Solo se ejecuta una vez.
              transition={{ duration: 0.3, delay: index * 0.1 }} // Duración y retraso de la animación.
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#547EED]"
            >
              <motion.div 
                whileHover={{ rotate: 180 }} // Efecto de rotación al pasar el mouse.
                transition={{ duration: 0.3 }} // Duración de la animación.
                className="w-16 h-16 mb-6"
              >
                <Image
                  src={service.icon} // Muestra el icono del servicio.
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4> {/* // Título del servicio. */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.resumen} {/* // Resumen del servicio. */}
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }} // Efecto al pasar el mouse.
                whileTap={{ scale: 0.95 }} // Efecto al hacer clic.
                onClick={() => setSelectedService(service)} // Establece el servicio seleccionado.
                className="px-4 py-2 rounded-full bg-[#547EED] text-white text-sm font-bold hover:bg-[#3b5bb9] transition-colors"
              >
                Leer más // Botón para leer más sobre el servicio.
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
          {services.slice(8).map((service, index) => ( // Muestra los servicios restantes.
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }} // Animación inicial.
              whileInView={{ opacity: 1, scale: 1 }} // Animación al entrar en vista.
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} // Efecto al pasar el mouse.
              viewport={{ once: true }} // Solo se ejecuta una vez.
              transition={{ duration: 0.3, delay: index * 0.1 }} // Duración y retraso de la animación.
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#547EED]"
            >
              <motion.div 
                whileHover={{ rotate: 180 }} // Efecto de rotación al pasar el mouse.
                transition={{ duration: 0.3 }} // Duración de la animación.
                className="w-16 h-16 mb-6"
              >
                <Image
                  src={service.icon} // Muestra el icono del servicio.
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4> {/* // Título del servicio. */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.resumen} {/* // Resumen del servicio. */}
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }} // Efecto al pasar el mouse.
                whileTap={{ scale: 0.95 }} // Efecto al hacer clic.
                onClick={() => setSelectedService(service)} // Establece el servicio seleccionado.
                className="px-4 py-2 rounded-full bg-[#547EED] text-white text-sm font-bold hover:bg-[#3b5bb9] transition-colors"
              >
                Leer más // Botón para leer más sobre el servicio.
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
    <ServiceModal 
      service={selectedService} // Pasa el servicio seleccionado al modal.
      isOpen={!!selectedService} // Estado de apertura del modal.
      onClose={() => setSelectedService(null)} // Función para cerrar el modal.
    />
    <Footer /> {/* // Renderiza el pie de página. */}
    </>
  )
}
