import FormularioSolicitud from "../components/Estudios/FormularioSolicitud";
import PreguntasFrecuentes from "../components/Estudios/PreguntasFrecuentes";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";
const SolicitudDeEstudio = () => {
  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto p-4">
    <FormularioSolicitud />
    <PreguntasFrecuentes />
    </div>
    <Footer />
    </>
  );
};

export default SolicitudDeEstudio;
