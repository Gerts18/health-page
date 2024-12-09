'use client'

import { StrictMode } from "react"
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Index"
import LoginArea from "../components/Login"

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