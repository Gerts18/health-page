"use client";

//import Navbar from "./components/Navbar/navbar";
import ImageSlider from "./components/ImageSlider/imageSlider";
import Statistics from "./components/Statistics/statistics";
import BannerPrecisionMedicine from "./components/BannerPrecisionMedicine/bannerPrecisionMedicine";
import NewsAndArticles from "./components/NewsAndArticles/newsAndArticles";
import BannerUniqueTreatment from "./components/BannerUniqueTreatment/bannerUniqueTreatment";
import Link from "next/link";

import './components/Login/login.css'
//import { StrictMode } from "react"
import Header from "./components/Header/Index"
//import Footer from "./components/Footer/Index"
//import LoginPage from './Login/page'
import Footer from '@/app/components/Footer/Footer'
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  image?: string;
  category?: number;
  redirectUrl?: string;
  professionalid?: string;
}

const Home = () => {

  const [userData, setUserData] = useState<UserData | null>(null);

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

  return (
    <div className="bg-[#F5F5F5] w-full min-h-screen">
      <Header />
      <ImageSlider />
      <Statistics />
  
      { userData ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenido, {userData.name}
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Estás conectado como {userData.category === 2 ? 'Profesional' : 'Usuario'}.
          </p>
        
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recibe información de tu interés
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Completa el formulario para unirte a nuestra comunidad en línea y
            seguir sumando años de vida en la lucha contra el cáncer.
          </p>
          <Link
            href="/register"
            className="bg-[#547EED] w-auto text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            ¡Regístrate aquí!
          </Link>
        </div>
      )}
  
      <BannerPrecisionMedicine />
      <BannerUniqueTreatment />
      <NewsAndArticles />
  
      <Footer />
    </div>
  );
};


export default Home;
