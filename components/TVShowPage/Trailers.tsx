import { Swiper, SwiperSlide } from 'swiper/react'
import { gql, useQuery } from '@apollo/client'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/lazy'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import React, { useRef } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Trailer } from '../../types'

SwiperCore.use([Pagination, Navigation])
interface SwiperProps {
    id: string
    title: string
}
const TRAILERS_QUERY = gql`
    query ($getTrailersId: ID!) {
        getTVTrailers(id: $getTrailersId) {
            key
            name
            site
        }
    }
`
interface DataType {
    getTVTrailers: Trailer[]
}
const Trailers: React.FC<SwiperProps> = ({ id, title }) => {
    const Prev = useRef(null)
    const Next = useRef(null)
    const { data, loading } = useQuery<DataType>(TRAILERS_QUERY, {
        variables: {
            getTrailersId: id,
        },
    })
    if (loading) return <h1>Loading...</h1>
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
                        slidesPerView: 2,
                    },
                    '1024': {
                        slidesPerView: 3,
                    },
                }}
                slidesPerView={1}
                spaceBetween={20}
            >
                {data?.getTVTrailers.slice(0, 10).map((trailer, index) => (
                    <SwiperSlide
                        key={index}
                        className=" flex flex-col items-center text-center group cursor-grab max-h-52"
                    >
                        <iframe
                            width="320"
                            height="215"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title={`${trailer.name}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>{' '}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Trailers
