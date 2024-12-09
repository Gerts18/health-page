"use client";
import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";
import RequestMedic from "../components/RequestMedic/RequestMedic";

const Page = () => {

  return (
    <div className="w-full">
      <Header />
      <div className="mt-40 mb-20 w-full h-auto flex flex-col items-center justify-center">
        <p className="text-[#547EED] text-5xl font-semibold pb-2">
          Gestión de solicitudes de estudio
        </p>
        <div className="w-1/4 bg-[#547EED] h-2 rounded-full mr-36" />
      </div>

      {/* Llama al componente del form */}
      <RequestMedic />

      <Footer />
    </div>
  );
};

export default Page;
