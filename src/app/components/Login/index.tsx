'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import './login.css';

interface FormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("El correo electrónico es obligatorio")
      .email("Debe ser un correo electrónico válido"),
    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .required();

const LoginArea = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true); // Deshabilitar el botón
    try {
      const response = await axios.post(
        "/api/backlogin", // Ruta correcta para el backend
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data?.success) {
        toast.success("¡Inicio de sesión exitoso!");
        reset(); // Reiniciar el formulario
        // Redirigir al usuario si es necesario:
        // window.location.href = "/dashboard";
      } else {
        toast.error(response.data?.message || "Error al iniciar sesión.");
      }
    } catch (error: any) {
      console.error("Error en la solicitud:", error);
      toast.error(
        error.response?.data?.message || "Ocurrió un error en el servidor."
      );
    } finally {
      setIsSubmitting(false); // Habilitar el botón
    }
  };
  

  return (
    <>
      <div className="login-body">
        <section className="login-area">
          <h3 className="text-center">INICIAR SESIÓN</h3>
          <h3 className="sub-text-center">Inicie sesión con los datos de su cuenta</h3>
          <div className="container">
            <div className="row">
              <div className="">
                <div className="basic-login">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='login-input'>
                      <input
                        id="email"
                        type="text"
                        {...register("email")}
                        placeholder="Correo"
                        disabled={isSubmitting} // Deshabilitar mientras se envía
                      />
                    </div>
                    <p className="form_error">{errors.email?.message}</p>
                    <div className='login-input'>
                      <input
                        id="password"
                        type="password"
                        {...register("password")}
                        placeholder="Contraseña"
                        disabled={isSubmitting} // Deshabilitar mientras se envía
                      />
                    </div>
                    <p className="form_error">{errors.password?.message}</p>

                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" disabled={isSubmitting} />
                        <label htmlFor="remember">He olvidado mi contraseña</label>
                      </span>
                    </div>
                    <button
                      className="primary_btn"
                      type="submit"
                      disabled={isSubmitting} // Deshabilitar el botón
                    >
                      {isSubmitting ? "Iniciando..." : "Iniciar"}
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginArea;