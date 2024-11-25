"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";
import NewsCard from "../components/News Card/";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function NoticiasPage() {
  const [activeFilter, setActiveFilter] = useState<string>(""); // Filtro inicial vacío para mostrar todas las noticias
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/newsback");
        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Filtrar las noticias según el botón activo
  const filteredNews = activeFilter
    ? news.filter(
        (item) =>
          item.id.toString() === activeFilter.replace("#Noticia", "") // Filtra según el ID si hay un filtro
      )
    : news; // Si el filtro está vacío, muestra todas las noticias

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Banner */}
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
          {/* Sidebar Izquierdo */}
          <div className="col-span-3 border-r pr-6">
            <div className="sticky top-24">
              <h2 className="font-bold text-xl mb-4">Lo de hoy</h2>
              {loading ? (
                <p>Cargando noticias...</p>
              ) : (
                <div className="space-y-4">
                  {news.slice(0, 5).map((item) => (
                    <div key={item.id} className="flex gap-2">
                      <div className="min-w-[4px] h-auto bg-pink-500"></div>
                      <p className="text-sm text-gray-600">{item.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="col-span-6">
            {/* Featured Article */}
            {!loading && news.length > 0 && (
              <article className="mb-8">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src={news[0].imageSrc}
                    alt={news[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">{news[0].title}</h3>
                <p className="text-sm text-gray-500 mb-2">{news[0].date}</p>
                <p className="text-sm text-gray-600">{news[0].description}</p>
              </article>
            )}

            {/* Botones de Filtro */}
            <div className="flex gap-4 mb-6">
              {/* Botón para mostrar todas las noticias */}
              <button
                onClick={() => setActiveFilter("")} // Al hacer clic, se muestra todo
                className={`${
                  activeFilter === "" ? "bg-blue-600" : "bg-blue-400"
                } text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500`}
              >
                Todas las Noticias
              </button>
              {/* Otros botones de filtro */}
              {["#Noticia2", "#Noticia3"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`${
                    activeFilter === filter ? "bg-blue-600" : "bg-blue-400"
                  } text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500`}
                >
                  {filter.replace("#", "")}
                </button>
              ))}
            </div>

            {/* Grid de Noticias Filtradas */}
            {loading ? (
              <p>Cargando noticias...</p>
            ) : (
              <div className="grid grid-cols-2 gap-6 mb-8">
                {filteredNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    imageSrc={item.imageSrc}
                    link={item.link}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Derecho */}
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
