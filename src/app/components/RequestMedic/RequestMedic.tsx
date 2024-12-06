import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, InputLabel } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const RequestMedic = () => {
  const [gender, setGender] = React.useState("");
  const [institutionRem, setInstitutionRem] = React.useState("");
  const [specialty, setSpecialty] = React.useState("");
  const [typeTest, setTypeTest] = React.useState("");

  const handleChangeInstitutionRem = (event: SelectChangeEvent) => {
    setInstitutionRem(event.target.value as string);
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleChangeSpecialty = (event: SelectChangeEvent) => {
    setSpecialty(event.target.value as string);
  };

  const handleChangeTypeTest = (event: SelectChangeEvent) => {
    setTypeTest(event.target.value as string);
  };

  const [dateData, setDateData] = React.useState<Dayjs | null>(dayjs());

  const { register, handleSubmit, setValue } = useForm();
  const dataForm = (data: object) => {
    console.log(data);
  };

  return (
    <div className="m-4">
      <Stack>
        <Alert
          variant="filled"
          severity="success"
          className="flex w-auto justify-center"
        >
          Se ha enviado correctamente.
        </Alert>
      </Stack>

      <form
        onSubmit={handleSubmit((data) => {
          dataForm(data);
        })}
      >
        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md border">
          {/* Header */}
          <div className="items-center mb-8 grid grid-cols-2 gap-6">
            <div className="flex">
              <div className="bg-blue-500 p-4 rounded-full"></div>
              <h2 className="ml-4 text-2xl font-bold text-gray-700">
                Datos de médico
              </h2>
            </div>
            <div>
              <div>
                <InputLabel id="institutionRem">
                  NOMBRE DE INSTITUCIÓN REMISORA
                </InputLabel>
                <Select
                  {...register("institutionRem")}
                  className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
                  labelId="institution"
                  id="institution"
                  value={institutionRem}
                  label="Institución"
                  onChange={handleChangeInstitutionRem}
                >
                  <MenuItem value={"Institución_1"}>Institución 1</MenuItem>
                  <MenuItem value={"Institución_2"}>Institución 2</MenuItem>
                  <MenuItem value={"Institución_3"}>Institución 3</MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="NOMBRE(S)"
              />
            </div>
            <div>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="APELLIDOS"
              />
            </div>

            <div>
              <InputLabel id="gender">SEXO</InputLabel>
              <Select
                {...register("gender")}
                className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
                labelId="gender"
                id="gender"
                value={gender}
                label="gender"
                onChange={handleChangeGender}
              >
                <MenuItem value={"masculino"}>MASCULINO</MenuItem>
                <MenuItem value={"femenino"}>FEMENINO</MenuItem>
              </Select>
            </div>

            <div className="mt-4 shadow-md w-auto h-auto">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="FECHA DE NACIMIENTO"
                    className="w-full h-14 border border-gray-300 rounded-md bg-white"
                    value={dateData}
                    onChange={(newValue) => {
                      setDateData(newValue); // Actualizamos el estado local
                      setValue("dateOfBirth", newValue, {
                        shouldValidate: true,
                      }); // Sincronizamos con el formulario
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="TELÉFONO"
              />
            </div>

            <div>
              <input
                id="contactPhone"
                type="text"
                {...register("contactPhone")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="TELÉFONO DE CONTACTO"
              />
            </div>

            <div>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="CORREO ELECTRÓNICO"
              />
            </div>

            <div>
              <input
                id="address"
                type="text"
                {...register("address")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="DIRECCIÓN"
              />
            </div>

            <div>
              <input
                id="city"
                type="text"
                {...register("city")}
                className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                placeholder="CIUDAD"
              />
            </div>

            <div className=" flex items-center w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md">
              <p className="pr-2 text-gray-400">CREDENCIAL (OPCIONAL)</p>
              <input
                type="file"
                id="ine"
                {...register("ine")}
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-5 mb-6 w-full justify-center">
            <Accordion>
              <AccordionSummary
                className="shadow-md border-2 border-gray-300 rounded-md bg-white p-2"
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>¿TIENES CÉDULA PROFESIONAL?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      id="cedula"
                      type="text"
                      {...register("cedula")}
                      className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                      placeholder="CÉDULA PROFESIONAL"
                    />
                  </div>

                  <div>
                    <input
                      id="institution"
                      type="text"
                      {...register("institution")}
                      className="w-full h-14 border-2 border-gray-300 rounded-md bg-white p-2 shadow-md"
                      placeholder="INSTIUCIÓN"
                    />
                  </div>

                  <div>
                    <InputLabel id="specialty">ESPECIALIDAD</InputLabel>
                    <Select
                      {...register("specialty")}
                      className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
                      labelId="specialty"
                      id="specialty"
                      value={specialty}
                      label="specialty"
                      onChange={handleChangeSpecialty}
                    >
                      <MenuItem value={"oncologia_medica"}>
                        ONCOLOGÍA MÉDICA
                      </MenuItem>
                      <MenuItem value={"oncologia_quirurgica"}>
                        ONCOLOGÍA QUIRÚRGICA
                      </MenuItem>
                      <MenuItem value={"oncologia_pediatrica"}>
                        ONCOLOGÍA PEDIÁTRICA
                      </MenuItem>
                      <MenuItem value={"hematologia_oncologica"}>
                        HEMATOLOGÍA ONCOLÓGICA
                      </MenuItem>
                      <MenuItem value={"radioterapia_oncologica"}>
                        RADIOTERAPIA ONCOLÓGICA
                      </MenuItem>
                      <MenuItem value={"ginecologia_oncologica"}>
                        GINECOLOGÍA ONCOLÓGICA
                      </MenuItem>
                      <MenuItem value={"dermato_oncologia"}>
                        DERMATO-ONCOLOGÍA
                      </MenuItem>
                      <MenuItem value={"neuro_oncologia"}>
                        NEURO-ONCOLOGÍA
                      </MenuItem>
                      <MenuItem value={"oncologia_pulmonar"}>
                        ONCOLOGÍA PULMONAR
                      </MenuItem>
                      <MenuItem value={"uro_oncologia"}>URO-ONCOLOGÍA</MenuItem>
                      <MenuItem value={"ortopedia_oncologica"}>
                        ORTOPEDIA ONCOLÓGICA
                      </MenuItem>
                      <MenuItem value={"cirugia_toracica_oncologica"}>
                        CIRUGÍA TORÁCICA ONCOLÓGICA
                      </MenuItem>
                      <MenuItem value={"medicina_paliativa_oncologia"}>
                        MEDICINA PALIATIVA EN ONCOLOGÍA
                      </MenuItem>
                      <MenuItem value={"patologia_oncologica"}>
                        PATOLOGÍA ONCOLÓGICA
                      </MenuItem>
                    </Select>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md border">
          <div className="items-center mb-8 grid grid-cols-2 gap-6">
            <div className="flex">
              <div className="bg-blue-500 p-4 rounded-full"></div>
              <h2 className="ml-4 text-2xl font-bold text-gray-700">
                Solicitud de estudios
              </h2>
            </div>
            <div>
              <div>
                <InputLabel id="typeTest">TIPO DE PRUEBA</InputLabel>
                <Select
                  {...register("typeTest")}
                  className="w-full h-14 border border-gray-300 rounded-md bg-white shadow-md"
                  labelId="typeTest"
                  id="typeTest"
                  value={typeTest}
                  label="typeTest"
                  onChange={handleChangeTypeTest}
                >
                  <MenuItem value={"Inmunohistoquímica (IHC)"}>
                    Inmunohistoquímica (IHC)
                  </MenuItem>
                  <MenuItem value={"Secuenciación Genética (NGS)"}>
                    Secuenciación Genética (NGS)
                  </MenuItem>
                  <MenuItem value={"Hibridación in situ (FISH)"}>
                    Hibridación in situ (FISH)
                  </MenuItem>
                  <MenuItem value={"PCR en Tiempo Real"}>
                    PCR en Tiempo Real
                  </MenuItem>
                  <MenuItem value={"Panel de Biomarcadores"}>
                    Panel de Biomarcadores
                  </MenuItem>
                  <MenuItem value={"Citometría de Flujo"}>
                    Citometría de Flujo
                  </MenuItem>
                  <MenuItem value={"Microscopía Electrónica"}>
                    Microscopía Electrónica
                  </MenuItem>
                  <MenuItem value={"Estudios de Patología Molecular"}>
                    Estudios de Patología Molecular
                  </MenuItem>
                  <MenuItem value={"Mutaciones Específicas"}>
                    Mutaciones Específicas
                  </MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-gray-500 font-bold text-xl">
                Orden Médica del especialista que solicita el estudio o Formato
                de Solicitud de Estudios
              </p>
            </div>
            <div className="w-full h-auto border-2 border-gray-300 rounded-md bg-white p-2 py-4 shadow-md">
              <p className="text-gray-400">Firmado y Sellado</p>
              <p className="text-gray-400">Médico | Tamaño</p>
              <p className="text-gray-400">Máximo 3MB</p>
              <input
                type="file"
                id="medicOrder"
                {...register("medicOrder")}
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex w-full h-1 mb-12 rounded-full bg-blue-200" />

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-gray-500 font-bold text-xl">
                Voucher o Bono si fue emitido por su médico tratante.
              </p>
            </div>
            <div className="w-full h-auto border-2 border-gray-300 rounded-md bg-white p-2 py-4 shadow-md">
              <p className="text-gray-400">Firmado y Sellado</p>
              <p className="text-gray-400">Médico | Tamaño</p>
              <p className="text-gray-400">Máximo 3MB</p>
              <input
                type="file"
                id="voucher"
                {...register("voucher")}
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex w-full h-1 mb-12 rounded-full bg-blue-200" />

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-500 font-bold text-xl">
                Resumen de Historia Clínica
              </p>
            </div>
            <div className="w-full h-auto border-2 border-gray-300 rounded-md bg-white p-2 py-4 shadow-md">
              <p className="text-gray-400">Firmado y Sellado</p>
              <p className="text-gray-400">Médico | Tamaño</p>
              <p className="text-gray-400">Máximo 3MB</p>
              <input
                type="file"
                id="clinicalHistory"
                {...register("clinicalHistory")}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Checkbox id="checkbox" {...register("checkbox")} />
          <p>
            Autorizo la{" "}
            <span className="text-[#547EED] hover:underline hover:cursor-pointer">
              política y privacidad de datos
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button className="w-auto h-auto px-16 py-2 bg-[#EB356E] rounded-full text-white mt-4 font-bold">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestMedic;
