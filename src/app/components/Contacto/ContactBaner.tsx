import Image from 'next/image'

const ContactBanner = () => {
  return (
    <div className="relative h-[400px] bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Contact banner"
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
  )
}

export default ContactBanner
