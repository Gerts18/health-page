"use client";

/**
 * Este componente representa la página de Noticias, donde se listan noticias obtenidas desde un endpoint.
 * Muestra una noticia destacada, un listado filtrable de noticias, y además integra un sidebar izquierdo y derecho.
 * También, si el usuario tiene un professionalId, muestra un botón para registrar nuevas noticias.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Footer";
import NewsCard from "../components/News Card/";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function NoticiasPage() {
  // activeFilter: string que indica cuál filtro está activo. Si está vacío, se muestran todas las noticias.
  const [activeFilter, setActiveFilter] = useState<string>("");
  
  // news: array de noticias obtenidas del servidor.
  const [news, setNews] = useState<NewsItem[]>([]);
  
  // loading: estado para controlar si se está cargando la data.
  const [loading, setLoading] = useState(true);
  
  // professionalId: almacena el ID profesional del usuario autenticado (si aplica).
  const [professionalId, setProfessionalId] = useState<string | null>(null);
  
  // router: Hook de Next.js para navegación.
  const router = useRouter();

  // Efecto para obtener datos del usuario y luego noticias al montar el componente.
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/auth");
        const responseData = await response.json();

        if (responseData.success && responseData.data) {
          console.log("User data from server response:", responseData.data);
          
          // Si el usuario tiene un professionalid, lo guardamos en el estado.
          if (responseData.data.professionalid && responseData.data.professionalid !== null) {
            setProfessionalId(responseData.data.professionalid);
            console.log("Professional ID set to:", responseData.data.professionalid);
          }
        } else {
          console.warn("No user data available or response not successful.");
        }
      } catch (error) {
        console.error("Error fetching user data from server:", error);
      }
    }

    async function fetchNews() {
      try {
        // Obtenemos las noticias desde el endpoint /api/newsback
        const response = await fetch("/api/newsback");
        const data = await response.json();
        
        // Guardamos las noticias en el estado y quitamos el estado de carga
        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    }

    fetchUserData();
    fetchNews();
  }, []);

  /**
   * Filtramos las noticias según el filtro activo.
   * Si activeFilter está vacío, se muestran todas las noticias.
   * Si tiene un valor, se filtran las noticias por su ID (adaptando el formato del filtro).
   */
  const filteredNews = activeFilter
    ? news.filter(
        (item) =>
          item.id.toString() === activeFilter.replace("#Noticia", "")
      )
    : news;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header de la página */}
      <Header />

      {/* Banner Principal */}
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
          {/* Sidebar Izquierdo: Muestra las primeras 5 noticias como "Lo de hoy" */}
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
            {/* Noticia destacada: se muestra la primera noticia si existe y no se está cargando */}
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

            {/* Botones de Filtro: permiten filtrar noticias por ID específico */}
            <div className="flex gap-4 mb-6">
              {/* Botón para mostrar todas las noticias */}
              <button
                onClick={() => setActiveFilter("")}
                className={`${
                  activeFilter === "" ? "bg-blue-600" : "bg-blue-400"
                } text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500`}
              >
                Todas las Noticias
              </button>
              {/* Botones de filtro estáticos: #Noticia2, #Noticia3 */}
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

            {/* Grid de Noticias Filtradas: si estamos cargando muestra "Cargando...", de lo contrario muestra las noticias */}
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

          {/* Sidebar Derecho: Muestra publicidad (imagen estática) */}
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

      {/* Si el usuario tiene un professionalId, se muestra el botón para registrar nuevas noticias */}
      {professionalId && (
        <div className="flex justify-center items-center px-4 py-8">
          <button
            onClick={() => router.push("/admin/news")}
            className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-500"
          >
            Registrar Nueva Noticia
          </button>
        </div>
      )}

      {/* Footer de la página */}
      <Footer />
    </div>
  );
}
