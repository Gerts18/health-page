import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/OrhhcTHXQi0",
    categories: ["Quién Somos"],
  },
  {
    id: 2,
    title: "Nacimos con un propósito - Aniversario n.º 15 FICMAC 🎉",
    date: "Junio 7, 2024",
    videoUrl: "https://www.youtube.com/embed/JAkrgolbD1Q",
    categories: ["Propósito"],
  },
  {
    id: 3,
    title: "KRAS una GTPasa y miembro de la familia de las proteínas RAS",
    date: "Enero 19, 2024",
    videoUrl: "https://www.youtube.com/embed/FnYBQxfmteE",
    categories: ["Mutación KRAS"],
  },
  {
    id: 4,
    title: "Continuidad - Estructura primaria de las proteínas RAS",
    date: "Enero 19, 2024",
    videoUrl: "https://www.youtube.com/embed/jhpDxqDVSz8",
    categories: ["Mutación KRAS"],
  },
  {
    id: 5,
    title: "Historia de la biomarcación en Colombia",
    date: "Enero 19, 2024",
    videoUrl: "https://www.youtube.com/embed/R192pfdeMYo",
    categories: ["Historia FICMAC", "Laboratorio"],
  },
  {
    id: 6,
    title: "Estrategia de selección de fármacos para RAS",
    date: "Enero 19, 2024",
    videoUrl: "https://www.youtube.com/embed/JdRajvjhID4",
    categories: ["Mutación KRAS", "Fármacos"],
  },
];

const VideoList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const allCategories = [...new Set(videos.flatMap((video) => video.categories))];

  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.categories.includes(selectedCategory))
    : videos;

  return (
    <div className="w-11/12 max-w-screen-lg mx-auto mb-24 text-center">
      <h1 className="">Comprendiendo la complejidad del cáncer</h1>
      {/* Filtro de categoría */}
      <div className="mt-6 mb-8 text-left">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded-lg shadow-sm"
        >
          <option value="">Todas las categorías</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-300 rounded-lg bg-white shadow-md p-4 flex flex-col justify-between h-80"
          >
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-40 rounded-md"
              allowFullScreen
            ></iframe>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
