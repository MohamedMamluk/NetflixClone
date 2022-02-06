import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import TVCategory from '../../../components/pagesComponents/TVCategories'
interface TVShowData {
    getTVPopular: {
        id: string
        poster_path: {
            w500: string
        }
        name: string
    }[]
}
const GET_POPULAR = gql`
    query getPopular($page: Int) {
        getTVPopular(page: $page) {
            id
            poster_path {
                w500
            }
            name
        }
    }
`
const Popular = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_POPULAR, {
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
                    data={data.getTVPopular}
                    page={page}
                    setPage={setPage}
                    pageName="Popular Shows"
                />
            )}
        </div>
    )
}

export default Popular
