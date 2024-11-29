"use client";

import { useState } from "react";

const FormularioSolicitud = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    document_type: "",
    document_number: "",
    birth_date: "",
    age: "",
    city_of_residence: "",
    residence_address: "",
    nationality: "",
    phone: "",
    email: "",
    email_verification: "",
    ips: "",
    eps: "",
    contact_relation: "",
    contact_phone: "",
    privacy_policy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email !== formData.email_verification) {
      alert("El correo electrónico y su verificación no coinciden");
      return;
    }

    try {
      const response = await fetch("/api/requestback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      const result = await response.json();
      console.log("Formulario enviado con éxito:", result);
      alert("Formulario enviado con éxito");
      setFormData({
        first_name: "",
        last_name: "",
        document_type: "",
        document_number: "",
        birth_date: "",
        age: "",
        city_of_residence: "",
        residence_address: "",
        nationality: "",
        phone: "",
        email: "",
        email_verification: "",
        ips: "",
        eps: "",
        contact_relation: "",
        contact_phone: "",
        privacy_policy: false,
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <div className="bg-white p-8 pt-40 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl animate-fadeIn">
      {/* Encabezado principal */}
      <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Solicitud de estudio</h2>

      {/* Progreso del formulario */}
      <div className="flex justify-center items-center mb-8 space-x-4">
        {/* Paso 1 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
          <span className="text-sm mt-2 text-blue-600 font-medium">Datos del paciente</span>
        </div>
        <div className="w-16 h-0.5 bg-blue-600"></div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold">2</div>
          <span className="text-sm mt-2 text-gray-600 font-medium">Tipos de Biopsia</span>
        </div>
        <div className="w-16 h-0.5 bg-gray-300"></div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold">3</div>
          <span className="text-sm mt-2 text-gray-600 font-medium">Documentos</span>
        </div>
      </div>

      {/* Subtítulo */}
      <p className="text-gray-600 mb-8 text-center">Diligencia nuestro formato de solicitud de estudios de biología molecular en FICMAC</p>

      {/* Formulario */}
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Nombres" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Apellidos" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <select name="document_type" value={formData.document_type} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required>
            <option value="">Tipo de documento</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TI">Tarjeta de identidad</option>
          </select>
          <input type="text" name="document_number" value={formData.document_number} onChange={handleChange} placeholder="Número de documento" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Edad" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="city_of_residence" value={formData.city_of_residence} onChange={handleChange} placeholder="Ciudad Residencia" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="residence_address" value={formData.residence_address} onChange={handleChange} placeholder="Dirección de residencia" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nacionalidad" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Celular" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="email" name="email_verification" value={formData.email_verification} onChange={handleChange} placeholder="Verificación del correo electrónico" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="ips" value={formData.ips} onChange={handleChange} placeholder="IPS" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <input type="text" name="eps" value={formData.eps} onChange={handleChange} placeholder="EPS" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
          <select name="contact_relation" value={formData.contact_relation} onChange={handleChange} className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required>
            <option value="">Familiar de contacto</option>
            <option value="Padre">Padre</option>
            <option value="Madre">Madre</option>
            <option value="Otro">Otro</option>
          </select>
          <input type="tel" name="contact_phone" value={formData.contact_phone} onChange={handleChange} placeholder="Celular del familiar" className="p-4 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" required />
        </div>

        {/* Política de privacidad */}
        <div className="flex items-center space-x-3">
          <input type="checkbox" name="privacy_policy" checked={formData.privacy_policy} onChange={handleChange} id="privacy-policy" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all duration-300" required />
          <label htmlFor="privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-300">
            Autorizo la política y privacidad de datos
          </label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="w-full bg-[#EB356E] text-white py-4 rounded-lg font-semibold transform transition-all duration-300 hover:bg-[#d42f61] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#EB356E] focus:ring-opacity-50 active:scale-[0.98]">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioSolicitud;
