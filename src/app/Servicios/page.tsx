'use client'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
  title: string;
  description: string;
  images: string[];
}

const services: Service[] = [
  { 
    title: 'Cáncer de cabeza y cuello',
    description: 'Descripción detallada del cáncer de cabeza y cuello...',
    images: ['/assets/cancer-cabeza-1.jpg', '/assets/cancer-cabeza-2.jpg']
  },
  { title: 'Germinal', description: 'Descripción detallada del germinal...', images: [] },
  { title: 'Cáncer de colon', description: 'Descripción detallada del cáncer de colon...', images: [] },
  { title: 'Cáncer de ovario', description: 'Descripción detallada del cáncer de ovario...', images: [] },
  { title: 'Cáncer de pulmón', description: 'Descripción detallada del cáncer de pulmón...', images: [] },
  { title: 'Melanoma', description: 'Descripción detallada del melanoma...', images: [] },
  { title: 'Tumores de sistema gastrointestinal', description: 'Descripción detallada de los tumores de sistema gastrointestinal...', images: [] },
  { title: 'Cáncer de Seno', description: 'Descripción detallada del cáncer de seno...', images: [] },
  { title: 'Parálisis NGS', description: 'Descripción detallada de la parálisis NGS...', images: [] },
  { title: 'Tumores del sistema nervioso central', description: 'Descripción detallada de los tumores del sistema nervioso central...', images: [] },
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
        
        <div className="flex gap-4 mb-6 overflow-x-auto">
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

        <p className="text-gray-600">{service.description}</p>
      </motion.div>
    </div>
  );
}

export default function MedicalServices() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4">
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
                <svg className="w-full h-full text-[#EB356E]" viewBox="0 0 24 24">
                  <path 
                    fill="currentColor" 
                    d="M12 2l3 3 3-3 2 2-3 3 3 3-2 2-3-3-3 3-2-2 3-3-3-3z"
                  />
                </svg>
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <svg className="w-full h-full text-[#EB356E]" viewBox="0 0 24 24">
                  <path 
                    fill="currentColor" 
                    d="M12 2l3 3 3-3 2 2-3 3 3 3-2 2-3-3-3 3-2-2 3-3-3-3z"
                  />
                </svg>
              </motion.div>
              <h4 className="text-[#EB356E] font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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