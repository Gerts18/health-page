import React from "react";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { useState } from "react";
import { Checkbox, InputLabel } from "@mui/material";

const RequestMedic = () => {
  const [gender, setGender] = React.useState("");
  const [cancerType, setCancerType] = React.useState("");
  const [test, setTest] = React.useState("");
  const [biopsy, setBiopsy] = React.useState("");
  const [blocks, setBlocks] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleChangeCancerType = (event: SelectChangeEvent) => {
    setCancerType(event.target.value as string);
  };

  const handleChangeTest = (event: SelectChangeEvent) => {
    setTest(event.target.value as string);
  };

  const handleChangeBiopsy = (event: SelectChangeEvent) => {
    setBiopsy(event.target.value as string);
  };

  const handleChangeBlocks = (event: SelectChangeEvent) => {
    setBlocks(event.target.value as string);
  };

  return (
    <div className="m-4">
        
        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 p-4 rounded-full">
            {/* ÍCONO DE DATOS DEL MÉDICO */}
          </div>
          <h2 className="ml-4 text-2xl font-bold text-gray-700">
            Solicitud de estudios
          </h2>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Form Items */}
          <div className="">
            <input placeholder="NOMBRE DEL PACIENTE" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"/>
            
          </div>
          <div className="">
            <input placeholder="EDAD" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"/>
          </div>

          <div>
            <InputLabel id="institution">
              SEXO
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="institution"
              id="id_Institution"
              value={gender}
              label="Institución"
              onChange={handleChange}
            >
              <MenuItem value={"Institución_1"}>Masculino</MenuItem>
              <MenuItem value={"Institución_2"}>Femenino</MenuItem>
            </Select>
          </div>

          <div className="pt-6">
            <input placeholder="CELULAR AUTORRELLENADO" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"/>
          </div>
          
          <div>
            <InputLabel id="cancerType">
              TIPO DE CÁNCER
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="institution"
              id="id_Institution"
              value={cancerType}
              label="Institución"
              onChange={handleChangeCancerType}
            >
              <MenuItem value="Cáncer_de_Cabeza_y_Cuello">Cáncer de Cabeza y Cuello</MenuItem>
              <MenuItem value="Germinal">Germinal</MenuItem>
              <MenuItem value="Cáncer_de_Colon">Cáncer de Colon</MenuItem>
              <MenuItem value="Cáncer_de_Ovario">Cáncer de Ovario</MenuItem>
              <MenuItem value="Cáncer_de_Pulmón">Cáncer de Pulmón</MenuItem>
              <MenuItem value="Cáncer_de_Seno">Cáncer de Seno</MenuItem>
              <MenuItem value="Cáncer_de_Próstata">Cáncer de Próstata</MenuItem>
              <MenuItem value="Melanoma">Melanoma</MenuItem>
              <MenuItem value="Tumores_del_Estroma_Gastrointestinal">Tumores del Estroma Gastrointestinal</MenuItem>
              <MenuItem value="Tumores_del_Sistema_Nervioso_Central">Tumores del Sistema Nervioso Central</MenuItem>
              <MenuItem value="Paneles_NGS">Paneles NGS</MenuItem>
            </Select>
          </div>

          <div>
            <InputLabel id="test">
              PRUEBA
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="test"
              id="id_Test"
              value={test}
              label="Test"
              onChange={handleChangeTest}
            >
              <MenuItem value="Inmunohistoquímica_IHC">Inmunohistoquímica (IHC)</MenuItem>
              <MenuItem value="Secuenciación_Genética_NGS">Secuenciación Genética (NGS)</MenuItem>
              <MenuItem value="Hibridación_in_situ_FISH">Hibridación in situ (FISH)</MenuItem>
              <MenuItem value="PCR_en_Tiempo_Real">PCR en Tiempo Real</MenuItem>
              <MenuItem value="Panel_de_Biomarcadores">Panel de Biomarcadores</MenuItem>
              <MenuItem value="Citometría_de_Flujo">Citometría de Flujo</MenuItem>
              <MenuItem value="Microscopía_Electrónica">Microscopía Electrónica</MenuItem>
              <MenuItem value="Estudios_de_Patología_Molecular">Estudios de Patología Molecular</MenuItem>
              <MenuItem value="Mutaciones_Específicas">Mutaciones Específicas (p.ej., EGFR, BRCA1/2)</MenuItem>
            </Select>
          </div>

          <div>
            <InputLabel id="biopsy">
              BIOPSIA REMETIDA
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="biopsy"
              id="id_Biopsy"
              value={biopsy}
              label="Test"
              onChange={handleChangeBiopsy}
            >
              <MenuItem value="Tejido_Sólido">Tejido Sólido</MenuItem>
              <MenuItem value="Aspirado_de_Médula_Ósea">Aspirado de Médula Ósea</MenuItem>
              <MenuItem value="Líquido_Pleural">Líquido Pleural</MenuItem>
              <MenuItem value="Líquido_Peritoneal">Líquido Peritoneal</MenuItem>
              <MenuItem value="Ganglio_Linfático">Ganglio Linfático</MenuItem>
              <MenuItem value="Tejido_Tumoral">Tejido Tumoral</MenuItem>
              <MenuItem value="Fragmento_Óseo">Fragmento Óseo</MenuItem>
              <MenuItem value="Tejido_Pulmonar">Tejido Pulmonar</MenuItem>
              <MenuItem value="Tejido_Mamario">Tejido Mamario</MenuItem>
              <MenuItem value="Muestra_de_Piel">Muestra de Piel</MenuItem>
            </Select>
          </div>

          <div>
            <InputLabel id="blocks">
              BLOQUES Y/O LÁMINAS
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="blocks"
              id="id_Blocks"
              value={blocks}
              label="Bloques"
              onChange={handleChangeBlocks}
            >
              <MenuItem value="Bloques_en_Parafina">Bloques en Parafina</MenuItem>
              <MenuItem value="Láminas_para_Microscopia">Láminas para Microscopia</MenuItem>
              <MenuItem value="Láminas_con_Tinción_Hematoxilina_Eosina">Láminas con Tinción Hematoxilina-Eosina (H&E)</MenuItem>
              <MenuItem value="Láminas_con_Tinción_Especial">Láminas con Tinción Especial</MenuItem>
              <MenuItem value="Muestras_sin_Procesar">Muestras sin Procesar</MenuItem>
              <MenuItem value="Muestras_Decalcificadas">Muestras Decalcificadas</MenuItem>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-6 w-full h-auto border-2 border-gray-300 rounded-md bg-white p-8">
          <div>
            <p className="text-gray-700">IDENTIFICACIÓN (OPCIONAL)*</p>
            <input type="file" className=""/>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 w-full h-auto border-2 border-gray-300 rounded-md bg-white p-8">
          <div>
            <p className="text-gray-700">Firmado y sellado</p>
            <p className="text-gray-700">Médico | Tamaño</p>
            <p className="text-gray-700">Máximo 3MB</p>
            <input type="file" className=""/>
          </div>
        </div>

        </div>
      </div>

      <div className="flex justify-center items-center">
          <Checkbox/>
          <p>Autorizo la <span className="text-[#547EED] hover:underline hover:cursor-pointer">política y privacidad de datos</span></p>
      </div>

      <div className="flex justify-center items-center">
        <button className="w-auto h-auto px-16 py-2 bg-[#EB356E] rounded-full text-white mt-4 font-bold">ENVIAR</button>
      </div>


    </div>
  )
}

export default RequestMedic