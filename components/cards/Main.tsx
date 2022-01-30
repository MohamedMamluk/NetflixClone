import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import Info from './Main.info'
import { Show } from '../../types/index'
interface MainInfo {
    movie: Show[]
}
SwiperCore.use([Autoplay, Navigation, Pagination])
interface FavData {
    id: string
    img: string
    title: string
}
const Main: React.FC<MainInfo> = ({ movie }) => {
    const [favoriteArray, setFavoriteArray] = useState<string[]>([])
    const [updatedFavoriteArray, setUpdatedFavoriteArray] = useState<string[]>(
        []
    )
    const addToFav = (id: string) => {
        setFavoriteArray([...favoriteArray, id])
        setUpdatedFavoriteArray(favoriteArray)
    }
    const removeFromFav = (id: string) => {
        const newFav = favoriteArray.filter((item) => item != id)
        setFavoriteArray(newFav)
        setUpdatedFavoriteArray(newFav)
    }
    useEffect(() => {
        const favorites = localStorage.getItem('Favorites')
        let items: string[] = []
        if (!favorites) {
            setFavoriteArray(items)
        } else {
            items = JSON.parse(favorites)
            setFavoriteArray(items)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Favorites', JSON.stringify(favoriteArray))
        const items = localStorage.getItem('Favorites')
    }, [favoriteArray])

    return (
        <div className=" mx-auto w-full md:w-2/3 md:h-5/6 mb-4 px-4 lg:px-0">
            <h2 className="mb-3 text-lg font-bold headers">Latest Releases</h2>

            <Swiper
                className="h-full"
                loop={true}
                // navigation={{
                //     prevEl: Prev.current ? Prev.current : undefined,
                //     nextEl: Next.current ? Next.current : undefined,
                // }}
                navigation
                // onInit={(swiper) => {
                //     // @ts-ignore
                //     // eslint-disable-next-line no-param-reassign
                //     swiper.params.navigation.prevEl = Prev.current
                //     // @ts-ignore
                //     // eslint-disable-next-line no-param-reassign
                //     swiper.params.navigation.nextEl = Next.current
                //     swiper.navigation.init()
                //     swiper.navigation.update()
                // }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                {movie.map((mov, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url(${mov.backdrop_path.w500})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                        }}
                        className="relative cursor-grab aspect-video rounded-[20px] overflow-hidden flex items-end "
                    >
                        <div className="  bg-gray-900 opacity-40 absolute inset-0 select-none"></div>
                        <Info
                            title={mov.title}
                            id={String(mov.id)}
                            fav={
                                favoriteArray.find(
                                    (item) => item === String(mov.id)
                                )
                                    ? true
                                    : false
                            }
                            addToFav={addToFav}
                            removeFromFav={removeFromFav}
                        ></Info>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Main
