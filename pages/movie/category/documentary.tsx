import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import MovieCategory from '../../../components/pagesComponents/MovieCategories'
interface TVShowData {
    getDocumentary: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
}
const GET_DOCUMENTARY = gql`
    query getDocumentary($page: Int) {
        getDocumentary(page: $page) {
            id
            poster_path {
                w500
            }
            title
        }
    }
`
const Documentary = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_DOCUMENTARY, {
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
                    data={data.getDocumentary}
                    page={page}
                    setPage={setPage}
                    pageName="Documentary Movies"
                />
            )}
        </div>
    )
}

export default Documentary
