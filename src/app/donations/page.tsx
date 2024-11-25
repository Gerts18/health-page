"use client";

import React from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { BiAccessibility, BiHeart, BiPhone } from "react-icons/bi";

const page = () => {
  return (
    <div className="max-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      <div className="w-full">
        {/* Primera sección con imagen y texto superpuesto */}
        <div className="relative w-full h-auto flex justify-center items-center mt-6 py-8">
          <Image
            src="/assets/donationsMain.jpg"
            alt="Imagen principal de apoyo al cáncer"
            layout="responsive"
            width={800}
            height={400}
            className="rounded-lg "
          />
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-center p-6 pb-36">
            <p className="text-[#6A6A6A] text-2xl text-center max-w-xl px-8">
              Brindarle calidad de vida a los pacientes es posible, gracias al
              proceso de transformación en la precisión del tratamiento del
              cáncer.
            </p>
            <p className="text-[#6A6A6A] text-3xl font-bold text-center my-6 px-8">
              Sigamos sumando años de vida en la lucha contra el cáncer...
              <span className="text-[#6A6A6A]"> Apóyanos</span>
            </p>
          </div>
        </div>

        {/* Segunda sección con título, subtítulo y texto */}
        <section className="px-4 md:px-8 lg:px-16 bg-white shadow-md pb-4 mb-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
            {/* Imagen */}
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <Image
                src="/assets/don_1.jpg"
                alt="Familia feliz apoyando la causa"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
                quality={100}
              />
            </div>
            {/* Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="font-light uppercase text-2xl">Unamos fuerzas</p>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                Regala esperanza de vida a más pacientes con Cáncer
              </h1>
              <div className="w-16 h-3 bg-[#EB356E] rounded-full" />
              <p className="text-lg mt-6">
                Gracias al apoyo voluntario de personas naturales y jurídicas,
                la Fundación ha logrado brindar innovadores y eficaces avances
                de diagnóstico, logrando la estandarización de biomarcadores
                antes de su uso clínico regular.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="pt-8">
          <p className="font-light text-center pb-2 text-lg">
            HISTORIAS INSPIRADORAS
          </p>
          <h1 className="text-2xl font-bold text-center pb-2">
            Testimonios de vida
          </h1>
          <p className="text-lg text-center mb-6 text-muted-foreground px-36">
            Conoce estas historias de vida y descubre cuál es nuestra motivación
            para no detenernos en esta lucha, y seguir dando esperanza y
            posibilidades a miles de personas.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-36 pb-14">
            {[...Array(3)].map((_, index) => (
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
                    Título de testimonio
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Lorem ipsum dolor sit amet consectetur. Iaculis euismod eros
                    risus donec cras massa in ut elementum. Sed facilisis
                    pretium integer felis a.
                  </p>
                  <Link href="/pagoDonacion">
                    <button className="text-white text-md bg-[#EB356E] hover:bg-[#de648b] transition w-auto p-2 rounded-3xl font-medium text-center ">
                      CONOCE MÁS →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <div className="w-full flex relative">
        <iframe
          className="w-full h-[450px] px-64"
          width="640"
          height="400"
          src="https://www.youtube.com/embed/LLkyREABuDw?si=WT87jhMNy0jsfmyM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <section className="py-16">
        <div className="w-screen flex flex-col lg:flex-row items-center">
          {/* Imagen */}
          <div className="w-1/2">
            <Image
              src="/assets/don_2.jpg"
              alt="Persona con pañuelo recibiendo apoyo"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-l-lg"
              quality={100}
            />
          </div>
          {/* Contenido de texto */}
          <div
            className="w-1/2 p-5 text-center lg:text-left pl-16
          rounded-r-lg lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-b from-[#547EED] to-[#304887]"
          >
            <h1 className="text-3xl font-extrabold text-white mb-4">
              ¿QUIERES APOYAR?
            </h1>
            <div className="w-16 h-2 bg-[#EB356E] rounded-full" />
            <p className="text-lg font-semibold text-white mb-2">
              ¿Cómo Donar?
            </p>
            <p className="text-base text-white mb-6">
              - Cualquier persona puede donar de forma fácil, rápida y segura.
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              Donaciones presenciales:
            </p>
            <p className="text-base text-white mb-6">- Datáfono</p>
            <p className="text-lg font-semibold text-white mb-2">
              Donaciones transferencia bancaria:
            </p>
            <p className="text-base text-white mb-2">
              Bancolombia Ahorros No. 40269058686
            </p>
            <p className="text-base text-white mb-6">
              A nombre de Fundación para la Investigación Clínica y Molecular
              Aplicada del Cáncer FICMAC Nit. 900239016-1
            </p>
            <button
              className="text-white bg-[#EB356E] hover:bg-pink-500 transition py-3 px-6 rounded-full font-medium"
              onClick={() =>
                window.open(
                  "https://sites.placetopay.com/ficmac_abierto",
                  "_blank"
                )
              }
            >
              ¡Haz tu donación aquí!
            </button>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <h1 className="text-center text-2xl font-bold pb-3">
          Gracias a ti y a las donaciones hemos ayudado a:
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-28">
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
            <p className="text-gray-600 mt-2">Pacientes Evaluados</p>
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
              Muestras actuales en el biobanco
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
            <p className="text-gray-600 mt-2">Muestras actuales en seroteca</p>
          </div>
        </div>
      </section>

      <section
        className="py-12 px-4 md:px-6 lg:px-8 w-full pb-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/apoyo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      >
        <div className="w-3/4 mx-auto">
          <p className="text-md text-center mb-4 text-muted-foreground">
            ¿NECESITAS APOYO?
          </p>
          <h1 className="text-3xl font-bold text-center mb-8">
            Grupos de Apoyo
          </h1>
          <div>
            <p className="text-lg text-center mb-12 text-muted-foreground px-12">
              Conecta con otras personas que entiendan lo que estas pasando
              pueden marcar una gran diferencia en tu experiencia con el cáncer.
              Nuestros grupos de apoyo ofrecen un espacio seguro donde podrás
              compratir, aprender y sanar.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BiAccessibility className="text-xl" />,
                title: "Grupo de Pacientes",
                description:
                  "Conecta con la comunidad de pacientes  para pode compartir y aprender de sus experiencias.",
              },
              {
                icon: <BiHeart className="text-xl" />,
                title: "Apoyo Familiar",
                description:
                  "Grupo dedicado para familiaras y cuidadores para encontrar confort y recursos que los ayuden.",
              },
              {
                icon: <BiPhone className="text-xl" />,
                title: "Comunidad Online",
                description:
                  "Grupo de apoyo virtuan para aquellos que no tienen los medio para hacer reuniones en persona.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex flex-col items-start"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {card.icon}
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <p className=" mb-4">{card.description}</p>
                <button className="mt-auto w-full border bg-[#17D183] border-gray-300 text-white font-bold rounded-full py-2 hover:bg-gray-100 hover:text-black transition">
                  Únete al Grupo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
