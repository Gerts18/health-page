"use client";

import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/index";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaginaDonaciones = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div>
        <div className="relative w-full h-64 mt-4">
          <p>
            Brindarle calidad de vida a los pacientes es posible, gracias al
            proceso de transformación en la precisión del tratamiento del
            cáncer. Sigamos sumando años de vida en la lucha contra el
            cáncer...Apóyanos
          </p>

          <Image
            src="/assets/PreguntasFrecuentes.jpg"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <button
        className="border-medium mt-4"
        onClick={() => {
          router.push("/pagoDonacion");
        }}
      >
        Donar
      </button>
      <Footer />
    </div>
  );
};

export default PaginaDonaciones;
