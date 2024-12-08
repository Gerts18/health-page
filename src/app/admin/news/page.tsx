"use client";
import React, { useState } from "react";
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Footer';

export default function SubirNoticias() {
  // formData: Estado para almacenar los datos del formulario (título, contenido, imagen, link)
  const [formData, setFormData] = useState({
    titulo: "",
    contenido: "",
    imagen: "",
    link: "",
  });

  // handleChange: Actualiza el estado con el valor de cada campo del formulario cuando cambian
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Creamos un nuevo estado con el valor actualizado del campo modificado
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handleSubmit: Envía el formulario al backend para guardar la noticia
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Se envían los datos al endpoint /api/newsback/ por método POST
      const response = await fetch("/api/newsback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Si la respuesta no es OK, lanzamos un error
      if (!response.ok) throw new Error("Error al guardar la noticia");

      // Si todo sale bien, mostramos un mensaje de éxito
      await response.json();
      toast.success("Noticia subida con éxito");
      
      // Reiniciamos el formulario
      setFormData({ titulo: "", contenido: "", imagen: "", link: "" });
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al subir la noticia");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Fondo y formulario */}
      <div
        className="flex-1 flex justify-center items-center bg-cover bg-center mt-16 py-20"
        style={{ backgroundImage: "url('/assets/slider-main.png')" }}
      >
        <Card className="w-full max-w-md shadow-lg rounded-lg bg-white">
          <CardBody>
            <h2 className="text-2xl font-bold text-center mb-6">Subir Noticia</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Campo para el título de la noticia */}
              <Input
                label="Título"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Escribe el título aquí"
                required
              />
              {/* Campo para el contenido de la noticia (textarea) */}
              <textarea
                name="contenido"
                value={formData.contenido}
                onChange={handleChange}
                placeholder="Escribe el contenido aquí"
                rows={5}
                required
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Campo para la URL de la imagen */}
              <Input
                label="URL de la Imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                placeholder="Ejemplo: /assets/imagen.jpg"
                required
              />
              {/* Campo para el link de la noticia */}
              <Input
                label="Link de la Noticia"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com"
                required
              />
              {/* Botón para enviar el formulario */}
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Subir Noticia
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>

      {/* Footer */}
      <Footer />

      {/* Contenedor de notificaciones */}
      <ToastContainer />
    </div>
  );
}
