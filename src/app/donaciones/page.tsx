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
        
        <section className="don_1">
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
                    <button
                      className="text-white bg-[#EB356E] w-40 rounded-3xl font-medium text-center"
                      onClick={() => {
                        router.push("/pagoDonacion");
                      }}
                    >
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
        <section className="don_2">
          <div>
            <Image
              src="/assets/don_2.jpg"
              alt="Description of image"
              layout="responsive"
              width={400}
              height={200}
              quality={100}
            />

            <h1 className="titular-Black">¿QUIERES APOYAR?</h1>
            <p className="titular-Bold">¿Cómo Donar?</p>
            <p className="texto_don">
              Cualquier persona puede donar de forma fácil, rápida y segura.
            </p>
            <p className="titular-Bold">Donaciones presenciales:</p>
            <p className="texto_don">Datáfono</p>
            <p className="titular-Bold">Donaciones transferencia bancaria:</p>
            <p className="texto_medium">Bancolombia Ahorros No. 40269058686</p>
            <p className="texto_don">
              A nombre de Fundación para la Investigación Clínica y Molecular
              Aplicada del Cáncer FICMAC Nit. 900239016-1
            </p>
            <button
              className="text-white bg-[#EB356E] w-60 rounded-3xl font-medium text-center"
              onClick={() => {
                window.location.href ="https://sites.placetopay.com/ficmac_abierto";
              }}
            >
              ¡Haz tu donación aquí!
            </button>
          </div>
        </section>

        <section>
          <h1>Gracias a ti y a las donaciones hemos ayudado a:</h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="flex flex-col items-center text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-blue-500 text-5xl mb-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
              </svg>
              <h3 className="text-3xl font-bold text-[#EB356E]">22,000</h3>
              <p className="text-gray-600 mt-2">
                {" "}
                Muestras actuales en el biobanco{" "}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="text-blue-500 text-5xl mb-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M72 64h24v240c0 44.1 35.9 80 80 80s80-35.9 80-80V64h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm72 0h64v96h-64V64zm480 384H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM360 64h24v240c0 44.1 35.9 80 80 80s80-35.9 80-80V64h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm72 0h64v96h-64V64z"></path>
              </svg>
              <h3 className="text-3xl font-bold text-[#EB356E]">92,000</h3>
              <p className="text-gray-600 mt-2">
                Muestras actuales en seroteca
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-blue-500 text-5xl mb-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"></path>
              </svg>
              <h3 className="text-3xl font-bold text-[#EB356E]">9,000</h3>
              <p className="text-gray-600 mt-2">
                Muestras actuales en la biblioteca
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
};

export default PaginaDonaciones;
