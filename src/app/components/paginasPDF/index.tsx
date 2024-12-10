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
                <Text style={styles.tableCell}>Biomarcador</Text>
                <Text style={styles.tableCell}>Resultado</Text>
                <Text style={styles.tableCell}>Intensidad</Text>
                <Text style={styles.tableCell}>Patrón de Tinción</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PSA (Antígeno Prostático Específico)</Text>
                <Text style={styles.tableCell}>Positivo (+)</Text>
                <Text style={styles.tableCell}>Moderada (2+)</Text>
                <Text style={styles.tableCell}>Citoplasmático homogéneo</Text>
                <Text style={styles.tableCell}>Confirmación de origen prostático del tejido.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Ki-67 (Índice de Proliferación)</Text>
                <Text style={styles.tableCell}>30%</Text>
                <Text style={styles.tableCell}>Alta (3+)</Text>
                <Text style={styles.tableCell}>Nuclear</Text>
                <Text style={styles.tableCell}>Índice de proliferación elevado; sugiere tumor agresivo.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>p53 (Gen Supresor de Tumores)</Text>
                <Text style={styles.tableCell}>Positivo (+)</Text>
                <Text style={styles.tableCell}>Bajo (1+)</Text>
                <Text style={styles.tableCell}>Nuclear</Text>
                <Text style={styles.tableCell}>Mutación del p53 detectada; posible indicativo de malignidad.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>AR (Receptores de Andrógenos)</Text>
                <Text style={styles.tableCell}>Positivo (+)</Text>
                <Text style={styles.tableCell}>Alta (3+)</Text>
                <Text style={styles.tableCell}>Nuclear</Text>
                <Text style={styles.tableCell}>Expresión elevada, útil para tratamientos hormonales.</Text>
              </View>
              {/* Más marcadores IHC aquí */}
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• PSA positivo: La tinción positiva confirma que la muestra analizada proviene de tejido prostático, alineándose con la sospecha clínica de carcinoma prostático.</Text>
              <Text style={styles.interpretationText}>• Ki-67 elevado (30%): Un índice alto de proliferación celular sugiere un tumor de comportamiento agresivo y mayor riesgo de progresión.</Text>
              <Text style={styles.interpretationText}>• p53 positivo (mutado): Alteración en el gen supresor de tumores, lo que puede correlacionarse con una mayor malignidad y peor pronóstico.</Text>
              <Text style={styles.interpretationText}>• AR positivo: Alta expresión de receptores de andrógenos, lo que indica que el tumor podría responder a terapias hormonales dirigidas.</Text>
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
                <Text style={styles.tableCell}>Alteración Genética</Text>
                <Text style={styles.tableCell}>Zygosidad</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>TP53</Text>
                <Text style={styles.tableCell}>Mutación c.817CT (p.R273C)</Text>
                <Text style={styles.tableCell}>Heterocigota</Text>
                <Text style={styles.tableCell}>Supresor tumoral</Text>
                <Text style={styles.tableCell}>Asociada con malignidad, resistencia a quimioterapia.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>BRCA2</Text>
                <Text style={styles.tableCell}>Mutación c.5946delT</Text>
                <Text style={styles.tableCell}>Heterocigota</Text>
                <Text style={styles.tableCell}>Reparación del ADN</Text>
                <Text style={styles.tableCell}>Incrementa el riesgo de cáncer y posible respuesta a inhibidores PARP.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PTEN</Text>
                <Text style={styles.tableCell}>Deleción</Text>
                <Text style={styles.tableCell}>Homocigota</Text>
                <Text style={styles.tableCell}>Regulador de crecimiento celular</Text>
                <Text style={styles.tableCell}>Indicativa de tumor agresivo y desregulación de vías PI3K.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>AR (Receptor de Andrógenos)</Text>
                <Text style={styles.tableCell}>Amplificación</Text>
                <Text style={styles.tableCell}>N/A</Text>
                <Text style={styles.tableCell}>Sensibilidad a terapia hormonal</Text>
                <Text style={styles.tableCell}>Sugerencia de terapia dirigida basada en bloqueo androgénico.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• TP53 mutado: La mutación en el gen supresor de tumores TP53 se asocia con una función alterada del control del ciclo celular, lo que podría contribuir a un fenotipo tumoral más agresivo.</Text>
              <Text style={styles.interpretationText}>• BRCA2 mutado: La deleción detectada incrementa la predisposición al cáncer y sugiere sensibilidad a terapias basadas en inhibidores de PARP, como olaparib.</Text>
              <Text style={styles.interpretationText}>• PTEN eliminado: La deleción completa de PTEN indica una activación desregulada de la vía PI3K/AKT, vinculada a crecimiento tumoral acelerado.</Text>
              <Text style={styles.interpretationText}>• Amplificación del AR: Indica que el tumor depende de la señalización androgénica, siendo un posible objetivo para terapias hormonales dirigidas.</Text>
            </View>
          </View>
        );

      case "Estudios de Patología Molecular":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Patología Molecular</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Biomarcador/Gen</Text>
                <Text style={styles.tableCell}>Alteración Detectada</Text>
                <Text style={styles.tableCell}>Método</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>ERG (Fusión TMPRSS2-ERG)</Text>
                <Text style={styles.tableCell}>Positiva</Text>
                <Text style={styles.tableCell}>PCR en Tiempo Real</Text>
                <Text style={styles.tableCell}>Indica presencia de cáncer de próstata</Text>
                <Text style={styles.tableCell}>Asociado con un subtipo específico de tumor prostático.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PTEN (Deleción)</Text>
                <Text style={styles.tableCell}>Pérdida heterocigótica (LOH)</Text>
                <Text style={styles.tableCell}>FISH</Text>
                <Text style={styles.tableCell}>Desregulación de la vía PI3K/AKT</Text>
                <Text style={styles.tableCell}>Vinculado con agresividad tumoral.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>AR-V7 (Variante del Receptor de Andrógenos)</Text>
                <Text style={styles.tableCell}>No detectada</Text>
                <Text style={styles.tableCell}>RT-PCR</Text>
                <Text style={styles.tableCell}>Ausencia de resistencia a terapia hormonal</Text>
                <Text style={styles.tableCell}>Indica que el tumor podría responder a terapias hormonales estándar.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>MSI (Inestabilidad de Microsatélites)</Text>
                <Text style={styles.tableCell}>Estabilidad</Text>
                <Text style={styles.tableCell}>PCR en Tiempo Real</Text>
                <Text style={styles.tableCell}>Mantenimiento de la reparación del ADN</Text>
                <Text style={styles.tableCell}>Bajo riesgo de hipermutación.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Fusión TMPRSS2-ERG positiva: La presencia de esta fusión génica confirma la naturaleza tumoral del tejido y sugiere un subtipo molecular frecuente en cáncer de próstata.</Text>
              <Text style={styles.interpretationText}>• Deleción de PTEN: La pérdida de PTEN indica un mayor riesgo de progresión tumoral y sugiere desregulación en las vías de crecimiento celular, lo que puede influir en la respuesta al tratamiento.</Text>
              <Text style={styles.interpretationText}>• AR-V7 no detectado: La ausencia de esta variante sugiere que el paciente podría beneficiarse de terapias hormonales dirigidas, como enzalutamida o abiraterona.</Text>
              <Text style={styles.interpretationText}>• MSI estable: La estabilidad en los microsatélites descarta deficiencias en los mecanismos de reparación del ADN, lo que reduce la probabilidad de respuesta a inmunoterapias basadas en inhibidores de puntos de control inmunitarios.</Text>
            </View>
          </View>
        )

        case "Hibridación in situ (FISH)":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Hibridación in situ (FISH)</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Biomarcador/Gen</Text>
                <Text style={styles.tableCell}>Alteración Detectada</Text>
                <Text style={styles.tableCell}>Resultado</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PTEN</Text>
                <Text style={styles.tableCell}>Deleción</Text>
                <Text style={styles.tableCell}>Homocigota</Text>
                <Text style={styles.tableCell}>Indicativa de desregulación en la vía PI3K/AKT</Text>
                <Text style={styles.tableCell}>Asociada con mayor agresividad y resistencia al tratamiento.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>ERG (TMPRSS2-ERG)</Text>
                <Text style={styles.tableCell}>Reordenamiento génico</Text>
                <Text style={styles.tableCell}>Positivo</Text>
                <Text style={styles.tableCell}>Subtipo molecular de cáncer de próstata</Text>
                <Text style={styles.tableCell}>Frecuente en adenocarcinomas prostáticos, puede influir en la progresión tumoral.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>MYC</Text>
                <Text style={styles.tableCell}>Amplificación</Text>
                <Text style={styles.tableCell}>Múltiples copias</Text>
                <Text style={styles.tableCell}>Asociada con proliferación celular descontrolada</Text>
                <Text style={styles.tableCell}>Indicativa de mal pronóstico en tumores avanzados.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>CEP10</Text>
                <Text style={styles.tableCell}>Control cromosómico (10q11.22)</Text>
                <Text style={styles.tableCell}>Normal</Text>
                <Text style={styles.tableCell}>Indicativo de estabilidad cromosómica</Text>
                <Text style={styles.tableCell}>No se detectaron pérdidas adicionales significativas.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Deleción de PTEN: Confirmada por FISH, la pérdida homocigota en PTEN se asocia con una mayor agresividad tumoral y progresión rápida del cáncer de próstata.</Text>
              <Text style={styles.interpretationText}>• Reordenamiento de TMPRSS2-ERG: Positivo, lo que confirma una fusión génica que es un biomarcador molecular característico en ciertos tipos de cáncer de próstata.</Text>
              <Text style={styles.interpretationText}>• Amplificación de MYC: La presencia de múltiples copias de MYC sugiere un fenotipo más agresivo con mayor riesgo de diseminación.</Text>
              <Text style={styles.interpretationText}>• CEP10 Normal: Ausencia de alteraciones cromosómicas adicionales en el cromosoma 10, lo que respalda la especificidad de los hallazgos en PTEN.</Text>
            </View>
          </View>
        )


        case "Citometría de Flujo":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Citometría de Flujo</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Parámetro Analizado</Text>
                <Text style={styles.tableCell}>Marcador Evaluado</Text>
                <Text style={styles.tableCell}>Resultado</Text>
                <Text style={styles.tableCell}>Rango de Referencia</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células T totales</Text>
                <Text style={styles.tableCell}>CD3+</Text>
                <Text style={styles.tableCell}>58%</Text>
                <Text style={styles.tableCell}>55-70%</Text>
                <Text style={styles.tableCell}>Dentro del rango normal.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células T citotóxicas</Text>
                <Text style={styles.tableCell}>CD8+</Text>
                <Text style={styles.tableCell}>40%</Text>
                <Text style={styles.tableCell}>20-35%</Text>
                <Text style={styles.tableCell}>Elevadas, sugieren activación inmune.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células T helper</Text>
                <Text style={styles.tableCell}>CD4+</Text>
                <Text style={styles.tableCell}>18%</Text>
                <Text style={styles.tableCell}>30-40%</Text>
                <Text style={styles.tableCell}>Disminuidas, podrían indicar supresión inmune.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células NK</Text>
                <Text style={styles.tableCell}>CD56+</Text>
                <Text style={styles.tableCell}>6%</Text>
                <Text style={styles.tableCell}>5-15%</Text>
                <Text style={styles.tableCell}>Dentro del rango normal.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células B</Text>
                <Text style={styles.tableCell}>CD19+</Text>
                <Text style={styles.tableCell}>12%</Text>
                <Text style={styles.tableCell}>10-20%</Text>
                <Text style={styles.tableCell}>Dentro del rango normal.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células NK</Text>
                <Text style={styles.tableCell}>CD56+</Text>
                <Text style={styles.tableCell}>6%</Text>
                <Text style={styles.tableCell}>5-15%</Text>
                <Text style={styles.tableCell}>Dentro del rango normal.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células tumorales</Text>
                <Text style={styles.tableCell}>EpCAM+</Text>
                <Text style={styles.tableCell}>3% de la población</Text>
                <Text style={styles.tableCell}>No detectable</Text>
                <Text style={styles.tableCell}>Sugiere posible diseminación de células tumorales circulantes.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Células T citotóxicas (CD8+): El porcentaje elevado podría estar relacionado con una respuesta inmune activa, posiblemente dirigida hacia la presencia de células tumorales.</Text>
              <Text style={styles.interpretationText}>• Células T helper (CD4+): Su disminución puede indicar un desequilibrio inmunológico, a menudo observado en pacientes con carga tumoral significativa o inmunosupresión.</Text>
              <Text style={styles.interpretationText}>• Células tumorales circulantes (EpCAM+): La presencia de estas células es consistente con una diseminación tumoral sistémica y puede asociarse con enfermedad metastásica en cánceres epiteliales como el de próstata.</Text>
            </View>
          </View>
        )

        case "Mutaciones Específicas":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de Mutaciones Específicas</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Gen Analizado</Text>
                <Text style={styles.tableCell}>Mutación Detectada</Text>
                <Text style={styles.tableCell}>Frecuencia Alelica (%)</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>TP53</Text>
                <Text style={styles.tableCell}>R273H (Codón 273, Exón 8)</Text>
                <Text style={styles.tableCell}>45%</Text>
                <Text style={styles.tableCell}>Mutación funcional asociada a pérdida de función</Text>
                <Text style={styles.tableCell}>Indicativa de progresión tumoral y mal pronóstico.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>BRCA2</Text>
                <Text style={styles.tableCell}>S1982R (Codón 1982, Exón 11)</Text>
                <Text style={styles.tableCell}>38%</Text>
                <Text style={styles.tableCell}>Mutación hereditaria frecuente en cáncer de próstata</Text>
                <Text style={styles.tableCell}>Sugiere sensibilidad a inhibidores de PARP.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Células T helper</Text>
                <Text style={styles.tableCell}>CD4+</Text>
                <Text style={styles.tableCell}>18%</Text>
                <Text style={styles.tableCell}>30-40%</Text>
                <Text style={styles.tableCell}>Disminuidas, podrían indicar supresión inmune.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PIK3CA</Text>
                <Text style={styles.tableCell}>E545K (Codón 545, Exón 9)</Text>
                <Text style={styles.tableCell}>20%</Text>
                <Text style={styles.tableCell}>Activación de la vía PI3K/AKT</Text>
                <Text style={styles.tableCell}>Asociada con resistencia a terapias estándar.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>AR</Text>
                <Text style={styles.tableCell}>T878A (Codón 878, Exón 8)</Text>
                <Text style={styles.tableCell}>15%</Text>
                <Text style={styles.tableCell}>Alteración en el receptor de andrógenos</Text>
                <Text style={styles.tableCell}>Puede generar resistencia a terapia hormonal</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Mutación TP53 R273H: Alteración frecuente en tumores avanzados, asociada con evasión de la apoptosis y resistencia al tratamiento.</Text>
              <Text style={styles.interpretationText}>• Mutación BRCA2 S1982R: Variante que sugiere predisposición genética y sensibilidad a terapias dirigidas, como inhibidores de PARP (e.g., olaparib).</Text>
              <Text style={styles.interpretationText}>• Mutación PIK3CA E545K: Implicada en la activación constitutiva de la vía de señalización PI3K, lo que podría limitar la eficacia de terapias hormonales y justificar el uso de terapias dirigidas.</Text>
              <Text style={styles.interpretationText}>• Mutación AR T878A: Asociada con resistencia adquirida a terapias hormonales como enzalutamida, pero sugiere la posibilidad de probar alternativas terapéuticas.</Text>
            </View>

          </View>
        )

        case "PCR en Tiempo Real":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de PCR en Tiempo Real</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Gen/Biomarcador</Text>
                <Text style={styles.tableCell}>Mutación o Nivel Detectado</Text>
                <Text style={styles.tableCell}>Ct Value</Text>
                <Text style={styles.tableCell}>Rango de Referencia</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
                <Text style={styles.tableCell}>Relevancia Clínica</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>PSA (KLK3)</Text>
                <Text style={styles.tableCell}>Sobreexpresión (8x basal)</Text>
                <Text style={styles.tableCell}>20.3</Text>
                <Text style={styles.tableCell}>Ct  25</Text>
                <Text style={styles.tableCell}>Indicativo de actividad tumoral elevada</Text>
                <text style={styles.tableCell}>Utilizado como marcador diagnóstico y de seguimiento.</text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>TMPRSS2-ERG</Text>
                <Text style={styles.tableCell}>Fusión génica detectada</Text>
                <Text style={styles.tableCell}>22.8</Text>
                <Text style={styles.tableCell}>No detectable</Text>
                <Text style={styles.tableCell}>Alteración común en cáncer de próstata agresivo</Text>
                <Text style={styles.tableCell}>Implicado en la progresión tumoral.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>AR-V7</Text>
                <Text style={styles.tableCell}>Isoforma variante detectada</Text>
                <Text style={styles.tableCell}>24.5</Text>
                <Text style={styles.tableCell}>No detectable</Text>
                <Text style={styles.tableCell}>Resistencia a terapias antiandrogénicas</Text>
                <Text style={styles.tableCell}>Sugiere uso limitado de enzalutamida o abiraterona.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>BRCA2</Text>
                <Text style={styles.tableCell}>Mutación Q356X (deleción puntual)</Text>
                <Text style={styles.tableCell}>No amplificación</Text>
                <Text style={styles.tableCell}>No detectable</Text>
                <Text style={styles.tableCell}>Variante asociada a predisposición genética</Text>
                <Text style={styles.tableCell}>Sensibilidad potencial a inhibidores de PARP.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Sobreexpresión de PSA: Compatible con actividad tumoral elevada. Puede ser utilizado como un marcador sérico para monitoreo de respuesta al tratamiento.</Text>
              <Text style={styles.interpretationText}>• Fusión TMPRSS2-ERG: Confirmada, lo que refuerza el diagnóstico molecular de un cáncer de próstata con perfil agresivo.</Text>
              <Text style={styles.interpretationText}>• Isoforma AR-V7: La presencia de esta isoforma está correlacionada con resistencia a terapias hormonales estándar, lo que puede influir en la selección del tratamiento.</Text>
              <Text style={styles.interpretationText}>• BRCA2 sin amplificación: La ausencia de mutaciones o expresiones detectables adicionales en BRCA2 no descarta la necesidad de evaluaciones genéticas familiares.</Text>
            </View>
          </View>
        )

        case "Microscopía Electrónica":
        return (
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resultados de PCR en Tiempo Real</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableCell}>Estructura Analizada</Text>
                <Text style={styles.tableCell}>Alteraciones Detectadas</Text>
                <Text style={styles.tableCell}>Hallazgos Detallados</Text>
                <Text style={styles.tableCell}>Significado Clínico</Text>
              </View>
              
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Núcleo</Text>
                <Text style={styles.tableCell}>Pleomorfismo nuclear</Text>
                <Text style={styles.tableCell}>Presencia de núcleos agrandados, irregulares, con cromatina densa y margina l.</Text>
                <Text style={styles.tableCell}>Indicativo de actividad tumoral maligna.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Mitocondrias</Text>
                <Text style={styles.tableCell}>Alteraciones mitocondriales</Text>
                <Text style={styles.tableCell}>Mitocondrias con crestas dismórficas y vacuolización significativa.</Text>
                <Text style={styles.tableCell}>Asociado con metabolismo tumoral aberrante.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Retículo Endoplásmico</Text>
                <Text style={styles.tableCell}>Dilatación del RER</Text>
                <Text style={styles.tableCell}>Observado un retículo endoplásmico rugoso prominente y dilatado.</Text>
                <Text style={styles.tableCell}>Posible señal de estrés celular.</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Membranas Plasmáticas</Text>
                <Text style={styles.tableCell}>Invaginaciones y proyecciones irregulares</Text>
                <Text style={styles.tableCell}>Microvellosidades aumentadas y formación de estructuras similares a pseudópodos.</Text>
                <Text style={styles.tableCell}>Asociado con invasión tumoral y metástasis.</Text>
              </View>
              {/* Más variantes genéticas aquí */}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Interpretación de los Resultados</Text>
              <Text style={styles.interpretationText}>• Pleomorfismo nuclear y alteraciones mitocondriales: Estas características son consistentes con células de alta malignidad y metabolismo tumoral alterado, típico de cáncer de próstata avanzado.</Text>
              <Text style={styles.interpretationText}>• Dilatación del RER: Sugiere estrés en la síntesis de proteínas, posiblemente debido a demandas metabólicas elevadas del tumor.</Text>
              <Text style={styles.interpretationText}>• Cambios en membranas plasmáticas: Las invaginaciones y pseudópodos observados son consistentes con fenómenos de migración celular y metástasis.</Text>
              <Text style={styles.interpretationText}>• Lisosomas agrandados: Indicativos de procesos autofágicos activos, que pueden estar relacionados con mecanismos de resistencia tumoral.</Text>
            </View>
          </View>
        )
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

