'use client'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Index"
import FormSection from '../components/Form-Estudio-3/FormE3';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1 className="title">Solicitud de estudio</h1>
        <FormSection />
      </main>
      <Footer />
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
        }
        main {
          padding-top: 80px;
        }
        .title {
          text-align: center;
          margin: 20px 0;
          color: #4A4A4A;
        }
      `}</style>
    </div>
  );
}
