// Importa el componente Image de Next.js para manejar imágenes optimizadas
import Image from 'next/image'

// Componente funcional ContactBanner
const ContactBanner = () => {
  return (
    <div className="relative h-[400px] bg-gray-100">
      {/* Contenedor absoluto para la imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=400&width=1920" // Ruta de la imagen de fondo
          alt="Contact banner" // Texto alternativo para la imagen
          width={1920} // Ancho de la imagen
          height={400} // Alto de la imagen
          className="h-full w-full object-cover" // Clases de estilo para la imagen
        />
        {/* Capa oscura sobre la imagen para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Contenedor para el contenido del banner */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Contáctanos</h1> {/* Título principal */}
        <p className="mt-4 max-w-xl text-lg text-white">
          Envíanos cualquier pregunta sobre nuestros servicios a través de esta sección de contacto. Estamos aquí para ayudarte.
        </p> {/* Descripción del banner */}
      </div>
    </div>
  )
}

// Exporta el componente para su uso en otras partes de la aplicación
export default ContactBanner
