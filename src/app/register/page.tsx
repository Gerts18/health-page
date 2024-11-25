'use client'

import Footer from "../components/Footer/Index"
import Header from "../components/Header/Index"
import Register from "../components/Register"

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Register />
      <Footer />
    </main>
  )
}

export default RegisterPage
