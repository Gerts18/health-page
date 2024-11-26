// pages/contact.js
import Header from '../components/Header/Index';
import ContactBanner from '../components/Contacto/ContactBaner';
import ContactOptions from '../components/Contacto/ContactOptions';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        <ContactBanner />
        <ContactOptions />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
