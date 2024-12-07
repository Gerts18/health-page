'use client'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Index'
import { StrictMode } from "react"
import RecoverArea from "@/app/components/Recover"

const RecoverPage = () => {
  return (
        <StrictMode>
        <Header />
        <RecoverArea />
        <Footer />
        </StrictMode>
  )
}

export default RecoverPage