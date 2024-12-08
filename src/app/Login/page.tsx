'use client'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Index'
import { StrictMode } from "react"
import LoginArea from "@/app/components/Login"

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