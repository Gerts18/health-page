'use client';
import React, { useState } from 'react';
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

// Esquema de validación con Yup
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

  // Configuración de react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Función de envío del formulario
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

      if (result.success) {
        toast.success("¡Inicio de sesión exitoso!");

        //console.log("Usuario:", result.data);

        reset(); 
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);

      } else {
        toast.error(result.message || "Error al iniciar sesión.");
      }
    } catch (error: any) {
      console.error("Error en la solicitud:", error);
      toast.error(error.message || "Ocurrió un error en el servidor.");
    } finally {
      setIsSubmitting(false);
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
                    {/* Campo Email */}
                    <div className='login-input'>
                      <input
                        id="email"
                        type="text"
                        {...register("email")}
                        placeholder="Correo"
                        disabled={isSubmitting}
                      />
                    </div>
                    <p className="form_error">{errors.email?.message}</p>

                    {/* Campo Password */}
                    <div className='login-input'>
                      <input
                        id="password"
                        type="password"
                        {...register("password")}
                        placeholder="Contraseña"
                        disabled={isSubmitting}
                      />
                    </div>
                    <p className="form_error">{errors.password?.message}</p>

                    {/* Botón de envío */}
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" disabled={isSubmitting} />
                        <label htmlFor="remember">He olvidado mi contraseña</label>
                      </span>
                    </div>
                    <button
                      className="primary_btn"
                      type="submit"
                      disabled={isSubmitting}
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