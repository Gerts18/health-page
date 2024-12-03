'use client'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Index'
import { StrictMode } from "react"
import CarruselArea from "../components/education/carrusel"
import VideoArea from "../components/education/video"
import VideoListArea from "../components/education/videolist"

const CarruselPage = () => {
  return (
        <StrictMode>
        <CarruselArea />
        <VideoArea />
        <VideoListArea />
        </StrictMode>
  )
}

export default CarruselPage