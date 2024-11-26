const ContactBanner = () => {
    return (
      <section className="relative bg-gray-100 text-center py-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}></div>
        <div className="relative z-10 text-gray-800">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg">Envíanos cualquier pregunta sobre nuestros servicios a través de esta sección de contacto. Estamos aquí para ayudarte.</p>
        </div>
        <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
      </section>
    );
  };
  
  export default ContactBanner;
  