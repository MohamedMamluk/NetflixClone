import React, { useRef } from 'react'
import { Show } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/lazy'
import SwiperCore, { Lazy, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
interface CategoryTypes {
    movies: Show[]
    categoryName: string
}
SwiperCore.use([Lazy, Pagination, Navigation])

const Category: React.FC<CategoryTypes> = ({ movies, categoryName }) => {
    const Prev = useRef(null)
    const Next = useRef(null)
    return (
        <section className="mx-auto w-full md:w-4/5 mb-20 px-4">
            <div className="flex items-start justify-between mb-3">
                <h2 className="font-bold text-lg headers">{categoryName}</h2>
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
                slidesPerView={3}
                spaceBetween={20}
            >
                {movies.map((movie, index) => (
                    <SwiperSlide
                        key={index}
                        className=" flex flex-col items-center text-center group cursor-pointer max-h-52"
                    >
                        <Link href={`/movie/${movie.id}`} passHref>
                            <a>
                                <div className="bg-gray-900 opacity-40 select-none group-hover:opacity-75 ">
                                    <Image
                                        src={movie.poster_path.w500}
                                        alt="Article image"
                                        height="200"
                                        width="150"
                                    />
                                </div>
                                <div className="group-hover:text-red-500">
                                    <h2>{movie.title}</h2>
                                </div>
                            </a>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Category
