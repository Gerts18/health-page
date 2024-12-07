"use client";
import { motion } from "framer-motion";
import { EyeIcon, DownloadIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

interface Request {
  nombre: string;
  apellido: string;
  telefono: string;
  correo_electronico: string;
  celular_contacto: string;
  tipo_prueba: string;
}

export default function TableComponent() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/tabla');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        
        if (jsonData.success && Array.isArray(jsonData.data)) {
          setRequests(jsonData.data);
        } else {
          throw new Error('Formato de datos inválido');
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-lg">Cargando datos...</div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-red-500">Error: {error}</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Barra de búsqueda */}
      <div className="w-full max-w-4xl flex items-center justify-between bg-white rounded-lg shadow p-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="ml-4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none [&>option]:py-2"
        >
          <option value="Categoria">Categoría</option>
          <option value="nombre">Nombre</option>
          <option value="apellido">Apellido</option>
          <option value="telefono">Teléfono</option>
          <option value="correo">Correo</option>
          <option value="estado">Estado</option>
        </select>
      </div>

      {/* Tabla */}
      <div className="w-full max-w-4xl mt-6 bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Apellido</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2">Correo Electrónico</th>
              <th className="px-4 py-2">Teléfono Familiar</th>
              <th className="px-4 py-2">Tipo de Prueba</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-100"
              >
                <td className="border px-4 py-2">{item.nombre}</td>
                <td className="border px-4 py-2">{item.apellido}</td>
                <td className="border px-4 py-2">{item.telefono}</td>
                <td className="border px-4 py-2">{item.correo_electronico}</td>
                <td className="border px-4 py-2">{item.celular_contacto}</td>
                <td className="border px-4 py-2">{item.tipo_prueba || 'PCR'}</td>
                <td className="border px-4 py-2">Visto</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-col items-center gap-2">
                    <button className="text-blue-500 hover:underline flex items-center">
                      <EyeIcon className="h-5 w-5 mr-1" />
                      Ver
                    </button>
                    <button className="text-red-500 hover:underline flex items-center">
                      <DownloadIcon className="h-5 w-5 mr-1" />
                      Descargar
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-400">
        Volver
      </button>
    </div>
  );
}
