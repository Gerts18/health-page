import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface UserData {
  name: string;
}

const Header: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Función para obtener los datos del usuario
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users', {
          method: 'GET',
          credentials: 'include', // Para incluir las cookies en la solicitud
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
      const response = await fetch('/api/logout', {
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

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/assets/Logo8.png" alt="FICMAC Logo" width={200} height={200} />
        <div className="text-lg font-semibold text-gray-800">
          {/* Aquí puedes añadir texto si lo deseas */}
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex items-center space-x-6 text-gray-700">
        <div className="relative group">
          <button className="focus:outline-none">Nosotros</button>
          <ul className="absolute left-0 hidden p-2 mt-2 bg-white border rounded-md shadow-md group-hover:block">
            <li>
              <Link href="/about/history" className="block px-4 py-2 hover:bg-gray-100">
                Historia
              </Link>
            </li>
            <li>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">
                Equipo
              </Link>
            </li>
          </ul>
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
        <Link href="/news" className="text-gray-700 hover:text-pink-500">
          Noticias
        </Link>
      </nav>

      {/* Botones */}
      <div className="flex items-center space-x-4">
        {userData ? (
          <>
            <span>Hola, {userData.name}</span>
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
                Log in
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
