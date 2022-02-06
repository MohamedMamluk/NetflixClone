import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import MovieCategory from '../../../components/pagesComponents/MovieCategories'
interface TVShowData {
    getRomance: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
}
const GET_Romance = gql`
    query getRomance($page: Int) {
        getRomance(page: $page) {
            id
            poster_path {
                w500
            }
            title
        }
    }
`
const Romance = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_Romance, {
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
                <MovieCategory
                    data={data.getRomance}
                    page={page}
                    setPage={setPage}
                    pageName="Romance Movies"
                />
            )}
        </div>
    )
}

export default Romance
