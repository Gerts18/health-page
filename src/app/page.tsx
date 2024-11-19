'use client'

import './components/Login/login.css'
import { StrictMode } from "react"
import Header from "./components/Header/Index"
import Footer from '@/app/components/Footer/Index'
import LoginPage from './Login/page'

const Home = () => {
  return (
    <StrictMode>
        <Header />
        <LoginPage />
        <Footer />
    </StrictMode>
  )
}

export default Home