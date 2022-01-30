import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'

interface InfoType {
    title: String
    id: string
    fav: boolean
    addToFav(id: string): void
    removeFromFav(id: string): void
}
const Info: React.FC<InfoType> = ({
    title,
    id,
    fav,
    addToFav,
    removeFromFav,
}) => {
    return (
        <div className="text-white relative z-10 mb-2 ml-2 lg:mb-6 lg:ml-6 text-lg lg:text-3xl flex flex-col gap-2 lg:gap-5">
            <h2 className="text-white text-2xl lg:text-4xl pr-3">{title}</h2>
            <div className="flex gap-2 items-center">
                <Link href={`/movie/${id}`}>
                    <a className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-lg lg:text-xl">
                        Read More
                    </a>
                </Link>
                <div className="cursor-pointer">
                    {fav ? (
                        <AiFillHeart
                            fill="red"
                            size={30}
                            onClick={() => removeFromFav(String(id))}
                        />
                    ) : (
                        <MdFavoriteBorder
                            size={30}
                            onClick={() => addToFav(String(id))}
                        />
                    )}
                </div>
                {/* <Button
                    title="+"
                    classes="bg-gray-200 hover:bg-gray-300 text-sm text-black text-lg lg:text-xl px-4"
                /> */}
            </div>
        </div>
    )
}
export default Info
