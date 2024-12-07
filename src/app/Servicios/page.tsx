'use client'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
  title: string;
  resumen: string;
  description: string;
  images: string[];
  icon: string;
}

const services: Service[] = [
  { 
    title: 'Cáncer de cabeza y cuello',
    resumen: 'Grupo de cánceres que afecta diversas partes de la cabeza y el cuello',
    description: 'El cáncer de cabeza y cuello incluye tumores que se desarrollan en áreas como la boca, garganta, nariz y glándulas salivales. Estos cánceres suelen estar relacionados con el consumo de tabaco, alcohol y la infección por el virus del papiloma humano (VPH). El tratamiento incluye cirugía, radioterapia y quimioterapia, dependiendo de la localización y el estadio del cáncer.\n\nMedicamentos:\nLos medicamentos para el cáncer de cabeza y cuello incluyen quimioterapias como bleomicina, docetaxel y metotrexato, que frenan el crecimiento de las células cancerosas. Las inmunoterapias como nivolumab, pembrolizumab y toripalimab ayudan al sistema inmunológico a atacar el cáncer. Cetuximab, una terapia dirigida, bloquea señales que hacen crecer el tumor. Hidroxiurea puede reducir el tamaño del tumor y mejorar otros tratamientos.',
    images: ['/assets/cuello1.jpg', '/assets/cuello2.jpg', '/assets/cabezaA.jpg'],
    icon: '/assets/icons/Icon-1.png'
  },
  { title: 'Germinal', 
    resumen: 'Cáncer que se desarrolla a partir de células germinales.', 
    description: 'El cáncer germinal se origina en las células que forman los óvulos en mujeres o los espermatozoides en hombres. Se presenta comúnmente en los testículos o los ovarios, aunque también puede ocurrir en otras partes del cuerpo. Los tratamientos incluyen quimioterapia, radioterapia y cirugía, con altas tasas de éxito en estadios iniciales.\n\nMedicamentos:\nLos medicamentos para el cáncer germinal incluyen quimioterapias como el cisplatino, etopósido y bleomicina, que ayudan a eliminar las células cancerígenas. Otros medicamentos como la vinblastina y la ifosfamida también se utilizan para detener el crecimiento de los tumores. Además, se puede emplear la cirugía y la radioterapia como parte del tratamiento para eliminar o reducir los tumores.', 
    images: ['/assets/germinal1.jpg','/assets/germinalA.jpg'],
    icon: '/assets/icons/Icon-2.png'
  },
  { title: 'Cáncer de colon', 
    resumen: 'Cáncer que afecta el colon o el recto del sistema digestivo', 
    description: 'El cáncer de colon es una enfermedad en la que las células malignas se desarrollan en el revestimiento del colon o el recto. Los síntomas incluyen cambios en los hábitos intestinales, sangrado rectal y pérdida de peso inexplicada. Las pruebas de detección, como la colonoscopía, son esenciales para el diagnóstico temprano. El tratamiento incluye cirugía, quimioterapia y en algunos casos, terapia dirigida.\n\nMedicamentos:\nLos medicamentos para el cáncer de colon incluyen quimioterapias como fluorouracilo, capecitabina y oxaliplatino, que frenan el crecimiento del cáncer. Terapias dirigidas como bevacizumab, cetuximab y panitumumab bloquean señales o vasos sanguíneos que ayudan al tumor a crecer. Inmunoterapias como pembrolizumab y nivolumab fortalecen el sistema inmunológico para combatir el cáncer.', 
    images: ['/assets/colon1.jpg','/assets/colonA.jpg'],
    icon: '/assets/icons/Icon-3.png'
  },
  { title: 'Cáncer de ovario', 
    resumen: 'Cáncer que afecta los ovarios en el sistema reproductivo femenino', 
    description: 'El cáncer de ovario es una de las principales causas de muerte por cáncer en mujeres debido a que se detecta a menudo en etapas avanzadas. Los síntomas incluyen hinchazón abdominal, dolor pélvico y dificultad para comer. Los tratamientos incluyen cirugía para extirpar los ovarios afectados y quimioterapia para reducir el tamaño del tumor.\n\nMedicamentos:\nLos medicamentos para el cáncer de ovario incluyen quimioterapias como carboplatino, cisplatino, paclitaxel y doxorrubicina, que destruyen las células cancerosas o frenan su crecimiento. Bevacizumab es una terapia dirigida que bloquea la formación de vasos sanguíneos que alimentan al tumor. Los inhibidores de PARP como olaparib, niraparib y rucaparib ayudan a reparar el daño en el ADN de las células cancerosas, lo que lleva a su destrucción.', 
    images: ['/assets/ovario1.jpg', '/assets/ovario2.png','/assets/ovarioA.jpg'],
    icon: '/assets/icons/icon-4.png'
  },
  { title: 'Cáncer de pulmón', 
    resumen: 'Cáncer que afecta los pulmones, a menudo relacionado con el tabaquismo', 
    description: 'El cáncer de pulmón es una de las principales causas de muerte por cáncer en todo el mundo. Se clasifica en dos tipos principales: cáncer de pulmón de células pequeñas y de células no pequeñas. Los síntomas incluyen tos persistente, dificultad para respirar y dolor torácico. El tratamiento puede incluir cirugía, quimioterapia, radioterapia y terapias dirigidas.\n\nMedicamentos:\nLos medicamentos para el cáncer de pulmón incluyen quimioterapias como paclitaxel y gemcitabina, que detienen el crecimiento del cáncer. Las terapias dirigidas como osimertinib y gefitinib bloquean proteínas que ayudan al tumor a crecer. Las inmunoterapias como pembrolizumab y nivolumab refuerzan el sistema inmunológico para atacar el cáncer. Bevacizumab impide que el tumor forme nuevos vasos sanguíneos para alimentarse.', 
    images: ['/assets/pulmon1.png','/assets/pulmonA.jpg'],
    icon: '/assets/icons/Icon-5.png'
  },
  { title: 'Melanoma', 
    resumen: 'El tipo más agresivo de cáncer de piel', 
    description: 'El melanoma se desarrolla en los melanocitos, las células que producen pigmento en la piel. Es causado principalmente por la exposición excesiva a los rayos UV del sol o camas de bronceado. Puede propagarse rápidamente a otras partes del cuerpo si no se detecta temprano. Los tratamientos incluyen cirugía, inmunoterapia y terapias dirigidas.\n\nMedicamentos:\nLos medicamentos para el melanoma incluyen tratamientos como pembrolizumab y nivolumab, que ayudan al cuerpo a combatir el cáncer. Otros, como dabrafenib y vemurafenib, bloquean el crecimiento del melanoma. También se usan medicamentos como aldesleukin para activar el sistema inmunológico. Algunos tratamientos usan virus para atacar el cáncer, y otros detienen la división de las células cancerosas.', 
    images: ['/assets/melanoma1.png','/assets/melanomaA.jpg'],
    icon: '/assets/icons/Icon-6.png'
  },
  { title: 'Tumores de sistema gastrointestinal', 
    resumen: 'Tumores que afectan órganos del sistema digestivo', 
    description: 'Los tumores del sistema gastrointestinal incluyen cánceres que afectan el estómago, el hígado, el páncreas, el esófago y los intestinos. Los síntomas varían según el órgano afectado, pero pueden incluir dolor abdominal, pérdida de peso y dificultad para tragar. El tratamiento suele implicar una combinación de cirugía, quimioterapia y radioterapia.\n\nMedicamentos:\nLos medicamentos para los tumores de estroma gastrointestinal incluyen imatinib y avapritinib, que bloquean el crecimiento de las células tumorales. Otros medicamentos, como ripretinib y regorafenib, ayudan a frenar el crecimiento de los tumores. También se usa sunitinib para atacar las células tumorales y reducir su crecimiento.', 
    images: ['/assets/gastro1.jpg', '/assets/gastro2.png','/assets/gastroA.jpg'],
    icon: '/assets/icons/Icon-7.png'
  },
  { title: 'Cáncer de Seno', 
    resumen: 'Cáncer que se desarrolla en las células del tejido mamario', 
    description: 'El cáncer de seno es el tipo de cáncer más común en mujeres a nivel mundial. Puede presentarse como un bulto en el seno, cambios en la forma o tamaño del seno o secreción anormal del pezón. El tratamiento incluye cirugía, quimioterapia, radioterapia y terapias hormonales dependiendo del tipo y estadio del cáncer.\n\nMedicamentos:\nLos medicamentos para el cáncer de seno incluyen quimioterapias como paclitaxel y capecitabina, que eliminan las células cancerosas. Algunos medicamentos como trastuzumab y pertuzumab atacan proteínas en el tumor. Otros, como tamoxifeno y letrozol, reducen las hormonas que alimentan el cáncer. Además, tratamientos como olaparib y pembrolizumab ayudan al sistema inmunológico a luchar contra el cáncer.', 
    images: ['/assets/seno1.png','/assets/senoA.jpg'],
    icon: '/assets/icons/Icon-8.png'
  },
  { title: 'Parálisis NGS', 
    resumen: 'Una condición que afecta el movimiento voluntario de ciertas áreas del cuerpo', 
    description: 'La parálisis NGS (nombre genérico supuesto) describe una condición donde los músculos pierden su capacidad de movimiento debido a un daño en los nervios o el cerebro. Puede ser causada por traumas, infecciones o enfermedades neurodegenerativas. El tratamiento se enfoca en la rehabilitación y, en algunos casos, intervenciones quirúrgicas.\n\nMedicamentos:\nPara la parálisis del nervio facial (o parálisis de Bell), los tratamientos incluyen medicamentos como los corticosteroides, como la prednisona, que ayudan a reducir la inflamación y mejorar la función del nervio. En algunos casos, se pueden usar analgésicos para aliviar el dolor, así como medicamentos antivirales si se sospecha de una infección viral. La fisioterapia facial también es útil para recuperar el movimiento de los músculos faciales.', 
    images: ['/assets/páralisis.png', '/assets/parálisis1.png','/assets/ngsA.jpeg'],
    icon: '/assets/icons/Icon-9.png'
  },
  { title: 'Tumores del sistema nervioso central', 
    resumen: 'Tumores que se desarrollan en el cerebro o la médula espinal', 
    description: 'Estos tumores pueden ser benignos o malignos y afectan funciones esenciales como el pensamiento, la memoria y el movimiento. Los síntomas dependen de la ubicación del tumor e incluyen dolores de cabeza persistentes, convulsiones y problemas de equilibrio. Los tratamientos incluyen cirugía, radioterapia y quimioterapia.\n\nMedicamentos:\nLos medicamentos para los tumores del sistema nervioso central incluyen quimioterapia como la temozolomida, que destruye las células tumorales. El bevacizumab bloquea el crecimiento de nuevos vasos sanguíneos que alimentan al tumor. Otros medicamentos, como el everolimus, detienen el crecimiento de las células tumorales. Los corticosteroides, como la dexametasona, ayudan a reducir la inflamación y aliviar los síntomas.', 
    images: ['/assets/nervioso1.png','/assets/sncA.jpg'],
    icon: '/assets/icons/Icon-10.png'
  },
];

function ServiceModal({ service, isOpen, onClose }: { 
  service: Service | null, 
  isOpen: boolean, 
  onClose: () => void 
}) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-[#547EED]">{service.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex gap-4 mb-6 overflow-x-auto justify-center">
          {service.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${service.title} imagen ${index + 1}`}
              width={200}
              height={150}
              className="rounded-lg object-cover"
            />
          ))}
        </div>

        <p className="text-gray-600 text-justify">{service.description}</p>
      </motion.div>
    </div>
  );
}

export default function MedicalServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4 mt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] mb-16"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/Nuestros-S.png"
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
  
      {/* Question Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
  
      {/* Services Section */}
      <motion.section className="mb-24">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-xl font-bold text-[#EB356E] mb-4">Patologías</h3>
          <h2 className="text-4xl font-bold text-[#547EED]">
            Nuestros servicios de salud
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#547EED]"
            >
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 mb-6"
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.resumen}
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service)}
                className="px-4 py-2 rounded-full bg-[#547EED] text-white text-sm font-bold hover:bg-[#3b5bb9] transition-colors"
              >
                Leer más
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
          {services.slice(8).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#547EED]"
            >
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 mb-6"
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.resumen}
              </p>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service)}
                className="px-4 py-2 rounded-full bg-[#547EED] text-white text-sm font-bold hover:bg-[#3b5bb9] transition-colors"
              >
                Leer más
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
    <ServiceModal 
      service={selectedService}
      isOpen={!!selectedService}
      onClose={() => setSelectedService(null)}
    />
    <Footer />
    </>
  )
}
