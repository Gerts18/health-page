'use client'
// pages/contact.js
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Footer';
import Image from "next/image"
import { useState } from "react"
import { motion, HTMLMotionProps } from "framer-motion"

// Type definitions
type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: 'primary' | 'secondary'
}

type CardProps = HTMLMotionProps<"div">

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

type SelectTriggerProps = React.HTMLAttributes<HTMLDivElement>

type SelectValueProps = {
  children?: React.ReactNode
  placeholder?: string
}

type SelectContentProps = {
  children: React.ReactNode
}

type SelectItemProps = {
  children: React.ReactNode
  value: string
}

export default function ContactPage() {
  // Inline component definitions
  const Button = ({ children, className, variant, ...props }: ButtonProps) => (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  )

  const Card = ({ children, className, ...props }: CardProps) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`p-4 ${className}`} 
      {...props}
    >
      {children}
    </motion.div>
  )

  const Input = ({ className, ...props }: InputProps) => (
    <input className={`w-full p-2 ${className}`} {...props} />
  )

  const Textarea = ({ className, ...props }: TextareaProps) => (
    <textarea className={`w-full p-2 ${className}`} {...props} />
  )

  const Checkbox = ({ className, ...props }: InputProps) => (
    <input type="checkbox" className={`form-checkbox ${className}`} {...props} />
  )

  const Select = ({ children, className, ...props }: SelectProps) => (
    <select 
      className={`w-full p-2 rounded-xl border-gray-100 bg-white placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED] ${className}`} 
      {...props}
    >
      {children}
    </select>
  )

  const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => (
    <div className={`relative ${className}`} {...props}>
      {children}
    </div>
  )

  const SelectValue = ({ children, placeholder }: SelectValueProps) => (
    <span>{children || placeholder}</span>
  )

  const SelectContent = ({ children }: SelectContentProps) => (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md">
      {children}
    </div>
  )

  const SelectItem = ({ children, value }: SelectItemProps) => (
    <option value={value}>{children}</option>
  )

  const [selectOpen, setSelectOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white pt-[64px]">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/assets/contactB.png"
            alt="Hero background"
            width={1920}
            height={400}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Contáctanos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-white"
          >
            Envíanos cualquier pregunta sobre nuestros servicios a través de esta sección de contacto. Estamos aquí para ayudarte.
          </motion.p>
        </div>
      </div>

      {/* Main Content - Rediseñado */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#547EED] text-center mb-12"
        >
          ¿Cómo podemos ayudarte?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 bg-gradient-to-br from-[#EB356E] to-[#FF6B6B] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card1.png"
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
                <Button className="bg-white text-[#EB356E] hover:bg-white/90 font-semibold px-8">
                  Realizar encuesta
                </Button>
              </a>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-[#547EED] to-[#84A9FF] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card2.png"
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
                <Button className="bg-white text-[#547EED] hover:bg-white/90 font-semibold px-8">
                  Enviar petición
                </Button>
              </a>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-[#EB356E] to-[#FF6B6B] text-white rounded-2xl transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/Card3.png"
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
                <Button className="bg-white text-[#EB356E] hover:bg-white/90 font-semibold px-8">
                  Ver oportunidades
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}