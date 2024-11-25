'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import Image from "next/image";

export default function PerfilPage() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    first_name: '',
    last_names: '',
    email: '',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    confirmCurrentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

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
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseData = await response.json();

        console.log('responseData:', responseData);
        
        if (responseData.success && responseData.data) {
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
        console.error('Error completo:', error);
        setTimeout(() => router.push('/'), 5000);
      }
    };

    fetchUserData();
  }, [router]);

  useEffect(() => {
    // Agregar el event listener para el cierre de sesión
    const handleLogout = () => {
      router.push('/');
    };

    window.addEventListener('logout', handleLogout);

    // Cleanup del event listener
    return () => {
      window.removeEventListener('logout', handleLogout);
    };
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  }; 

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = async () => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        alert('Perfil actualizado exitosamente');
      } else {
        alert('Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      alert('Error al actualizar el perfil');
    }
  };

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
      const response = await fetch('/api/user/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
        })
      });

      if (response.ok) {
        alert('Contraseña actualizada exitosamente');
        setPasswords({
          currentPassword: '',
          confirmCurrentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
      } else {
        alert('Error al actualizar la contraseña');
      }
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      alert('Error al actualizar la contraseña');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      <Header />
      {/* Contenido Main*/}
      <div className="mt-8 w-full max-w-5xl flex gap-6 p-20">
        {/* Panel Izquierdo*/}
        <aside className="w-1/3">
          {/* Foto de Usuario */}
          <div className="  bg-white shadow-md rounded p-4 flex flex-col items-center">
            <Image
              src="/assets/profile_doc.png" // Cambiar esto por una imagen real
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
          <div className="  bg-white shadow-md rounded p-4  mt-6 flex flex-col gap-4">
            <button className="bg-blue-500 text-white py-2 rounded shadow">
              SOLICITUD DE ESTUDIO (Biología Molecular)
            </button>
            <button className="bg-blue-700 text-white py-2 rounded shadow">
              AGREGAR ARTÍCULO
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
            <div>
              <label className="text-sm text-gray-500">Celular:</label>
              <input
                type="text"
                value={'4432189619'}
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
          <button
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded shadow"
            onClick={handlePasswordUpdate}
          >
            Guardar Cambios
          </button>
          <p className="mt-4 text-sm text-pink-500 cursor-pointer">
            ¿Olvidaste tu contraseña?
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}