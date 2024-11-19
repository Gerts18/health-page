'use client'

import Login from "./components/Login/index"
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import './components/Login/login.css'
import { StrictMode } from "react"

const Home = () => {
  return (
    <StrictMode>
        <Header />
        <Login />
        <Footer />
    </StrictMode>
  )
}

export default Home