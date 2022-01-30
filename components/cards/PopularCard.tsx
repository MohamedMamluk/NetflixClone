import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { Show } from '../../types'
interface Card {
    id: string
}

const GET_MOVIE_DETAILS = gql`
    query GetDetails($id: ID!) {
        getMovieDetails(id: $id) {
            title
            vote_average
            backdrop_path {
                w500
            }
        }
    }
`
interface Data {
    getMovieDetails: {
        title: string
        vote_average: number
        backdrop_path: {
            w500: string
        }
    }
}
const PopularCard: React.FC<Card> = ({ id }) => {
    const { data, loading } = useQuery<Data>(GET_MOVIE_DETAILS, {
        variables: {
            id,
        },
    })
    if (loading) return <h1>Loading...</h1>
    return (
        <div className=" relative flex flex-col items-center text-sm w-11/12  gap-2 ">
            <div>
                <img
                    className="w-full"
                    src={data?.getMovieDetails.backdrop_path.w500}
                    alt=""
                />
            </div>
            <div className=" flex flex-col justify-between">
                <h3 className=" text-gray-200">
                    {data?.getMovieDetails.title}
                </h3>
                <div className="flex gap-2 mb-2 items-center justify-between ">
                    <img src="/imdb.png" className="w-10" alt="" />
                    <span className="block">
                        {data?.getMovieDetails.vote_average}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PopularCard
