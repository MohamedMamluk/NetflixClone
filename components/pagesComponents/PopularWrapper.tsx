import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { Show, TVShow } from '../../types'
import Navbar from '../nav/navbar/Navbar'
const GET_TV_POPULAR = gql`
    query GetPopular($page: Int) {
        getTVPopular(page: $page) {
            id
            poster_path {
                w500
            }
            name
        }
    }
`
interface Data {
    getTVPopular: TVShow[]
}
const PopularWrapper = () => {
    const [page, setPage] = useState(1)
    const { data, fetchMore } = useQuery<Data>(GET_TV_POPULAR, {
        variables: {
            page: page,
        },
    })
    useEffect(() => {
        fetchMore({
            variables: {
                page: page,
            },
        })
    }, [page, fetchMore])

    return (
        <div>
            <Navbar type="movie" />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center">
                {data?.getTVPopular.map((movie, index) => {
                    return (
                        <Link href={`/tv/${movie.id}`} passHref key={index}>
                            <a className="w-1/2 max-w-[200px]">
                                <div className="text-center">
                                    <div className="rounded-lg overflow-hidden">
                                        <img
                                            className="w-full"
                                            src={movie.poster_path.w500}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
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
                        setPage(page - 1)
                    }}
                >
                    Load Less
                </button>
                <button
                    className="border border-white bg-red-600 text-white rounded-lg px-6 py-2"
                    onClick={() => {
                        setPage(page + 1)
                    }}
                >
                    Load More
                </button>
            </div>
        </div>
    )
}

export default PopularWrapper
