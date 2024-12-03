import React from "react";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { useState } from "react";
import { InputLabel } from "@mui/material";

const MedicData = () => {
  const [institution, setInstitution] = React.useState("");
  const [especiality, setEspeciality] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setInstitution(event.target.value as string);
  };

  const handleChangeEspeciality = (event: SelectChangeEvent) => {
    setEspeciality(event.target.value as string);
  };

  // Usé material UI para los inputs y selects

  return (
    <div className="m-4">
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

        {/* Form Grid */}

        <div className="grid grid-cols-2 gap-6">
          {/* //Form Items */}
          <div>
            <input
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="NOMBRE AUTORRELLENADO"
            />
          </div>
          <div>
            <input
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="CÉDULA AUTORRELLENADA"
            />
          </div>

          <div>
            <InputLabel id="institution">
              NOMBRE DE INSTITUCIÓN REMISORA
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="institution"
              id="id_Institution"
              value={institution}
              label="Institución"
              onChange={handleChange}
            >
              <MenuItem value={"Institución_1"}>Institución 1</MenuItem>
              <MenuItem value={"Institución_2"}>Institución 2</MenuItem>
              <MenuItem value={"Institución_3"}>Institución 3</MenuItem>
            </Select>
          </div>

          <div className="pt-6">
            <input
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="EMAIL AUTORRELLENADO"
            />
          </div>

          <div className="pt-6">
            <input
              className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
              placeholder="CÉDULA PROFESIONAL AUTORRELLENADO"
            />
          </div>

          <div>
            <InputLabel id="especiality">
              ESPECIALIDAD
            </InputLabel>
            <Select
              className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
              labelId="especiality"
              id="id_Especiality"
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
    </div>
  );
};

export default MedicData;
