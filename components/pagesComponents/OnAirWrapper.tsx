import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { TVShow } from '../../types'
const GET_ON_AIR = gql`
    query GetPopular($page: Int) {
        getOnAir(page: $page) {
            id
            poster_path {
                w500
            }
            name
        }
    }
`
interface Data {
    getOnAir: TVShow[]
}
const OnAirWrapper = () => {
    const [page, setPage] = useState(1)
    const { data, fetchMore } = useQuery<Data>(GET_ON_AIR, {
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
            <div className="flex gap-3 flex-wrap">
                {data?.getOnAir.slice(20).map((movie, index) => {
                    return (
                        <Link href={`/tv/${movie.id}`} passHref key={index}>
                            <a>
                                <div className="w-48">
                                    <div className="w-1/2">
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
            <button
                className="border border-white bg-red-600 text-white rounded-lg px-6 py-2"
                onClick={() => {
                    setPage(page + 1)
                }}
            >
                Load More
            </button>
        </div>
    )
}

export default OnAirWrapper
