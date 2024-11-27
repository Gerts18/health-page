const FormularioSolicitud = () => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-slideDown">
          Solicitud de estudio
        </h2>
        <p className="text-gray-600 mb-6 animate-slideDown">
          Diligencia nuestro formato de solicitud de estudios de biología molecular en FICMAC
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombres"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <select className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300" required>
              <option value="">Tipo de documento</option>
              <option value="CC">Cédula de ciudadanía</option>
              <option value="TI">Tarjeta de identidad</option>
            </select>
            <input
              type="text"
              placeholder="Número de documento"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="date"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="number"
              placeholder="Edad"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Ciudad Residencia"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Dirección de residencia"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Nacionalidad"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="tel"
              placeholder="Celular"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Verificación del correo electrónico"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="IPS"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <input
              type="text"
              placeholder="EPS"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
            <select className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300" required>
              <option value="">Familiar de contacto</option>
              <option value="Padre">Padre</option>
              <option value="Madre">Madre</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              type="tel"
              placeholder="Celular del familiar"
              className="p-3 border border-gray-200 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              required
            />
          </div>
          <div className="flex items-center space-x-3 group transition-all duration-300">
            <input 
              type="checkbox" 
              id="privacy-policy" 
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all duration-300" 
              required 
            />
            <label htmlFor="privacy-policy" className="text-sm text-gray-600 group-hover:text-blue-600 transition-duration-300">
              Autorizo la política y privacidad de datos
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#EB356E] text-white py-4 rounded-lg font-semibold
              transform transition-all duration-300 
              hover:bg-[#d42f61] hover:scale-[1.02] 
              focus:outline-none focus:ring-2 focus:ring-[#EB356E] focus:ring-opacity-50
              active:scale-[0.98]"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  };
  
  export default FormularioSolicitud;
  