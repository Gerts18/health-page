import { PreguntasFrecuentesD } from "../components/Estudios/PreguntasFrecuentesD";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Index";
const SeleccionDeBiopsia = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-2 mb-0">
      <Header />
      <main className="max-w-5xl pt-40 w-full mt-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Solicitud de estudio</h1>
        <div className="flex justify-center space-x-4 items-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
          <span className="w-12 border-t border-blue-600"></span>
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
          <span className="w-12 border-t border-gray-400"></span>
          <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">3</div>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Escoge el tipo de biopsia que requieres solicitar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* Biopsia líquida */}
          <div className="bg-blue-100 p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg font-bold text-blue-600">Biopsia líquida</h2>
            <p className="text-sm text-gray-600 mt-2">No requiere preparación</p>
            <p className="text-sm text-gray-500 mt-1">
              Comuníquese con FICMAC para la programación de la toma de muestra.
            </p>
            <div className="mt-4 space-x-4">
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                Instructivo
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Comuníquese
              </button>
            </div>
          </div>

          {/* Biopsia sólida */}
          <div className="bg-pink-100 p-6 rounded-md shadow-md text-center">
            <h2 className="text-lg font-bold text-pink-600">Biopsia sólida</h2>
            <p className="text-sm text-gray-600 mt-2">Requiere preparación</p>
            <p className="text-sm text-gray-500 mt-1">
              Señor paciente: Debe llevar para su estudio los bloques de parafina (obligatorio) y/o láminas (opcional).
            </p>
            <div className="mt-4 space-x-4">
              <button className="bg-white border border-pink-600 text-pink-600 px-4 py-2 rounded-md hover:bg-pink-50">
                Instructivo
              </button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                Comuníquese
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="max-w-4xl mx-auto p-4 mt-4">
        <PreguntasFrecuentesD />
    </div>
    <Footer />
    </>
  );
};

export default SeleccionDeBiopsia;
