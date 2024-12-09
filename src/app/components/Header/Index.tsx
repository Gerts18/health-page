'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";

interface UserData {
  name: string;
  image?: string;
  category?: number;
  redirectUrl?: string;
  professionalid?: string;
}

const Header: React.FC = () => {
  // userData: Almacena la información del usuario obtenido desde el servidor
  const [userData, setUserData] = useState<UserData | null>(null);
  // isMenuOpen: Controla la apertura/cierre del menú "Nosotros"
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isProfileMenuOpen: Controla la apertura/cierre del menú de perfil del usuario
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Función asíncrona para obtener datos del usuario desde '/api/auth'
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET',
          credentials: 'include',
        });
        const result = await response.json();

        // Si la respuesta indica éxito, guardamos los datos del usuario
        if (result.success) {
          setUserData(result.data as UserData);
          
          // Si se proporciona una URL de redirección, se redirige al usuario
          if (result.data.redirectUrl) {
            router.push(result.data.redirectUrl);
          }
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        setUserData(null);
      }
    };

    fetchUserData();
  }, [router]);

  // handleLogout: Función para cerrar sesión del usuario
  const handleLogout = async () => {
    try {
        const response = await fetch('/api/auth', {
            method: 'POST',
            credentials: 'include', // Asegura que las cookies se envíen con la solicitud
        });
        const result = await response.json();

        if (result.success) {
            setUserData(null);
            
            if (window.location.pathname === '/') {
                window.location.reload();
            } else {
                router.push('/');
            }
        } else {
            console.error('Error al cerrar sesión:', result.message);
        }
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

  // toggleMenu: Alterna la visibilidad del menú "Nosotros"
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <Link href={"/"}>
      <div className="flex items-center space-x-2">
          <Image src="/assets/Logo8.png" alt="FICMAC Logo" width={200} height={200} />
      </div>
      </Link>

      {/* Navegación */}
      <nav className="flex items-center space-x-6 text-gray-700">
        <Link href="/education" className="text-gray-700 hover:text-pink-500">
          Educación
        </Link>
        <Link href="/News" className="text-gray-700 hover:text-pink-500">
          Noticias
        </Link>
        <Link href="/Servicios" className="text-gray-700 hover:text-pink-500">
          Servicios
        </Link>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-700 hover:text-pink-500"
          >
            Información y Contacto
          </button>
          {isMenuOpen && (
            <ul className="absolute left-0 w-48 mt-2 bg-pink-500 text-white rounded-md shadow-md">
              <li>
                <Link
                  href="/FAQ"
                  className="block px-4 py-2 hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/Contacto"
                  className="block px-4 py-2 hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Botones */}
      <div className="flex items-center space-x-4">
        {userData ? (
          <div className="relative">
            <div className="flex items-center space-x-4">
              {/* Mostramos el nombre del usuario */}
              <span>Hola, {userData.name}</span>
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="focus:outline-none"
              >
                {/* Si el usuario tiene una imagen de perfil, la mostramos. De lo contrario, se muestra un ícono */}
                {userData.image ? (
                  <Image
                    src={userData.image}
                    alt="Perfil"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  userData.professionalid && userData.professionalid !== "none" ?  (
                    <FaUserDoctor className="text-gray-500" size={30} />
                  ) : (
                    <FaUser className="text-gray-500" size={30} />
                  )
                )}
              </button>
            </div>

            {isProfileMenuOpen && (
              <ul className="absolute right-0 w-48 mt-2 bg-white text-gray-700 rounded-md shadow-md">
                <li>
                  {/* Según la categoría del usuario (1: paciente, otro valor: profesional),
                      redirigimos a un perfil u otro */}
                    <Link
                    href={userData?.category === 1 || userData?.category === 3 ? '/Perfilpa' : '/Perfil'}
                    className="block px-4 py-2 hover:bg-pink-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                    >
                    Modificar Perfil
                    </Link>
                </li>
                <li>
                  <Link
                    href="/Tabla"
                    className="block px-4 py-2 hover:bg-pink-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Historial
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-pink-100"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            {/* Si no hay usuario autenticado, mostramos botones para iniciar sesión o registrarse */}
            <Link href="/Login">
              <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
                Iniciar Sesion
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                Registrarse
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
