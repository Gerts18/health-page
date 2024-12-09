// Importación de componentes necesarios
import Header from "../components/Header/Index"; // Componente de encabezado
import Footer from "../components/Footer/Footer"; // Componente de pie de página
import TableComponent from "../components/Tabla-Front"; // Componente de tabla principal

// Definición del componente TablaBack
const TablaBack = () => {
  return (
    <>
      {/* Renderiza el encabezado */}
      <Header />
      {/* Renderiza el componente de tabla */}
      <TableComponent />
      {/* Renderiza el pie de página */}
      <Footer />
    </>
  );
};

// Exporta el componente TablaBack para su uso en otras partes de la aplicación
export default TablaBack;