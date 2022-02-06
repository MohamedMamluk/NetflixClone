import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { Show } from '../../types'
interface Card {
    id: number
}

const GET_TV_SHOW_DETAILS = gql`
    query GetDetails($id: Int) {
        getTVShowDetails(id: $id) {
            name
            vote_average
            backdrop_path {
                w500
            }
        }
    }
`
interface Data {
    getTVShowDetails: {
        name: string
        vote_average: number
        backdrop_path: {
            w500: string
        }
    }
}
const TVCard: React.FC<Card> = ({ id }) => {
    const { data, loading } = useQuery<Data>(GET_TV_SHOW_DETAILS, {
        variables: {
            id,
        },
    })
    if (loading)
        return (
            <div className=" relative flex flex-col items-center text-sm w-32 h-32 bg-gray-500  gap-2 animate-ping">
                <div className="w-full bg-gray-500 h-1/2"></div>
                <div className=" flex flex-col justify-between h-1/2">
                    <h3 className=" text-gray-200 w-16 animate-pulse"></h3>
                    <div className="flex gap-2 mb-2 items-center justify-between ">
                        <div className="w-10 animate-pulse"></div>
                        <span className="block w-10 animate-pulse"></span>
                    </div>
                </div>
            </div>
        )
    return (
        <div className=" relative flex flex-col items-center text-sm  hover:scale-105 transition-all duration-200 ease-out group  gap-2 ">
            <div>
                <img
                    className="w-full"
                    src={data?.getTVShowDetails.backdrop_path.w500}
                    alt=""
                />
            </div>
            <div className=" flex flex-col justify-between group-hover:text-yellow-300">
                <h3 className=" text-gray-200 group-hover:text-red-500">
                    {data?.getTVShowDetails.name}
                </h3>
                <div className="flex gap-2 mb-2 items-center justify-between ">
                    <img src="/imdb.png" className="w-10" alt="" />
                    <span className="block">
                        {data?.getTVShowDetails.vote_average}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TVCard
