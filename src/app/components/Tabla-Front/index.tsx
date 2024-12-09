"use client";
import { motion } from "framer-motion";
import { EyeIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import PDFPage from '../paginasPDF/';
import { PDFViewer } from '@react-pdf/renderer';

interface Request {
  nombre: string;
  apellido: string;
  telefono: string;
  correo_electronico: string;
  celular_contacto: string;
  tipo_prueba: string;
  professionalid?: string;
}

export default function TableComponent() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('nombre');
  const [selectedItem, setSelectedItem] = useState<Request | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userEmail, setUserEmail] = useState<string>('');
  const [userProfessionalId, setUserProfessionalId] = useState<string>('none');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authResponse = await fetch('/api/auth', {
          method: 'GET',
          credentials: 'include',
        });
        const authData = await authResponse.json();
        
        // Asegúrate de que /api/auth devuelva professionalid
        if (authData.success && authData.data) {
          const email = authData.data.email || '';
          const professionalid = authData.data.professionalid || 'none';
          setUserEmail(email);
          setUserProfessionalId(professionalid);
          
          console.log("Obtenido desde /api/auth:");
          console.log("Email:", email);
          console.log("ProfessionalId:", professionalid);
        } else {
          console.warn("No se pudo obtener professionalid o email desde /api/auth");
        }
      } catch (e) {
        console.error('Error fetching user data:', e);
      }
    };

    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/tabla');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        if (jsonData.success && Array.isArray(jsonData.data)) {
          setRequests(jsonData.data);
          console.log("Requests obtenidas:", jsonData.data);
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

    // Primero se obtiene la info del usuario
    fetchUserData().then(() => {
      // Luego de tener userEmail y userProfessionalId, obtener las requests
      fetchRequests();
    });
  }, []);

  // Aplicar el filtrado según professionalid o email
  const filteredByUser = requests.filter((req) => {
    if (userProfessionalId !== 'none') {
      // Filtrar por professionalid
      return (req.professionalid || '').toLowerCase().trim() === userProfessionalId.toLowerCase().trim();
    } else {
      // Filtrar por email
      return req.correo_electronico.toLowerCase().trim() === userEmail.toLowerCase().trim();
    }
  });

  const filteredRequests = filteredByUser.filter((item) => {
    const searchValue = searchTerm.toLowerCase();
    switch (filterBy) {
      case 'nombre':
        return item.nombre.toLowerCase().includes(searchValue);
      case 'apellido':
        return item.apellido.toLowerCase().includes(searchValue);
      case 'telefono':
        return item.telefono.toLowerCase().includes(searchValue);
      case 'correo':
        return item.correo_electronico.toLowerCase().includes(searchValue);
      case 'tipo_prueba':
        return item.tipo_prueba.toLowerCase().includes(searchValue);
      default:
        return true;
    }
  });

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
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pt-24">
        <div className="w-full max-w-4xl mb-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Búsqueda de Registros</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ingrese término de búsqueda..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:w-1/4">
                <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filtrar por
                </label>
                <select
                  id="filter"
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="nombre">Nombre</option>
                  <option value="apellido">Apellido</option>
                  <option value="telefono">Teléfono</option>
                  <option value="correo">Correo</option>
                  <option value="tipo_prueba">Tipo de Prueba</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Apellido</th>
                <th className="px-4 py-2">Teléfono</th>
                <th className="px-4 py-2">Correo Electrónico</th>
                <th className="px-4 py-2">Teléfono Familiar</th>
                <th className="px-4 py-2">Tipo de Prueba</th>
                <th className="px-4 py-2">ProfessionalID</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((item, index) => (
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
                  <td className="border px-4 py-2">{item.professionalid || 'none'}</td>
                  <td className="border px-4 py-2">Visto</td>
                  <td className="border px-4 py-2">
                    <div className="flex flex-col items-center gap-2">
                      <button 
                        className="text-blue-500 hover:underline flex items-center"
                        onClick={() => {
                          setSelectedItem(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <EyeIcon className="h-5 w-5 mr-1" />
                        Ver
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

      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-[90%] h-[90%] relative">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="text-2xl">×</span>
            </button>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
              <PDFPage data={selectedItem} />
            </PDFViewer>
          </div>
        </div>
      )}
    </>
  );
}
