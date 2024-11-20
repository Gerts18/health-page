import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/assets/Logo8.png" alt="FICMAC Logo" width={200} height={200} />
        <div className="text-lg font-semibold text-gray-800">
         
          
        </div>
      </div>

      {/* Navigation */}
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

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
          Log in
        </button>
        <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;