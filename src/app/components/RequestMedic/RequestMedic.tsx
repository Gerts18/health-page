import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const RequestMedic = () => {
  const [gender, setGender] = useState("");
  const [institutionRem, setInstitutionRem] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [typeTest, setTypeTest] = useState("");
  const [dateData, setDateData] = useState<Dayjs | null>(dayjs());
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

  const { register, handleSubmit, setValue } = useForm();

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

  const [isCedulaEnabled, setIsCedulaEnabled] = useState(false); // Estado para controlar el checkbox

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCedulaEnabled(event.target.checked); // Actualiza el estado según el checkbox
  };

  const handleClick = () => {
    setTimeout(() => {
      setShowAlert(true); // Mostrar la alerta
    }, 500); // 500ms
    setTimeout(() => {
      setShowAlert(false); // Ocultar la alerta después de 3 segundos
    }, 3000); // 3000ms
  };

  //guarda los nombres de los archivos para mostrarlos en la página
  const [fileIne, setFileIne] = useState("");
  const handleFileChangeIne = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileIne(e.target.files[0].name); // Guarda el nombre del archivo
    }
  };

  const [fileMedicOrder, setFileMedicOrder] = useState("");
  const handleFileChangeMedicOrder = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileMedicOrder(e.target.files[0].name); // Guarda el nombre del archivo
    }
  };

  const [fileVoucher, setFileVoucher] = useState("");
  const handleFileChangeVoucher = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileVoucher(e.target.files[0].name); // Guarda el nombre del archivo
    }
  };

  const [fileClinicalH, setFileClinicalH] = useState("");
  const handleFileChangeClinicalH = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileClinicalH(e.target.files[0].name); // Guarda el nombre del archivo
    }
  };

  //guarda los archivos
  const [fileIneObject, setFileIneObject] = useState<File | null>(null);
  const onChangeIneObject = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileIneObject(e.target.files[0]); // Guarda el archivo
    }
  };

  const [fileMedicOrderObject, setFileMedicOrderObject] = useState<File | null>(null);
  const onChangeMedicOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileMedicOrderObject(e.target.files[0]); // Guarda el archivo
    }
  };

  const [fileVoucherObject, setFileVoucherObject] = useState<File | null>(null);
  const onChangeVoucher = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileVoucherObject(e.target.files[0]); // Guarda el archivo
    }
  };

  const [fileClinicalHistory, setFileClinicalHistory] = useState<File | null>(null);
  const onChangeClinicalH = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileClinicalHistory(e.target.files[0]); // Guarda el archivo
    }
  };

  //guarda los datos del formulario para mandarlo al backend
  const dataForm = (data: object) => {
    const totalData = { data, fileIneObject, fileMedicOrderObject, fileVoucherObject, fileClinicalHistory };
    console.log(totalData);
  };

  return (
    <div className="m-4 pb-4">
      <form
        onSubmit={handleSubmit((data) => {
          dataForm(data);
        })}
      >
        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md border">
          {/* Header */}
          <div className="items-center mb-8 grid grid-cols-2 gap-6">
            <div className="flex">
              <div>
                <AssignmentRoundedIcon
                  className="text-white bg-blue-500 rounded-full p-2"
                  sx={{ fontSize: 60 }}
                />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-700 flex justify-center items-center">
                Datos del Solicitante
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

            <div className="items-center w-full h-auto border-2 border-gray-300 rounded-md bg-white p-2 shadow-md">
              <p className="pr-2 text-gray-400 mb-2">CREDENCIAL (OPCIONAL)</p>
              <input
                type="file"
                // id="ine"
                // {...register("ine")}
                className="hover:cursor-pointer hidden"
                onChange={(e)=>{
                  handleFileChangeIne(e);
                  onChangeIneObject(e);
                }}
              />
              {/* Botón personalizado */}
              <label
                htmlFor="ine"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-200"
              >
                Subir archivo
              </label>
              {fileIne ? (
                <p className="mt-2 text-sm text-gray-600">
                  Archivo seleccionado:{" "}
                  <span className="font-medium">{fileIne}</span>
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">
                  No se ha seleccionado archivo
                </p>
              )}
            </div>
          </div>

          <div className="pt-5 mb-6 w-full justify-center">
            <div className="flex items-center mb-6">
              {/* Checkbox */}
              <Checkbox
                id="checkboxCed"
                {...register("checkboxCed")}
                checked={isCedulaEnabled}
                onChange={handleCheckboxChange}
              />
              <p className="text-lg">¿Tienes Cédula Profesional?</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Campo de Cédula Profesional */}
              <div>
                <input
                  id="cedula"
                  type="text"
                  {...register("cedula")}
                  disabled={!isCedulaEnabled} // Campo habilitado/deshabilitado
                  className={`w-full h-14 border-2 rounded-md bg-white p-2 shadow-md ${
                    isCedulaEnabled
                      ? "border-gray-300"
                      : "border-gray-200 bg-gray-100"
                  }`}
                  placeholder="CÉDULA PROFESIONAL"
                />
              </div>

              {/* Campo de Institución */}
              <div>
                <input
                  id="institution"
                  type="text"
                  {...register("institution")}
                  disabled={!isCedulaEnabled} // Campo habilitado/deshabilitado
                  className={`w-full h-14 border-2 rounded-md bg-white p-2 shadow-md ${
                    isCedulaEnabled
                      ? "border-gray-300"
                      : "border-gray-200 bg-gray-100"
                  }`}
                  placeholder="INSTITUCIÓN"
                />
              </div>

              {/* Select de Especialidad */}
              <div>
                <InputLabel id="specialty">ESPECIALIDAD</InputLabel>
                <Select
                  {...register("specialty")}
                  disabled={!isCedulaEnabled} // Select habilitado/deshabilitado
                  className={`w-full h-14 border rounded-md bg-white shadow-md ${
                    isCedulaEnabled
                      ? "border-gray-300"
                      : "border-gray-200 bg-gray-100"
                  }`}
                  labelId="specialty"
                  id="specialty"
                  value={specialty}
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
                  <MenuItem value={"neuro_oncologia"}>NEURO-ONCOLOGÍA</MenuItem>
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
          </div>
        </div>
        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md border">
          <div className="items-center mb-8 grid grid-cols-2 gap-6">
            <div className="flex">
              <div>
                <PersonRoundedIcon
                  className="text-white bg-blue-500 rounded-full p-1"
                  sx={{ fontSize: 60 }}
                />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-700 flex items-center">
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
              <p className="text-gray-400 mb-2">Máximo 3MB</p>
              <input
                type="file"
                // id="medicOrder"
                // {...register("medicOrder")}
                className="hover:cursor-pointer hidden"
                onChange={(e)=>{
                  handleFileChangeMedicOrder(e); 
                  onChangeMedicOrder(e);
                }}
              />
              {/* Botón personalizado */}
              <label
                htmlFor="medicOrder"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-200"
              >
                Subir archivo
              </label>
              {fileMedicOrder ? (
                <p className="mt-2 text-sm text-gray-600">
                  Archivo seleccionado:{" "}
                  <span className="font-medium">{fileMedicOrder}</span>
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">
                  No se ha seleccionado archivo
                </p>
              )}
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
              <p className="text-gray-400 mb-2">Máximo 3MB</p>
              {/* Input de archivo oculto */}
              <input
                type="file"
                // id="voucher"
                // {...register("voucher")}
                className="hidden"
                onChange={(e)=>{
                  handleFileChangeVoucher(e); 
                  onChangeVoucher(e);
                }}

              />
              {/* Botón personalizado */}
              <label
                htmlFor="voucher"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-200"
              >
                Subir archivo
              </label>
              {fileVoucher ? (
                <p className="mt-2 text-sm text-gray-600">
                  Archivo seleccionado:{" "}
                  <span className="font-medium">{fileVoucher}</span>
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">
                  No se ha seleccionado archivo
                </p>
              )}
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
              <p className="text-gray-400 mb-2">Máximo 3MB</p>
              <input
                type="file"
                // id="clinicalHistory"
                // {...register("clinicalHistory")}
                className="hover:cursor-pointer hidden"
                onChange={(e) => {
                  handleFileChangeClinicalH(e);
                  onChangeClinicalH(e);
                }}
              />
              <label
                htmlFor="clinicalHistory"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg cursor-pointer transition-all duration-200"
              >
                Subir archivo
              </label>

              {fileClinicalH ? (
                <p className="mt-2 text-sm text-gray-600">
                  Archivo seleccionado:{" "}
                  <span className="font-medium">{fileClinicalH}</span>
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-400">
                  No se ha seleccionado archivo
                </p>
              )}
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
        <div className="flex justify-center items-center mb-4">
          <button
            onClick={handleClick}
            className="w-auto h-auto px-16 py-2 bg-[#EB356E] hover:bg-[#db839f] transition-all duration-200 rounded-full text-white mt-4 font-bold"
          >
            ENVIAR
          </button>
        </div>
        {showAlert && (
          <div className="absolute flex justify-center items-center inset-x-80 transition-all duration-200">
            <Stack>
              <Alert
                variant="filled"
                severity="success"
                className="flex w-auto justify-center"
              >
                Se ha enviado correctamente.
              </Alert>
            </Stack>
          </div>
        )}
        ;
      </form>
    </div>
  );
};

export default RequestMedic;
