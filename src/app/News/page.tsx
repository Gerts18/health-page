'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header/Index'
import Footer from '../components/Footer/Footer'
import NewsCard from '../components/News Card/'

export default function NoticiasPage() {
  const [activeFilter, setActiveFilter] = useState('#Noticia1')

  const todayNews = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet purus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet purus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet purus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet purus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet purus leo."
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Corrected Banner */}
      <div className="relative h-[600px] mb-8 w-full overflow-hidden">
        <Image
          src="/assets/NoticiasBanner.jpeg"
          alt="Noticias banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500">
            Noticias
          </h1>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 mt-[76px]">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 border-r pr-6">
            <div className="sticky top-24">
              <h2 className="font-bold text-xl mb-4">Lo de hoy</h2>
              <div className="space-y-4">
                {todayNews.map((news, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="min-w-[4px] h-auto bg-pink-500"></div>
                    <p className="text-sm text-gray-600">{news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            {/* Banner with Gradient Text */}

            <h1 className="text-2xl font-bold mb-6">#EnTendencia</h1>

            {/* Filter Buttons */}
            <div className="flex gap-4 mb-6">
              {["#Noticia1", "#Noticia2", "#Noticia3"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`${
                    activeFilter === filter ? "bg-blue-600" : "bg-blue-400"
                  } text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Featured Article */}
            <article className="mb-8">
              <div className="relative h-[300px] mb-4">
                <Image
                  src="/assets/Titular.jpeg"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold mb-2">Titular</h3>
              <p className="text-sm text-gray-500 mb-2">24 enero 2024</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                neque nullam vero lectus ultricies egestas quis. Adipiscing a
                nibh tortor pellentesque nibh quis pellentesque.
              </p>
            </article>

            {/* News Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <NewsCard
                  key={item}
                  title={`Título ${item}`}
                  date="24/01/2024"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vulputate egestas gravida."
                  imageSrc={`/assets/Titulo${item}.jpeg`}
                  link={`https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cancer-${item}`}
                />
              ))}
            </div>

            {/* Advertisement Banner */}
            <div className="relative h-[200px] mb-8">
              <Image
                src="/assets/Publicidad Carro.jpeg"
                alt="Advertisement"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom News Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[5, 6].map((item) => (
                <NewsCard
                  key={item}
                  title={`Título ${item}`}
                  date="24/01/2024"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed vulputate egestas gravida."
                  imageSrc={`/assets/Titulo${item}.jpeg`}
                  link={`https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cancer-${item}`}
                />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="sticky top-24">
              <p className="text-sm text-gray-500 mb-4">Patrocinado</p>
              <div className="relative h-[400px]">
                <Image
                  src="/assets/PublicidadHamburguer.jpeg"
                  alt="Advertisement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
