import React from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'

const SwiperSlideElement: React.FC = ({ children }) => {
    return <SwiperSlide>{children}</SwiperSlide>
}

export default SwiperSlideElement
