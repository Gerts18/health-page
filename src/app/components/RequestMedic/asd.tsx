import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

const RequestMedic = () => {
  const [institutionRem, setInstitutionRem] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

  const { register, handleSubmit } = useForm();

  const handleChangeInstitutionRem = (event: SelectChangeEvent) => {
    setInstitutionRem(event.target.value as string);
  };

  const dataForm = (data: object) => {
    console.log(data);
  };

  const handleClick = () => {
    setTimeout(() => {
      setShowAlert(true); // Mostrar la alerta
    }, 500); // 500ms
    setTimeout(() => {
      setShowAlert(false); // Ocultar la alerta después de 3 segundos
    }, 3000); // 3000ms
  };

  const [fileIne, setFileIne] = useState("");
  const handleFileChangeIne = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileIne(e.target.files[0]); // Guarda el archivo completo
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

            <div className="items-center w-full h-auto border-2 border-gray-300 rounded-md bg-white p-2 shadow-md">
              <p className="pr-2 text-gray-400 mb-2">CREDENCIAL (OPCIONAL)</p>
              <input
                type="file"
                id="ine"
                {...register("ine")}
                className="hover:cursor-pointer hidden"
                onChange={handleFileChangeIne}
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
        </div>
        
        <div className="bg-gray-50 w-full h-auto p-8 mb-8 rounded-lg shadow-md border">
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
                id="medicOrder"
                {...register("medicOrder")}
                className="hover:cursor-pointer hidden"
                onChange={handleFileChangeMedicOrder}
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
                id="voucher"
                {...register("voucher")}
                className="hidden"
                onChange={handleFileChangeVoucher}
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
                id="clinicalHistory"
                {...register("clinicalHistory")}
                className="hover:cursor-pointer hidden"
                onChange={handleFileChangeClinicalH}
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
