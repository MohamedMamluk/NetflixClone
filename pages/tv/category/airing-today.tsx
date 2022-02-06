import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import TVCategory from '../../../components/pagesComponents/TVCategories'
interface TVShowData {
    getAiringToday: {
        id: string
        poster_path: {
            w500: string
        }
        name: string
    }[]
}
const GET_AIRING_TODAY = gql`
    query getAiringToday($page: Int) {
        getAiringToday(page: $page) {
            id
            poster_path {
                w500
            }
            name
        }
    }
`
const AiringToday = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_AIRING_TODAY, {
        variables: {
            page,
        },
    })
    if (loading)
        return (
            <h1
                className={` origin-center text-center animate-ping text-2xl headers font-extrabold`}
            >
                Loading...
            </h1>
        )
    return (
        <div>
            {data && (
                <TVCategory
                    data={data.getAiringToday}
                    page={page}
                    setPage={setPage}
                    pageName="Airing Today"
                />
            )}
        </div>
    )
}

export default AiringToday
