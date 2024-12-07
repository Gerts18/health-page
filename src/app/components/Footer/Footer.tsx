import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'; // Asegúrate de instalar react-icons

// Este componente representa el footer del sitio web.
// Aquí se muestra el horario de atención, información de contacto, un mapa del sitio con enlaces internos
// y secciones legales con enlaces a páginas de política de datos, privacidad, etc.
// Además, incluye una sección inferior con derechos de autor e íconos sociales.

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Horario Section */}
        {/* Esta sección muestra el horario de atención en diferentes modalidades. */}
        <div>
          <h2 className="text-xl font-bold mb-4">Horario</h2>
          <div className="space-y-2 text-sm">
            <p>Atención al público:</p>
            <p>Lunes a viernes 7:30 am - 4:30 pm</p>
            <p>WhatsApp:</p>
            <p>Lunes a viernes 8:00 am - 4:00 pm</p>
            <p>Devolución de material:</p>
            <p>Martes y jueves 8:00 am - 3:00 pm</p>
            <p>Toma de muestras en Bogotá:</p>
            <p>Lunes a viernes 8:30 am - 12:30 pm</p>
            <p>Proveedores:</p>
            <p>Lunes a Viernes 8:00 am - 4:00 pm</p>
            <p>Telefónica:</p>
            <p>Lunes a viernes 7:30 am - 4:30 pm</p>
          </div>
        </div>

        {/* Contacto Section */}
        {/* Aquí se proporciona la dirección física de la sede, el número de contacto y el correo electrónico. */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contacto</h2>
          <div className="space-y-4 text-sm">
            <p>Sede única al ciudadano y correspondencia:</p>
            <p>Calle 116 #9&apos;72 CS. 718&apos;719</p>
            <p>Edificio Global Medical Center</p>
            <p>Bogotá, Colombia.</p>
            <div className="mt-8">
              <p>Código Postal 110111</p>
              <p>(601) 756 29 37</p>
              <p>info@ficmac.org</p>
            </div>
          </div>
        </div>

        {/* Mapa del sitio Section */}
        {/* Sección con enlaces a las diferentes páginas del sitio para facilitar la navegación. */}
        <div>
          <h2 className="text-xl font-bold mb-4">Mapa del sitio</h2>
          <div className="grid gap-2 text-sm">
            <Link href="/" className="hover:text-gray-300">Inicio</Link>
            <Link href="/about" className="hover:text-gray-300">Nosotros</Link>
            <Link href="/education" className="hover:text-gray-300">Educación</Link>
            <Link href="/medicos" className="hover:text-gray-300">Médicos</Link>
            <Link href="/pacientes" className="hover:text-gray-300">Pacientes</Link>
            <Link href="/transparencia" className="hover:text-gray-300">Transparencia</Link>
            <Link href="/News" className="hover:text-gray-300">Noticias</Link>
            <Link href="/donations" className="hover:text-gray-300">Donaciones</Link>
            <Link href="/Contacto" className="hover:text-gray-300">Trabaja con nosotros</Link>
          </div>
        </div>

        {/* Legal Section */}
        {/* Información legal y enlaces a políticas de privacidad y tratamiento de datos. */}
        <div>
          <h2 className="text-xl font-bold mb-4">Legal</h2>
          <div className="grid gap-2 text-sm">
            <Link href="/politica" className="hover:text-gray-300">Política de tratamiento de datos</Link>
            <Link href="/personales" className="hover:text-gray-300">Personales FICMAC</Link>
            <Link href="/privacidad" className="hover:text-gray-300">Aviso de privacidad</Link>
            <Link href="/pqrsf" className="hover:text-gray-300">PQRSF</Link>
          </div>
        </div>
      </div>

      {/* Sección inferior del footer con derechos de autor y enlaces a redes sociales */}
      <div className="max-w-screen-xl mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center">
        {/* Texto de derechos de autor */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © Copyright 2022, All Rights Reserved by ClarityUI
        </p>

        {/* Íconos de redes sociales con enlaces externos */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
