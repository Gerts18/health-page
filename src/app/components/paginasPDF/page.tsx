import{
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image
} from '@react-pdf/renderer'

// Añadir interfaz para props
interface PDFPageProps {
  data?: {
    nombre: string;
    apellido: string;
    telefono: string;
    correo_electronico: string;
    celular_contacto: string;
    tipo_prueba: string;
  };
}

function PDFPage({ data }: PDFPageProps) {
  const renderTestResults = () => {
    if (!data) return null;

    switch (data.tipo_prueba) {
      case "Panel de Biomarcadores":
        return (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resultados del Panel de Biomarcadores</Text>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableCell}>Biomarcador</Text>
                  <Text style={styles.tableCell}>Valor Medido</Text>
                  <Text style={styles.tableCell}>Rango Normal</Text>
                  <Text style={styles.tableCell}>Enfermedades Asociadas</Text>
                  <Text style={styles.tableCell}>Interpretación</Text>
                </View>
                
                {/* Filas de la tabla */}
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>PSA (Antígeno Prostático)</Text>
                  <Text style={styles.tableCell}>5.2 ng/mL</Text>
                  <Text style={styles.tableCell}>0-4 ng/mL</Text>
                  <Text style={styles.tableCell}>Cáncer de próstata, prostatitis</Text>
                  <Text style={styles.tableCell}>Niveles de riesgo medio, consultar urólogo</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Glucosa en Ayuno</Text>
                  <Text style={styles.tableCell}>130 mg/dL</Text>
                  <Text style={styles.tableCell}>70-100 mg/dL</Text>
                  <Text style={styles.tableCell}>Diabetes, hiperglucemia</Text>
                  <Text style={styles.tableCell}>Indicador de hiperglucemia, realizar prueba de HbA1c.</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>ALT (Alanina Aminotransferasa)</Text>
                  <Text style={styles.tableCell}>55 U/L</Text>
                  <Text style={styles.tableCell}>0-40 U/L</Text>
                  <Text style={styles.tableCell}>Daño hepático, hepatitis</Text>
                  <Text style={styles.tableCell}>Levemente elevado, descartar daño hepático.</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>CA-125</Text>
                  <Text style={styles.tableCell}>12 U/mL</Text>
                  <Text style={styles.tableCell}>0-35 U/mL</Text>
                  <Text style={styles.tableCell}>Cáncer de ovario (en mujeres)</Text>
                  <Text style={styles.tableCell}>Dentro de límites normales.</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Colesterol LDL</Text>
                  <Text style={styles.tableCell}>160 mg/dL</Text>
                  <Text style={styles.tableCell}>130 mg/dL</Text>
                  <Text style={styles.tableCell}>Riesgo cardiovascular</Text>
                  <Text style={styles.tableCell}>Alto riesgo, se sugiere tratamiento dietético o farmacológico.</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• PSA elevado: Los valores superiores al rango normal pueden ser indicativos de alteraciones prostáticas benignas o cáncer.</Text>
              <Text style={styles.interpretationText}>• Glucosa elevada: Valores superiores al rango normal pueden ser indicativos de diabetes o hiperglucemia.</Text>
              <Text style={styles.interpretationText}>• ALT elevado: Valores superiores al rango normal pueden ser indicativos de daño hepático.</Text>
              <Text style={styles.interpretationText}>• CA-125 elevado: Valores superiores al rango normal pueden ser indicativos de cáncer de ovario en mujeres.</Text>
              <Text style={styles.interpretationText}>• Colesterol LDL alto: Valores superiores al rango normal pueden ser indicativos de riesgo cardiovascular.</Text>
            </View>
          </>
        );

      case "Inmunohistoquímica (IHC)":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Inmunohistoquímica</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Marcador</Text>
                <Text style={styles.tableCell}>Expresión</Text>
                <Text style={styles.tableCell}>Intensidad</Text>
                <Text style={styles.tableCell}>Interpretación</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Ki-67</Text>
                <Text style={styles.tableCell}>30%</Text>
                <Text style={styles.tableCell}>Moderada</Text>
                <Text style={styles.tableCell}>Índice proliferativo elevado</Text>
              </View>
              {/* Más marcadores IHC aquí */}
            </View>
          </View>
        );

      case "Secuenciación Genética (NGS)":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Secuenciación Genética</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Gen</Text>
                <Text style={styles.tableCell}>Variante</Text>
                <Text style={styles.tableCell}>Frecuencia Alélica</Text>
                <Text style={styles.tableCell}>Significancia Clínica</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>BRCA1</Text>
                <Text style={styles.tableCell}>c.181T</Text>
                <Text style={styles.tableCell}>45%</Text>
                <Text style={styles.tableCell}>Patogénica</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>
          </View>
        );

      // ... continuar con los demás tipos de prueba ...
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Logo y encabezado */}
        <View style={styles.header}>
          <Image 
            src="../assets/logo.png"
            style={styles.logoImage}
          />
        </View>

        {/* Datos del paciente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos del paciente</Text>
          {data && (
            <>
              <Text style={styles.text}>Nombre: {data.nombre} {data.apellido}</Text>
              <Text style={styles.text}>Teléfono: {data.telefono}</Text>
              <Text style={styles.text}>Correo: {data.correo_electronico}</Text>
              <Text style={styles.text}>Contacto Familiar: {data.celular_contacto}</Text>
              <Text style={styles.text}>Tipo de Prueba: {data.tipo_prueba}</Text>
            </>
          )}
        </View>

        {renderTestResults()}
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 150,
    marginBottom: 10,
  },
  sublogo: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EB356E',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    borderRightWidth: 1,
    borderColor: '#000',
  },
  interpretationText: {
    fontSize: 10,
    marginBottom: 5,
    paddingLeft: 10,
  },
});

export default PDFPage;

