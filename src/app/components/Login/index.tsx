'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './index.css';

//Formato de datos a enviar al backend
interface FormData {
  email: string;
  password: string;
}

//Validacion de cumplimiento de requisitos en datos ingresados
const schema = yup.object({
  email: yup.string().required("El correo electrónico es obligatorio").email("Debe ser un correo electrónico válido"),
  password: yup.string().required("La contraseña es obligatoria").min(6, "La contraseña debe tener al menos 6 caracteres"),
}).required();

//Copilacion de datos para el backend
const LoginArea = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
//Envio de datos al backend
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/backlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      //Recepcion y manejo de la respuesta del backend
      if (result.success) {
        toast.success("¡Inicio de sesión exitoso!");
        reset();
        setTimeout(() => {
          window.location.href = result.data.redirectUrl;
        }, 2000);
      } else {
        toast.error(result.message || "Error al iniciar sesión.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
     // toast.error(error.message || "Ocurrió un error en el servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" id='fondo'>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-gray-700 mb-2 text-center">INICIAR SESIÓN</h3>
        <p className="text-gray-500 text-center mb-4">Inicie sesión con los datos de su cuenta</p>
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

          {/* Campo Password */}
          <div className="mb-4">
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Contraseña"
              disabled={isSubmitting}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          {/* Enlace a recuperación de contraseña */}
          <div className="flex items-center justify-between mb-6">
            <a
              href="/forgot"
              className="text-blue-500 hover:underline text-sm"
            >
              He olvidado mi contraseña
            </a>
          </div>

          {/* Botón de envío */}
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando..." : "Iniciar"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginArea;
