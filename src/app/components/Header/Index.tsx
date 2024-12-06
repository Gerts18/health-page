'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";

interface UserData {
  name: string;
  professionalid?: string | null;
}

const Header: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET',
          credentials: 'include',
        });
        const result = await response.json();

        if (result.success) {
          setUserData(result.data as UserData);
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        setUserData(null);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        credentials: 'include',
      });
      const result = await response.json();

      if (result.success) {
        setUserData(null);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Cambia el estado entre abierto y cerrado
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
        {/* Menú desplegable de "Nosotros" */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-700 hover:text-pink-500"
          >
            Nosotros
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
                  href="/contact"
                  className="block px-4 py-2 hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="block px-4 py-2 hover:bg-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cotización
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
        <Link href="/investigations" className="text-gray-700 hover:text-pink-500">
          Investigaciones
        </Link>
        <Link href="/education" className="text-gray-700 hover:text-pink-500">
          Educación
        </Link>
        <Link href="/doctors" className="text-gray-700 hover:text-pink-500">
          Médicos
        </Link>
        <Link href="/News" className="text-gray-700 hover:text-pink-500">
          Noticias
        </Link>
      </nav>

      {/* Botones */}
      <div className="flex items-center space-x-4">
        {userData ? (
          <>
            <span>Hola, {userData.name}</span>
            {/* Renderizamos el ícono según professionalid */}
            {userData.professionalid ? (
              <FaUserDoctor className="text-gray-500" size={30} />
            ) : (
              <FaUser className="text-gray-500" size={30} />
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
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
