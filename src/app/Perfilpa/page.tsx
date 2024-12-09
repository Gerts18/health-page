"use client";
// Importaciones necesarias de React y Next.js
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Index";
import Image from "next/image";
import { motion } from "framer-motion";
import PatientIcon from './patient.png';
import Link from "next/link";

// Componente principal de la página de perfil
export default function PerfilPage() {
  const router = useRouter();

  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState({
    first_name: '',
    last_names: '',
    email: '',
  });

  // Estado para manejar las contraseñas
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    confirmCurrentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Estado para manejar la visibilidad del toast
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'success' // o 'error'
  });

  // Función para mostrar un mensaje toast
  const showToast = (message: string, type: 'success' | 'error') => {
    console.log('Mostrando toast:', message, type);
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 5000);
  };

  // Efecto para obtener los datos del usuario al cargar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include'
        });
        
        const responseData = await response.json();
        
        if (responseData.success && responseData.data) {
          if (responseData.data.category == 2) {
            router.push('/Perfil');
            return;
          }
          
          const nombreCompleto = responseData.data.name?.split(' ') || [];
          const nombres = nombreCompleto.slice(0, 2).join(' ');
          const apellidos = responseData.data.last_names;
          
          console.log('Nombres:', nombres);
          console.log('Apellidos:', apellidos);
          setUserData({
            first_name: nombres || '',
            last_names: apellidos || '',
            email: responseData.data.email || ''
          });

          console.log('userData actualizado:', {
            first_name: nombres,
            last_names: apellidos,
            email: responseData.data.email
          });
        } else {
          throw new Error('No se encontraron datos del usuario en la respuesta');
        }
      } catch (error) {
        console.error('Error:', error);
        router.push('/');
      }
    };

    fetchUserData();
  }, [router]);

  // Efecto para manejar el cierre de sesión
  useEffect(() => {
    const handleLogout = () => {
      router.push('/');
    };

    window.addEventListener('logout', handleLogout);

    // Cleanup del event listener
    return () => {
      window.removeEventListener('logout', handleLogout);
    };
  }, [router]);

  // Función para manejar cambios en los inputs del usuario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  }; 

  // Función para manejar cambios en los inputs de contraseña
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para actualizar la información del perfil
  const handleProfileUpdate = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: userData.email,
          firstName: userData.first_name,
          lastName: userData.last_names,
          updateType: 'personalInfo'
        })
      });

      if (response.ok) {
        showToast('Perfil actualizado exitosamente', 'success');
      } else {
        const errorData = await response.json();
        showToast(errorData.message || 'Error al actualizar el perfil', 'error');
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      showToast('Error al actualizar el perfil', 'error');
    }
  };

  // Función para actualizar la contraseña
  const handlePasswordUpdate = async () => {
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert('Las nuevas contraseñas no coinciden');
      return;
    }
    if (passwords.currentPassword !== passwords.confirmCurrentPassword) {
      alert('Las contraseñas actuales no coinciden');
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: userData.email,
          password: passwords.newPassword,
          updateType: 'password'
        })
      });

      if (response.ok) {
        showToast('Contraseña actualizada exitosamente', 'success');
        setPasswords({
          currentPassword: '',
          confirmCurrentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
      } else {
        const errorData = await response.json();
        showToast(errorData.message || 'Error al actualizar la contraseña', 'error');
      }
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      showToast('Error al actualizar la contraseña', 'error');
    }
  };

  // Renderizado del componente
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-blue-50 flex flex-col justify-between"
    >
      <div className="flex flex-col items-center">
        <Header />
        
        {/* Toast con animación */}
        {toast.visible && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white font-bold backdrop-blur-sm bg-opacity-90`}
          >
            {toast.message}
          </motion.div>
        )}

        {/* Contenido principal con animación */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 w-full max-w-5xl flex gap-6 p-20"
        >
          {/* Panel Izquierdo */}
          <motion.aside 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-1/3"
          >
            {/* Foto de Usuario con efecto hover */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-md rounded p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={PatientIcon}
                  alt="Paciente Profile"
                  width={128}
                  height={128}
                  className="w-32 h-32 mb-4 hover:border-blue-500 transition-colors duration-300"
                />
              </motion.div>
            </motion.div>
            {/* Botones con efectos hover */}
            <motion.div 
              className="bg-white shadow-md rounded p-4 mt-6 flex flex-col gap-4"
              whileHover={{ scale: 1.01 }}
            >
             <Link href={'/RequestMedic'}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition-colors duration-300"
                >
                  SOLICITUD DE ESTUDIO (Biología Molecular)
                </motion.button>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 text-white py-2 rounded shadow hover:bg-blue-950 transition-all duration-300"
              >
                CONSULTAR RESULTADOS
              </motion.button>
            </motion.div>
          </motion.aside>

          {/* Panel Derecho */}
          <motion.section 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-2/3 bg-white shadow-md rounded p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Configuración de Usuario
            </h2>
            {/* Detalles del Usuario */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-gray-500">Nombre:</label>
                <input
                  type="text"
                  value={userData.first_name}
                  className="w-full border rounded px-3 py-2 mt-1"
                  name="first_name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Apellidos:</label>
                <input
                  type="text"
                  value={userData.last_names}
                  className="w-full border rounded px-3 py-2 mt-1"
                  name="last_names"
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
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition-colors duration-300"
              onClick={handleProfileUpdate}
            >
              Guardar Cambios
            </motion.button>

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
          </motion.section>
        </motion.div>
      </div>
      
      <Footer />
    </motion.div>
  );
}
