import React from "react";
import "./index.css";

const videos = [
  {
    id: 1,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Somos FICMAC | Laboratorio colombiano",
    date: "Julio 31, 2024",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoList = () => {
  return (
    <div className="video-list-container">
      {/* Filtro de categoría */}
      <div className="category-filter">
        <select>
          <option value="">Todas las categorías</option>
        </select>
      </div>

      {/* Lista de videos */}
      <div className="video-grid">
        {videos.map((video) => (
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

      {/* Botón "Cargar más" */}
      <div className="load-more-container">
        <button>Cargar más</button>
      </div>
    </div>
  );
};

export default VideoList;
