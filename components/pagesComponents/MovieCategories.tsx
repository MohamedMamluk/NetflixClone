import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface PageProps {
    data: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    pageName: string
}
const MovieCategory: React.FC<PageProps> = ({
    data,
    page,
    setPage,
    pageName,
}) => {
    return (
        <div className="pb-20 lg:pb-0">
            <h1 className="text-center my-4 headers text-xl font-bold animate-pulse">
                {pageName}
            </h1>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center">
                {data?.map((movie, index) => {
                    return (
                        <Link href={`/movie/${movie.id}`} passHref key={index}>
                            <a className="w-1/2 max-w-[200px]">
                                <div className="text-center">
                                    <div className="rounded-lg overflow-hidden">
                                        <img
                                            className="w-full"
                                            src={movie.poster_path.w500}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.title}</h1>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
            <div className="flex justify-between max-w-md mx-auto mt-10">
                <button
                    className="border border-white bg-red-600 text-white rounded-lg px-6 py-2"
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setPage(page - 1 !== 0 ? page - 1 : 1)
                    }}
                >
                    Previous
                </button>
                <button
                    className="border border-white bg-red-600 text-white rounded-lg px-6 py-2"
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setPage(page + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default MovieCategory
