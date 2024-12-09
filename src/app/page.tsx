"use client";

import ImageSlider from "./components/ImageSlider/imageSlider";
import Statistics from "./components/Statistics/statistics";
import BannerPrecisionMedicine from "./components/BannerPrecisionMedicine/bannerPrecisionMedicine";
import NewsAndArticles from "./components/NewsAndArticles/newsAndArticles";
import BannerUniqueTreatment from "./components/BannerUniqueTreatment/bannerUniqueTreatment";
import Link from "next/link";
import Header from "./components/Header/Index";
import Footer from '@/app/components/Footer/Footer';
import { useEffect, useState } from "react";

// Interfaz para definir la estructura de los datos del usuario
interface UserData {
  name: string;
  image?: string;
  category?: number;
  redirectUrl?: string;
  professionalid?: string;
}

const Home = () => {
  // Estado para almacenar datos del usuario
  const [userData, setUserData] = useState<UserData | null>(null);

  // Hook para ejecutar una función cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener datos del usuario desde la API
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET', // Solicitud GET
          credentials: 'include', // Incluye cookies para autenticación
        });
        const result = await response.json(); // Convierte la respuesta a JSON

        // Si la API devuelve éxito, se actualiza el estado con los datos del usuario
        if (result.success) {
          setUserData(result.data as UserData);
        } else {
          setUserData(null); // Si no hay éxito, se limpia el estado
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        setUserData(null); // En caso de error, el estado se mantiene vacío
      }
    };

    fetchUserData(); // Llamada a la función al montar el componente
  }, []); // Dependencia vacía: se ejecuta solo una vez

  return (
    <div className="bg-[#F5F5F5] w-full min-h-screen">
      {/* Encabezado de la página */}
      <Header />

      {/* Carrusel de imágenes */}
      <ImageSlider />

      {/* Sección de estadísticas */}
      <Statistics />

      {/* Condicional: Muestra contenido basado en el estado de autenticación */}
      {userData ? (
        // Si el usuario está autenticado
        <div className="flex flex-col items-center justify-center py-16 bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenido, {userData.name}
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Estás conectado como{" "}
            {userData.category === 2 ? "Profesional" : "Usuario"}.
          </p>
        </div>
      ) : (
        // Si el usuario no está autenticado
        <div className="flex flex-col items-center justify-center py-16 bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recibe información de tu interés
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Completa el formulario para unirte a nuestra comunidad en línea y
            seguir sumando años de vida en la lucha contra el cáncer.
          </p>
          {/* Botón que redirige al formulario de registro */}
          <button className="px-6 py-3 w-52 bg-[#547EED] text-white rounded-full font-semibold hover:bg-blue-600 transition duration-100">
            <Link href="/register">
              ¡Regístrate aquí!
            </Link>
          </button>
        </div>
      )}

      {/* Banners informativos */}
      <BannerPrecisionMedicine />
      <BannerUniqueTreatment />

      {/* Sección de noticias y artículos */}
      <NewsAndArticles />

      <Footer />
    </div>
  );
};

export default Home;
