import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/lazy'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import React, { useRef } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ActorDetails } from '../../types'
import Actor from './Actor'

SwiperCore.use([Pagination, Navigation])
interface SwiperProps {
    actors: ActorDetails[]
    title: string
}

const SwiperContainer: React.FC<SwiperProps> = ({ actors, title }) => {
    const Prev = useRef(null)
    const Next = useRef(null)

    return (
        <section>
            <div className="flex items-start justify-between mb-3">
                <h2 className="headers text-xl my-3 font-bold uppercase">
                    {title}
                </h2>
                <div className="flex gap-5">
                    <button
                        className="w-14 h-14 rounded-full border-2 border-white hover:border-red-600 hover:text-red-700
                     flex items-center justify-center"
                        ref={Prev}
                    >
                        <AiOutlineArrowLeft size={20} />
                    </button>
                    <button
                        className="w-14 h-14 rounded-full border-2 border-white hover:border-red-600 hover:text-red-700
                     flex items-center justify-center"
                        ref={Next}
                    >
                        <AiOutlineArrowRight size={20} />
                    </button>
                </div>
            </div>
            <Swiper
                className="h-full"
                loop={true}
                onInit={(swiper) => {
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.prevEl = Prev.current
                    // @ts-ignore
                    // eslint-disable-next-line no-param-reassign
                    swiper.params.navigation.nextEl = Next.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}
                breakpoints={{
                    '640': {
                        slidesPerView: 4,
                    },
                    '1024': {
                        slidesPerView: 5,
                    },
                }}
                slidesPerView={2}
                spaceBetween={20}
            >
                {actors.slice(0, 10).map((actor, index) => (
                    <SwiperSlide
                        key={index}
                        className=" flex flex-col items-center text-center group cursor-grab max-h-52"
                    >
                        <Actor actor={actor} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default SwiperContainer
