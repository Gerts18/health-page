const ContactOptions = () => {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Queremos saber tu opinión</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {/* Encuesta */}
          <div className="p-6 bg-pink-100 rounded shadow-md text-center">
            <h3 className="text-xl font-bold text-pink-600">Encuesta de satisfacción</h3>
            <p className="mt-4">Para FICMAC es importante conocer tu opinión sobre nuestro servicio.</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Realizar</button>
          </div>
          {/* Quejas */}
          <div className="p-6 bg-blue-100 rounded shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600">Peticiones y quejas</h3>
            <p className="mt-4">Si tienes alguna solicitud, sugerencia o reclamo compártela con nosotros.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Realizar</button>
          </div>
          {/* Trabaja con nosotros */}
          <div className="p-6 bg-gray-100 rounded shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-600">Trabaja con nosotros</h3>
            <p className="mt-4">Queremos que seas parte de nuestro equipo de trabajo.</p>
            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">Realizar</button>
          </div>
        </div>
        <form className="mt-16 max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nombre" className="p-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Apellido" className="p-4 border border-gray-300 rounded" />
            <input type="email" placeholder="Correo electrónico" className="p-4 border border-gray-300 rounded" />
            <input type="text" placeholder="Ciudad" className="p-4 border border-gray-300 rounded" />
          </div>
          <textarea placeholder="Mensaje" className="w-full p-4 border border-gray-300 rounded"></textarea>
          <div className="flex items-center space-x-4">
            <input type="checkbox" id="privacy" className="h-4 w-4" />
            <label htmlFor="privacy" className="text-gray-600">Autorizo la política y privacidad de datos</label>
          </div>
          <button type="submit" className="w-full md:w-auto px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-600">
            Enviar
          </button>
        </form>
      </section>
    );
  };
  
  export default ContactOptions;
  