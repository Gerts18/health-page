'use client'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import Image from "next/image";
import { motion } from "framer-motion";

export default function MedicalServices() {
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
          <div 
            className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center"
            style={{ backgroundColor: 'rgba(229, 241, 248, 0.8)' }}
          >
            <div className="absolute inset-0 bg-black/10" />
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
                  className="px-4 py-2 rounded-full bg-[#547EED] text-white text-sm font-bold hover:bg-[#3b5bb9] transition-colors"
                >
                  Leer más
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Footer />
      </>
    )
  }
  
  const services = [
    { title: 'Cáncer de cabeza y cuello' },
    { title: 'Germinal' },
    { title: 'Cáncer de colon' },
    { title: 'Cáncer de ovario' },
    { title: 'Cáncer de pulmón' },
    { title: 'Melanoma' },
    { title: 'Tumores de sistema gastrointestinal' },
    { title: 'Cáncer de Seno' },
    { title: 'Parálisis NGS' },
    { title: 'Tumores del sistema nervioso central' },
  ]