"use client";

import React from "react";
//import Header from "../components/Header/Index";
import Footer from "../components/Footer/index";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaginaDonaciones = () => {
    const router = useRouter();

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div>
          <p>
            Brindarle calidad de vida a los pacientes es posible, gracias al
            proceso de transformación en la precisión del tratamiento del
            cáncer. Sigamos sumando años de vida en la lucha contra el
            cáncer...Apóyanos
          </p>
          <div className="relative w-full h-64 mt-4">
            <Image
              src="/assets/header_donaciones.jpg"
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
        <section>
          <div>
            <Image
              src="/assets/don_1.jpg"
              alt="Description of image"
              layout="responsive"
              width={400}
              height={200}
              quality={100}
            />
            <p className="titular-Ligth">UNAMOS FUERZAS</p>
            <h1 className="titular-Bold">
              Regala esperanza de vida a más pacientes con Cáncer
            </h1>
            <p className="texto_don">
              Gracias al apoyovoluntario de personas naturales y jurídicas, la
              Fundación ha logrado brindar innovadores y eficaces avances de
              diagnóstico, logrando la estandarización de biomarcadores antes de
              su uso clínico regular.
            </p>
          </div>
        </section>
        <section>
          <div>
            <p className="titular-Ligth">HISTORIAS INSPIRADORAS</p>
            <h1 className="titular-Bold">Testimonios de vida</h1>
            <p className="texto_don">
              Conoce estas historias de vida y descubre cuál es nuestra
              motivación para no detenernos en esta lucha, y seguir dando
              esperanza y posibilidades a miles de personas.
            </p>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 pb-8">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="rounded-lg">
                    <Image
                      src="/assets/luchaCancer.png"
                      alt="Description of image"
                      layout="responsive"
                      width={400}
                      height={400}
                      className="rounded-lg w-full h-48 px-4 pt-4"
                      quality={100}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-L font-bold mb-2">
                      La medicina gana terreno contra el cáncer
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Lorem ipsum dolor sit amet consectetur. Iaculis euismod
                      eros risus donec cras massa in ut elementum. Sed facilisis
                      pretium integer felis a.
                    </p>
                    <button className="text-white bg-[#EB356E] w-40 rounded-3xl font-medium text-center">
                      CONOCE MÁS →
                    </button>
                  </div>
                </div>
              ))}
            </section>
            <iframe
              className="testimonial"
              width="640"
              height="400"
              src="https://www.youtube.com/embed/LLkyREABuDw?si=WT87jhMNy0jsfmyM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Footer />
      </div>
    );
};

export default PaginaDonaciones;
