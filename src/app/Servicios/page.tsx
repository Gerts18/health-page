import Header from '../components/Header/Index';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>FICMAC - Servicios</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      </Head>
      <main className="font-roboto">
        <Header />
        {/* Hero Section */}
        <section className="relative bg-blue-100">
          <img src="/Servicios.png" alt="Servicios" className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 bg-blue-800 text-white p-6">
            <h2 className="text-4xl font-bold">¿Preferirías quedarte en casa que ir a un centro de atención médica?</h2>
            <p className="mt-4 text-lg">
              Cada día, miles de personas luchan contra el cáncer, un reto que requiere apoyo, esperanza y solidaridad.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 px-6 bg-white">
          <h3 className="text-2xl font-bold text-center text-blue-700">Patologías</h3>
          <p className="text-center text-gray-600 mb-8">
            Nuestros servicios de salud especializados
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tarjetas de Servicios */}
            {[
              'Cáncer de cabeza y cuello',
              'Germinal',
              'Cáncer de colon',
              'Cáncer de ovario',
              'Cáncer de pulmón',
              'Melanoma',
              'Tumores de estroma gastrointestinal',
              'Cáncer de seno',
              'Paneles NGS',
              'Tumores del sistema nervioso central',
            ].map((servicio, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-blue-700">{servicio}</h4>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <a href="#" className="text-blue-600 mt-4 block font-medium">
                  Leer más
                </a>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
