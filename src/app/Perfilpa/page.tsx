"use client";
import { useEffect, useState } from "react";
//import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index";
import Image from "next/image";

export default function PerfilPage() {
  const [userData, setUserData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    celular: "",
    username: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    confirmCurrentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          credentials: "include", // Para incluir las cookies de sesión
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error al cargar datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileUpdate = async () => {
    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Perfil actualizado exitosamente");
      } else {
        alert("Error al actualizar el perfil");
      }
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert("Error al actualizar el perfil");
    }
  };

  const handlePasswordUpdate = async () => {
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert("Las nuevas contraseñas no coinciden");
      return;
    }
    if (passwords.currentPassword !== passwords.confirmCurrentPassword) {
      alert("Las contraseñas actuales no coinciden");
      return;
    }

    try {
      const response = await fetch("/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
        }),
      });

      if (response.ok) {
        alert("Contraseña actualizada exitosamente");
        setPasswords({
          currentPassword: "",
          confirmCurrentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      } else {
        alert("Error al actualizar la contraseña");
      }
    } catch (error) {
      console.error("Error al actualizar contraseña:", error);
      alert("Error al actualizar la contraseña");
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center">
      <Header />
      {/* Contenido Main*/}
      <div className="mt-8 w-full max-w-5xl flex gap-6 p-20">
        {/* Panel Izquierdo*/}
        <aside className="w-1/3">
          {/* Foto de Usuario */}
          <div className="  bg-white shadow-md rounded p-4 flex flex-col items-center">
            <Image
              src="/assets/profile_pac.png" // Cambiar esto por una imagen real
              alt="Doctor Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mb-4"
            />
            <p className="text-pink-500 font-bold">@User-Name</p>
            <p className="text-sm text-gray-500">user@email.com</p>
          </div>

          {/* Información del Doctor */}
          <div className=" bg-white shadow-md rounded p-4 flex flex-col  mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Información del Paciente
            </h3>
            <p>
              <strong>Nombre:</strong> {userData.nombre} {userData.apellidos}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {userData.celular}
            </p>
          </div>

          {/* Botones */}
          <div className="  bg-white shadow-md rounded p-4  mt-6 flex flex-col gap-4">
            <button className="bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-800">
              SOLICITUD DE ESTUDIO <br></br>(Biología Molecular)
            </button>
            <button className="bg-blue-700 text-white py-2 rounded shadow hover:bg-blue-950">
              CONSULTAR RESULTADOS
            </button>
          </div>
        </aside>

        {/* Panel Derecho */}
        <section className="w-2/3 bg-white shadow-md rounded p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Configuración de Usuario
          </h2>
          {/* Detalles del Usuario */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-500">Nombre:</label>
              <input
                type="text"
                value={userData.nombre}
                className="w-full border rounded px-3 py-2 mt-1"
                name="nombre"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Apellidos:</label>
              <input
                type="text"
                value={userData.apellidos}
                className="w-full border rounded px-3 py-2 mt-1"
                name="apellidos"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Email:</label>
              <input
                type="email"
                value={userData.email}
                className="w-full border rounded px-3 py-2 mt-1"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Celular:</label>
              <input
                type="text"
                value={userData.celular}
                className="w-full border rounded px-3 py-2 mt-1"
                name="celular"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded shadow"
            onClick={handleProfileUpdate}
          >
            Guardar Cambios
          </button>

          {/* Sección de Contraseña */}
          <h3 className="mt-6 text-lg font-bold text-gray-800">Contraseña</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm text-gray-500">
                Cambiar contraseña:
              </label>
              <input
                type="password"
                placeholder="Pon tu contraseña..."
                className="w-full border rounded px-3 py-2 mt-1"
                name="currentPassword"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">
                Confirma Contraseña:
              </label>
              <input
                type="password"
                placeholder="Confirma tu contraseña..."
                className="w-full border rounded px-3 py-2 mt-1"
                name="confirmCurrentPassword"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm text-gray-500">Nueva contraseña:</label>
              <input
                type="password"
                placeholder="Pon tu nueva contraseña..."
                className="w-full border rounded px-3 py-2 mt-1"
                name="newPassword"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">
                Confirma Nueva Contraseña:
              </label>
              <input
                type="password"
                placeholder="Confirma nueva contraseña..."
                className="w-full border rounded px-3 py-2 mt-1"
                name="confirmNewPassword"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded shadow"
              onClick={handlePasswordUpdate}
            >
              Guardar Cambios
            </button>
            <p className="mx-5 mt-6 text-sm text-pink-500 cursor-pointer">
              ¿Olvidaste tu contraseña?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}