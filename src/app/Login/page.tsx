'use client'

import Footer from "../components/Footer/Index"
import Header from "../components/Header/Index"
import '../components/LoginImg/login.css'
import { StrictMode } from "react"
import LoginArea from "@/app/components/LoginImg/index"

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
