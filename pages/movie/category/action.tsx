import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import TVCategory from '../../../components/pagesComponents/TVCategories'
import MovieCategory from '../../../components/pagesComponents/MovieCategories'
interface TVShowData {
    getAction: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
}
const GET_ACTION = gql`
    query getAction($page: Int) {
        getAction(page: $page) {
            id
            poster_path {
                w500
            }
            title
        }
    }
`
const Action = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_ACTION, {
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
                    data={data.getAction}
                    page={page}
                    setPage={setPage}
                    pageName="Action Movies"
                />
            )}
        </div>
    )
}

export default Action
