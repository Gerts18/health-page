'use client';

// Importaciones necesarias
import React from 'react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import { motion, HTMLMotionProps } from 'framer-motion';

// Definición de tipos para los props de los componentes
type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary'; // Variantes del botón
};

type CardProps = HTMLMotionProps<'div'>; // Props para el componente Card

// Componente principal de la página de contacto
export default function ContactPage() {
  // Componente de botón con animaciones
  const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
    // Clases CSS basadas en la variante del botón
    const variantClasses =
      variant === 'secondary'
        ? 'bg-secondary '
        : 'bg-primary text-white';
    return (
      <motion.button
        whileHover={{ scale: 1.05 }} // Efecto al pasar el mouse
        whileTap={{ scale: 0.95 }} // Efecto al hacer clic
        className={`px-4 py-2 rounded ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  // Componente de tarjeta con animaciones
  const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Estado inicial de la animación
      whileInView={{ opacity: 1, y: 0 }} // Animación al entrar en vista
      transition={{ duration: 0.5 }} // Duración de la animación
      whileHover={{ scale: 1.02 }} // Efecto al pasar el mouse
      className={`p-4 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white pt-[64px]">
      <Header /> {/* Componente de encabezado */}
      {/* Sección Hero */}
      <div className="relative h-[400px] bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/assets/contactB.png" // Imagen de fondo
            alt="Hero background"
            width={1920}
            height={400}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Capa oscura sobre la imagen */}
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} // Animación de entrada
            animate={{ opacity: 1, y: 0 }} // Animación de entrada
            transition={{ duration: 0.5 }} // Duración de la animación
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Contáctanos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} // Animación de entrada
            animate={{ opacity: 1, y: 0 }} // Animación de entrada
            transition={{ duration: 0.5, delay: 0.2 }} // Duración y retraso de la animación
            className="mt-4 max-w-xl text-lg text-white"
          >
            Envíanos cualquier pregunta sobre nuestros servicios a través de esta sección de contacto. Estamos aquí para ayudarte.
          </motion.p>
        </div>
      </div>

      {/* Contenido principal - Rediseñado */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }} // Animación de entrada
          animate={{ opacity: 1, y: 0 }} // Animación de entrada
          transition={{ duration: 0.5 }} // Duración de la animación
          className="text-4xl font-bold text-[#547EED] text-center mb-12"
        >
          ¿Cómo podemos ayudarte?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta 1 */}
          <Card className="p-6 bg-gradient-to-br from-[#EB356E] to-[#FF6B6B] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card1.png" // Imagen de la tarjeta
                  alt="Encuesta icon"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-2xl">Encuesta de satisfacción</h3>
              <p className="text-white/90">
                Para FICMAC es importante conocer tu opinión sobre nuestro servicio. 
                Cuéntanos que tal te pareció la atención recibida.
              </p>
              <a href="https://forms.gle/Wqw2xcBmDArRULTZ7" className="mt-4">
                <Button variant="secondary" className="bg-white text-[#EB356E] hover:bg-white/90 font-semibold px-8">
                  Realizar encuesta
                </Button>
              </a>
            </div>
          </Card>

          {/* Tarjeta 2 */}
          <Card className="p-6 bg-gradient-to-br from-[#547EED] to-[#84A9FF] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card2.png" // Imagen de la tarjeta
                  alt="Peticiones icon"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-2xl">Peticiones y quejas</h3>
              <p className="text-white/90">
                Comparte con nosotros tus solicitudes, sugerencias o reclamos. 
                Tu opinión nos ayuda a mejorar.
              </p>
              <a href="https://forms.gle/HsFkfBWKJqiqasNT7" className="mt-4">
                <Button variant="secondary" className="bg-white text-[#547EED] hover:bg-white/90 font-semibold px-8">
                  Enviar petición
                </Button>
              </a>
            </div>
          </Card>

          {/* Tarjeta 3 */}
          <Card className="p-6 bg-gradient-to-br from-[#EB356E] to-[#FF6B6B] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card3.png" // Imagen de la tarjeta
                  alt="Trabajo icon"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-2xl">Trabaja con nosotros</h3>
              <p className="text-white/90">
                Únete a nuestro equipo. Buscamos el mejor talento para seguir creciendo juntos.
              </p>
              <a href="https://co.linkedin.com/company/ficmac" className="mt-4">
                <Button variant="secondary" className="bg-white text-[#EB356E] hover:bg-white/90 font-semibold px-8">
                  Ver oportunidades
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
      <Footer /> {/* Componente de pie de página */}
    </div>
  );
}
