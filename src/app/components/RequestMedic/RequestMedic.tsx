import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";

const RequestMedic = () => {
  const [gender, setGender] = React.useState("");
  const [cancerType, setCancerType] = React.useState("");
  const [test, setTest] = React.useState("");
  const [biopsy, setBiopsy] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [especiality, setEspeciality] = React.useState("");

  const handleChangeInstitution = (event: SelectChangeEvent) => {
    setInstitution(event.target.value as string);
  };

  const handleChangeEspeciality = (event: SelectChangeEvent) => {
    setEspeciality(event.target.value as string);
  };


  const handleChangeGender = (event: SelectChangeEvent) => {
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

  const { register, handleSubmit } = useForm();
  const dataToJSON = (data) => {
    console.log("Objeto JSON:", data); // El objeto tal cual
    const jsonString = JSON.stringify(data);
    console.log("JSON String:", jsonString); // Objeto convertido a string
    //falta obtener las imágenes en base64 y enviarlas al backend
  };

  return (
    <div className="m-4">
        {/* Usé material UI para los inputs y selects */}
        
        <form onSubmit={handleSubmit(data => {dataToJSON(data)})}>
        <div className="bg-gray-50 w-full h-auto p-8 mb-16 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 p-4 rounded-full">
            {/* ÍCONO DE DATOS DEL MÉDICO */}
          </div>
          <h2 className="ml-4 text-2xl font-bold text-gray-700">
            Datos de médico
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <input id="name" type="text" {...register("name")}
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="NOMBRE AUTORRELLENADO"
            />
          </div>
          <div>
            <input id="lastName" type="text" {...register("lastName")}
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="APELLIDOS AUTORRELLENADO"
            />
          </div>

          <div>
            <InputLabel id="institution">
              NOMBRE DE INSTITUCIÓN REMISORA
            </InputLabel>
            <Select  {...register("institution")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="institution"
              id="institution"
              value={institution}
              label="Institución"
              onChange={handleChangeInstitution}
            >
              <MenuItem value={"Institución_1"}>Institución 1</MenuItem>
              <MenuItem value={"Institución_2"}>Institución 2</MenuItem>
              <MenuItem value={"Institución_3"}>Institución 3</MenuItem>
            </Select>
          </div>

          <div className="pt-6">
            <input id="email" type="text" {...register("email")}
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="EMAIL AUTORRELLENADO"
            />
          </div>

          <div className="pt-6">
            <input id="cedula" type="text" {...register("cedula")}
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="CÉDULA PROFESIONAL AUTORRELLENADO"
            />
          </div>

          <div>
            <InputLabel id="especiality">
              ESPECIALIDAD
            </InputLabel>
            <Select {...register("especiality")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="especiality"
              id="especiality"
              value={especiality}
              label="Especialidad"
              onChange={handleChangeEspeciality}
            >
              <MenuItem value="Oncología_Médica">Oncología Médica</MenuItem>
              <MenuItem value="Oncología_Quirúrgica">Oncología Quirúrgica</MenuItem>
              <MenuItem value="Oncología_Pediátrica">Oncología Pediátrica</MenuItem>
              <MenuItem value="Hematología_Oncológica">Hematología Oncológica</MenuItem>
              <MenuItem value="Radioterapia_Oncológica">Radioterapia Oncológica</MenuItem>
              <MenuItem value="Ginecología_Oncológica">Ginecología Oncológica</MenuItem>
              <MenuItem value="Dermato-Oncología">Dermato-Oncología</MenuItem>
              <MenuItem value="Neuro-Oncología">Neuro-Oncología</MenuItem>
              <MenuItem value="Oncología_Pulmonar">Oncología Pulmonar</MenuItem>
              <MenuItem value="Uro-Oncología">Uro-Oncología</MenuItem>
              <MenuItem value="Ortopedia_Oncológica">Ortopedia Oncológica</MenuItem>
              <MenuItem value="Cirugía_Torácica_Oncológica">Cirugía Torácica Oncológica</MenuItem>
              <MenuItem value="Medicina_Paliativa_en_Oncología">Medicina Paliativa en Oncología</MenuItem>
              <MenuItem value="Patología_Oncológica">Patología Oncológica</MenuItem>
            </Select>
          </div>
        </div>
      </div>



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
            <input id="namePac" type="text" {...register("namePac")} 
            placeholder="NOMBRE DEL PACIENTE" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
            />
          </div>
          <div>
            <input id="edadPac" type="text" {...register("edadPac")}
            placeholder="EDAD" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"/>
          </div>

          <div>
            <InputLabel id="gender">
              SEXO
            </InputLabel>
            <Select {...register("gender")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="gender"
              id="gender"
              value={gender}
              label="Institución"
              onChange={handleChangeGender}
            >
              <MenuItem value={"Masculino"}>Masculino</MenuItem>
              <MenuItem value={"Femenino"}>Femenino</MenuItem>
            </Select>
          </div>

          <div className="pt-6">
            <input id="phonePac" type="text" {...register("phonePac")}
            placeholder="CELULAR AUTORRELLENADO" className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"/>
          </div>
          
          <div>
            <InputLabel id="cancerType">
              TIPO DE CÁNCER
            </InputLabel>
            <Select {...register("cancerType")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="cancerType"
              id="cancerType"
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
            <Select {...register("test")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="test"
              id="test"
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
            <Select {...register("biopsy")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="biopsy"
              id="biopsy"
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
            <Select {...register("blocks")}
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="blocks"
              id="blocks"
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
            <input type="file" id="ine" {...register("ine")}/>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 w-full h-auto border-2 border-gray-300 rounded-md bg-white p-8">
          <div>
            <p className="text-gray-700">Firmado y sellado</p>
            <p className="text-gray-700">Médico | Tamaño</p>
            <p className="text-gray-700">Máximo 3MB</p>
            <input type="file" id="application" {...register("application")}/>
          </div>
        </div>

        </div>
      </div>

      <div className="flex justify-center items-center">
          <Checkbox id="checkbox" {...register("checkbox")}/>
          <p>Autorizo la <span className="text-[#547EED] hover:underline hover:cursor-pointer">política y privacidad de datos</span></p>
      </div>

      <div className="flex justify-center items-center">
        <button className="w-auto h-auto px-16 py-2 bg-[#EB356E] rounded-full text-white mt-4 font-bold">ENVIAR</button>
      </div>
      </form>

    </div>
  )
}

export default RequestMedic