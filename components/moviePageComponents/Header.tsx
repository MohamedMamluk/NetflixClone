import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import Link from 'next/link'
import { MovieDetails } from '../../types'
interface HeaderProps {
    data: {
        getMovieDetails: MovieDetails
    }
}
const Header: React.FC<HeaderProps> = ({ data }) => {
    const [rating, setRating] = useState<number[]>([])
    const [favoriteArray, setFavoriteArray] = useState<string[]>([])
    const addToFav = (id: string) => {
        setFavoriteArray([...favoriteArray, id])
    }
    const removeFromFav = (id: string) => {
        const newFav = favoriteArray.filter((item) => item != id)
        setFavoriteArray(newFav)
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
    useEffect(() => {
        let ratingAfter = Math.floor(data.getMovieDetails.vote_average / 2)
        const array = []
        while (ratingAfter > 0) {
            array.push(ratingAfter)
            ratingAfter -= 1
        }

        setRating(array)
    }, [data.getMovieDetails.vote_average])

    return (
        <div
            className="h-[50vh] relative"
            style={{
                backgroundImage: `url(${data.getMovieDetails.backdrop_path.original})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Shade start */}
            <div className=" bg-gray-900 opacity-60 absolute inset-0 select-none"></div>
            {/* Shade end */}
            {/* Content start */}
            <div className="relative z-20 flex flex-col w-full justify-between p-5 h-full text-center mb-4">
                {/* Header buttons start */}
                <div className="w-full flex justify-between text-3xl">
                    <Link href="/" passHref>
                        <a>
                            <AiOutlineArrowLeft />
                        </a>
                    </Link>

                    <div className="cursor-pointer">
                        {favoriteArray.find(
                            (item) => item == String(data.getMovieDetails.id)
                        ) ? (
                            <AiFillHeart
                                fill="red"
                                size={30}
                                onClick={() =>
                                    removeFromFav(
                                        String(data.getMovieDetails.id)
                                    )
                                }
                            />
                        ) : (
                            <MdFavoriteBorder
                                size={30}
                                onClick={() =>
                                    addToFav(String(data.getMovieDetails.id))
                                }
                            />
                        )}
                    </div>
                </div>
                {/* Header buttons end */}
                {/* Header info start*/}
                <div className="flex flex-col items-center">
                    <h2 className="headers text-xl px-3 font-bold">
                        {data.getMovieDetails.title}
                    </h2>
                    <div className="flex justify-center text-gray-200 text-lg italic flex-wrap">
                        {data.getMovieDetails.genres.map((genre, index) => {
                            return (
                                <span className="genre " key={index}>
                                    {genre.name}
                                </span>
                            )
                        })}
                    </div>
                    <div className="flex gap-2">
                        {rating.length > 0 &&
                            rating.map((ratin, index) => {
                                return (
                                    <AiFillStar
                                        key={index}
                                        fill="gold"
                                        size={20}
                                    />
                                )
                            })}
                    </div>
                </div>
                {/* Header info end */}
            </div>
            {/* Content end */}
        </div>
    )
}

export default Header
