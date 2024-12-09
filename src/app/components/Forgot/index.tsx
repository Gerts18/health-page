'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import '../Login/index.css';

//Formato de datos para el backend
interface FormData {
  email: string;
}

//Validacion de requisitos de los datos ingresados
const schema = yup.object({
  email: yup.string().required("El correo electrónico es obligatorio").email("Debe ser un correo electrónico válido"),
}).required();

//Copilacion de datos para el backend
const ForgotArea = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //Envio de datos al backend
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/forgotten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      //Recepcion y manejo de respuesta del backend
      if (result.success) {
        toast.success("¡Correo identificado de forma exitosa!");
        reset();
        setTimeout(() => {
          window.location.href = "/recover";
        }, 2000);
      } else {
        toast.error(result.message || "Error al identificar el correo.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      const errorMessage = error instanceof Error ? error.message : "Ocurrió un error en el servidor.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" id='fondo'>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-gray-700 mb-2 text-center">RECUPERAR CONTRASEÑA</h3>
        <p className="text-gray-500 text-center mb-4">Ingrese el correo electrónico de su cuenta</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo Email */}
          <div className="mb-4">
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Correo"
              disabled={isSubmitting}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Botón de envío */}
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Identificando..." : "Aceptar"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotArea;
