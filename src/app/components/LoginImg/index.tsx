'use client';
import Link from 'next/link';
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
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  })
  .required();

const LoginArea = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true); // Deshabilitar el botón
    try {
      const response = await axios.post('src\app\components\Login\login.ts', data); // URL de tu backend

      if (response.data.success) {
        toast.success("¡Inicio de sesión exitoso!");
        reset(); // Reiniciar el formulario
        // Puedes redirigir al usuario, por ejemplo:
        // window.location.href = '/dashboard';
      } else {
        toast.error(response.data.message || "Error al iniciar sesión.");
      }
    } catch (error: any) {
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
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email<span>**</span></label>
                    <input
                      id="email"
                      type="text"
                      {...register("email")}
                      placeholder="you@company.com"
                      disabled={isSubmitting} // Deshabilitar mientras se envía
                    />
                    <p className="form_error">{errors.email?.message}</p>

                    <label htmlFor="password">Contraseña<span>**</span></label>
                    <input
                      id="password"
                      type="password"
                      {...register("password")}
                      placeholder="********"
                      disabled={isSubmitting} // Deshabilitar mientras se envía
                    />
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