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

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] w-full h-svh">
      {/* <Navbar /> */}
      <Header />

      <ImageSlider />
      <Statistics />

      <div className="flex flex-col items-center justify-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Recibe información de tu interés
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Complete el formulario para unirse a nuestra comunidad en línea y
          seguir sumando años de vida en la lucha contra el cáncer.
        </p>
        <Link
          href="/register"
          className="bg-[#547EED] w-auto text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          ¡Regístrate aquí!
        </Link>
      </div>

      <BannerPrecisionMedicine />
      <BannerUniqueTreatment />
      <NewsAndArticles />

      <Footer/>
    </div>
  );
};


export default Home;
