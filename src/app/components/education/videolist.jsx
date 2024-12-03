import React, { useState } from "react";
import "./index.css";

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

  // Obtener categorías únicas
  const allCategories = [
    ...new Set(videos.flatMap((video) => video.categories)),
  ];

  // Filtrar videos según la categoría seleccionada
  const filteredVideos = selectedCategory
    ? videos.filter((video) =>
        video.categories.includes(selectedCategory)
      )
    : videos;

  return (
    <div className="video-list-container">
      {/* Filtro de categoría */}
      <div className="category-filter">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todas las categorías</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de videos */}
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <div className="video-card" key={video.id}>
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="video-iframe"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
            <p>{video.date}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default VideoList;
