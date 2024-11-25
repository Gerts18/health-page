'use client'
import { ReactNode } from 'react';
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "../components/ui/checkbox"
import Header from "../components/Header/Index"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

interface ContactCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

const ContactCard = ({ title, description, color, icon }: ContactCardProps) => (
  <Card className={`p-4 bg-${color} text-white rounded-xl`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image src={icon} alt={`${title} icon`} width={60} height={60} className="rounded-full" />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>
      <Button className={`bg-white text-${color} hover:bg-white/90`}>
        Realizar
      </Button>
    </div>
  </Card>
)

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="space-y-3 text-sm">{children}</div>
  </div>
)

export default function ContactPage() {
  const contactCards = [
    {
      title: "Encuesta de satisfacción",
      description: "Para FICMAC es importante conocer tu opinión sobre nuestro servicio. Cuéntanos que tal te pareció la atención recibida por parte de nuestro personal.",
      color: "[#EB356E]",
      icon: "/placeholder.svg?height=60&width=60"
    },
    {
      title: "Peticiones y quejas",
      description: "Si tienes alguna solicitud, sugerencia, felicitación, queja o reclamo compártela con nosotros; nos permite mejorar para brindarte siempre el mejor servicio.",
      color: "[#547EED]",
      icon: "/placeholder.svg?height=60&width=60"
    },
    {
      title: "Trabaja con nosotros",
      description: "En FICMAC buscamos el mejor talento y queremos que seas parte de nuestro equipo de trabajo. Cuéntanos un poco más de ti o de los servicios de tu empresa diligenciando el siguiente formulario.",
      color: "[#EB356E]",
      icon: "/placeholder.svg?height=60&width=60"
    }
  ]

  const formInputClass = "rounded-xl border-gray-100 placeholder:text-gray-400 shadow-lg focus:border-[#547EED] focus:ring-[#547EED]"

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Hero background"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contáctanos</h1>
          <p className="mt-4 max-w-xl text-lg text-white">
            Envíanos cualquier pregunta sobre nuestros servicios a través de esta sección de contacto. Estamos aquí para ayudarte.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#547EED]">Queremos saber tu opinión</h2>
            <div className="space-y-4">
              {contactCards.map((card, index) => (
                <ContactCard key={index} {...card} />
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex justify-center items-center">
            <form className="space-y-6 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nombres" className={formInputClass} />
                <Input placeholder="Apellidos" className={formInputClass} />
              </div>
              <Input placeholder="Correo electrónico" type="email" className={formInputClass} />
              <Input placeholder="Ciudad" type="text" className={formInputClass} />
              <Select>
                <SelectTrigger className={`w-full ${formInputClass} text-gray-400`}>
                  <SelectValue placeholder="Tipo de persona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Persona Natural</SelectItem>
                  <SelectItem value="juridica">Persona Jurídica</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Mensaje" className={`w-full h-32 ${formInputClass} resize-none`} />
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" className="border-gray-300 text-[#547EED] rounded focus:ring-[#547EED]" />
                <label htmlFor="privacy" className="text-sm text-[#547EED] leading-tight hover:underline cursor-pointer">
                  Autorizo la política y privacidad de datos
                </label>
              </div>
              <div className="flex justify-center">
                <Button className="w-32 bg-[#EB356E] hover:bg-[#EB356E]/80 rounded-full py-3 text-base shadow-lg">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-gray-300 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <FooterSection title="Horario">
              {[
                { label: "Atención al público", hours: "Lunes a viernes 7:30 am - 4:30 pm" },
                { label: "WhatsApp", hours: "Lunes a viernes 8:00 am - 4:00 pm" },
                { label: "Devolución de material", hours: "Martes y jueves 8:00 am - 3:00 pm" },
                { label: "Toma de muestras en Bogotá", hours: "Lunes a viernes 8:30 am - 12:30 pm" },
                { label: "Proveedores", hours: "Lunes a Viernes 8:00 am - 4:00 pm" },
                { label: "Telefónica", hours: "Lunes a viernes 7:30 am - 4:30 pm" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-semibold">{item.label}:</p>
                  <p>{item.hours}</p>
                </div>
              ))}
            </FooterSection>

            <FooterSection title="Contacto">
              <p className="font-semibold">Sede única al ciudadano y correspondencia:</p>
              <p>Calle 116 #9-72 CS. 718/719</p>
              <p>Edificio Global Medical Center</p>
              <p>Bogotá, Colombia.</p>
              <div className="pt-4">
                <p>Código Postal 110111</p>
                <p>(601) 756 29 37</p>
                <p>info@ficmac.org</p>
              </div>
            </FooterSection>

            <FooterSection title="Mapa del sitio">
              {[
                "Inicio", "Nosotros", "Investigación", "Educación", "Médicos", "Pacientes",
                "Transparencia", "Blog y noticias", "Donaciones", "Trabaja con nosotros"
              ].map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="block hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </FooterSection>

            <FooterSection title="Legal">
              {[
                { label: "Política de tratamiento de datos", href: "/politica-tratamiento" },
                { label: "Personales FICMAC", href: "/personales" },
                { label: "Aviso de privacidad", href: "/privacidad" },
                { label: "PQRSF", href: "/pqrsf" }
              ].map((item, index) => (
                <Link key={index} href={item.href} className="block hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </FooterSection>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm">© Copyright 2023, All Rights Reserved by CliniHyl</p>
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "Instagram", "GitHub"].map((social) => (
                <Link key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG paths for each social icon */}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

