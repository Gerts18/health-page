'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';
import doctorImage from './doctor.png'

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
          // Verificar la categoría del usuario
          if (responseData.data.category == 1 || responseData.data.category == 3) {
            // Si no es un doctor, redirigir a la página correspondiente
            router.push('/Perfilpa');
            return;
          }
          
          const nombreCompleto = responseData.data.name?.split(' ') || [];
          
          // Tomamos los dos primeros elementos como nombre
          const nombres = nombreCompleto.slice(0, 2).join(' ');
          
          // Tomamos el resto como apellidos
          const apellidos = responseData.data.last_names;
          
          console.log('Nombres:', nombres);
          console.log('Apellidos:', apellidos);
          console.log(apellidos)
          setUserData({
            first_name: nombres || '',
            last_names: apellidos || '',
            email: responseData.data.email || ''
          });

          // Debug del estado final
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
        router.push('/'); // Redirigir a la página principal en caso de error
      }
    };

    fetchUserData(); // Llamar a la función para obtener datos del usuario
  }, [router]);

  // Efecto para manejar el cierre de sesión
  useEffect(() => {
    const handleLogout = () => {
      router.push('/'); // Redirigir a la página principal al cerrar sesión
    };

    window.addEventListener('logout', handleLogout); // Agregar el event listener

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
      [name]: value // Actualizar el estado del usuario
    }));
  };

  // Función para manejar cambios en los inputs de contraseña
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value // Actualizar el estado de las contraseñas
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
          updateType: 'personalInfo' // Tipo de actualización
        })
      });

      if (response.ok) {
        showToast('Perfil actualizado exitosamente', 'success');
        window.location.reload(); // Forzar recarga de la página
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
          updateType: 'password' // Tipo de actualización
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
        
        // Esperamos 5 segundos antes de cerrar sesión
        setTimeout(async () => {
          try {
            const logoutResponse = await fetch('/api/auth/logout', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json'
              }
            });

            if (logoutResponse.ok) {
              localStorage.clear(); // Limpiar datos de sesión
              sessionStorage.clear();
              window.location.href = '/'; // Redirigir a la página principal
            }
          } catch (error) {
            console.error('Error al cerrar sesión:', error);
          }
        }, 5000);
      } else {
        const errorData = await response.json();
        showToast(errorData.message || 'Error al actualizar la contraseña', 'error');
      }
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      showToast('Error al actualizar la contraseña', 'error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-blue-50 flex flex-col mt-10"
    >
      <Header />
      
      {toast.visible && (
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className={`fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white font-bold`}
        >
          {toast.message}
        </motion.div>
      )}

      {/* Contenido Principal */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex justify-center p-20"
      >
        <div className="w-full max-w-5xl flex gap-6">
          {/* Panel Izquierdo */}
          <motion.aside 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-1/3"
          >
            {/* Foto de Usuario */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={doctorImage}
                  alt="Doctor Profile"
                  width={128}
                  height={128}
                  className="w-32 h-32 mb-4 hover:ring-4 hover:ring-pink-300 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Información del Doctor */}
            <div className=" bg-white shadow-md rounded p-4 flex flex-col  mt-6">
              <h3 className="font-semibold text-gray-700 mb-2">
                Información del Doctor
              </h3>
              <p>
                <strong>Nombre:</strong> {userData.first_name} {userData.last_names}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
            </div>

            {/* Botones */}
            <div className="bg-white shadow-md rounded p-4 mt-6 flex flex-col gap-4">
              <Link href={'/RequestMedic'}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition-colors duration-300"
                >
                  SOLICITUD DE ESTUDIO (Biología Molecular)
                </motion.button>
              </Link>
              <Link href={'/admin/news'} 
              className="bg-blue-700 text-white py-2 rounded shadow hover:bg-blue-800 transition-colors duration-300 flex flex-row justify-center ">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    AGREGAR ARTÍCULO
                </motion.button>
              </Link>
            </div>
          </motion.aside>
          {/* Panel Derecho */}
          <motion.section 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
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
                  className="w-full border rounded px-3 py-2 mt-1 bg-gray-100"
                  name="email"
                  readOnly
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

            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded shadow"
              onClick={handlePasswordUpdate}
            >
              Guardar Cambios
            </button>
            <p className="mt-4 text-sm text-pink-500 cursor-pointer">
              ¿Olvidaste tu contraseña?
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}
