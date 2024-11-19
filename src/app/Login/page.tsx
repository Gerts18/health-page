'use client'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Index'
import '../components/Login/login.css'
import { StrictMode } from "react"
import LoginArea from "@/app/components/login/index"

const LoginPage = () => {
  return (
        <StrictMode>
        <Header />
        <LoginArea />
        <Footer />
        </StrictMode>
  )
}

export default LoginPage
