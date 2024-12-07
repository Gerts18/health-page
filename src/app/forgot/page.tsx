'use client'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Index'
import { StrictMode } from "react"
import ForgotArea from "@/app/components/Forgot"

const LoginPage = () => {
  return (
        <StrictMode>
        <Header />
        <ForgotArea />
        <Footer />
        </StrictMode>
  )
}

export default LoginPage