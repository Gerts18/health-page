"use client";
import React, { useState } from "react";
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Footer';

export default function SubirNoticias() {
  const [formData, setFormData] = useState({
    titulo: "",
    contenido: "",
    imagen: "",
    link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al guardar la noticia");

      const noticia = await response.json();
      toast.success("Noticia subida con éxito");
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
              <Input
                label="Título"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Escribe el título aquí"
                required
              />
              <textarea
                name="contenido"
                value={formData.contenido}
                onChange={handleChange}
                placeholder="Escribe el contenido aquí"
                rows={5}
                required
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Input
                label="URL de la Imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                placeholder="Ejemplo: /assets/imagen.jpg"
                required
              />
              <Input
                label="Link de la Noticia"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com"
                required
              />
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
      <ToastContainer />
    </div>
  );
}
