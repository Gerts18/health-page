import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/assets/Logo8.png"
            alt="FICMAC Logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 text-gray-700">
        {/* Dropdown for "Nosotros" */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none  hover:text-pink-500"
          >
            Nosotros
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-pink-600 rounded-md shadow-md">
              <li>
                <Link
                  href="/contact"
                  className="block px-6 py-2 text-white font-bold hover:bg-pink-700"
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  href="/FAQ"
                  className="block px-6 py-2 text-white font-bold hover:bg-pink-700"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="block px-6 py-2 text-white font-bold hover:bg-pink-700"
                >
                  Cotización
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-6 py-2 text-white font-bold hover:bg-pink-700"
                >
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href="/investigations" className="hover:text-pink-500">
          Investigaciones
        </Link>
        <Link href="/education" className="hover:text-pink-500">
          Educación
        </Link>
        <Link href="/doctors" className="hover:text-pink-500">
          Médicos
        </Link>
        <Link href="/News" className="hover:text-pink-500">
          Noticias
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/Login">
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Log in
          </button>
        </Link>
        <Link href="/register">
          <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
